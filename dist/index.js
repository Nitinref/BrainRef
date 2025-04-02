"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("./utils");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const zod_1 = require("zod");
const db_1 = require("./db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const middleware_1 = require("./middleware");
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/api/v1/signup", async (req, res) => {
    const requiredBody = zod_1.z.object({
        username: zod_1.z.string().min(5).max(15),
        password: zod_1.z.string().min(8).max(15)
    });
    const parseData = requiredBody.safeParse(req.body);
    if (!parseData.success) {
        res.json({
            message: "incorect format",
            error: parseData.error.format()
        });
        return;
    }
    try {
        const { username, password } = parseData.data;
        const hashedPassword = await bcryptjs_1.default.hash(password, 5);
        await db_1.userModel.create({
            username: username,
            password: hashedPassword
        });
        res.json({
            message: "You are signed up successfully",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});
app.post("/api/v1/signin", async function (req, res) {
    try {
        const { username, password } = req.body;
        const enterUser = await db_1.userModel.findOne({
            username,
        });
        if (!enterUser || !enterUser.password) {
            res.status(400).json({
                msg: "Invalid username or password"
            });
            return;
        }
        const comparePass = await bcryptjs_1.default.compare(password, enterUser.password);
        if (!enterUser) {
            res.status(200).json({
                msg: "invalid username"
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: enterUser._id
        }, config_1.JWT_SECRET);
        res.json({ message: "Login successful", token });
    }
    catch (error) {
        console.error("Error during signin:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.post("/api/v1/content", middleware_1.userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await db_1.ContentModel.create({
        link,
        type,
        title: req.body.type,
        userId: req.userId,
        tags: []
    });
    res.json({
        msg: "content"
    });
});
app.get("/api/v1/content", middleware_1.userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await db_1.ContentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    });
});
app.delete("/api/v1/content", middleware_1.userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await db_1.ContentModel.deleteMany({
        _id: contentId,
        userId: req.userId
    });
    res.json({
        msg: "content is deleated "
    });
});
app.post("/api/v1/brain/share", middleware_1.userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await db_1.LinkModel.findOne({
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = (0, utils_1.random)(10);
        await db_1.LinkModel.create({
            userId: req.userId,
            hash: hash
        });
        res.json({
            message: hash
        });
    }
    else { // Disable the URL
        await db_1.LinkModel.deleteOne({
            userId: req.userId // Delete all links for this user
        });
        res.json({
            message: "Removed link"
        });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const link = await db_1.LinkModel.findOne({
        hash: req.params.shareLink
    });
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input "
        });
        return;
    }
    const content = await db_1.ContentModel.findOne({
        userId: link.userId
    });
    const user = await db_1.userModel.findOne({
        _id: link.userId
    });
    // if(!user){
    //     res.status(411).json({
    //         message:"user not found "
    //     })
    // }
    res.json({
        username: user === null || user === void 0 ? void 0 : user.username,
        content: content
    });
});
app.listen(3000);
