
import jwt from "jsonwebtoken";
import { random } from "./utils";
import { JWT_SECRET } from "./config";
import mongoose from "mongoose";
import express from "express";
const app = express();
import { Request, Response } from "express";
import { z } from "zod";
import { ContentModel, LinkModel, userModel } from "./db";
import bcrypt, { hash } from "bcryptjs";
import { userMiddleware } from "./middleware";
import cors from "cors";

app.use(express.json());
app.use(cors());
app.post("/api/v1/signup", async (req, res) => {

    const requiredBody = z.object({
        username: z.string().min(5).max(15),
        password: z.string().min(8).max(15)
    })
    const parseData = requiredBody.safeParse(req.body)
    if (!parseData.success) {
        res.json({
            message: "incorect format",
            error: parseData.error.format()
        })
        return
    }

    try {
        const { username, password } = parseData.data;
        const hashedPassword = await bcrypt.hash(password, 5);


        await userModel.create({
            username: username,

            password: hashedPassword
        })

        res.json({
            message: "You are signed up successfully",
        });


    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }


})

app.post("/api/v1/signin", async function (req, res) {
    try {
        const { username, password } = req.body;

        const enterUser = await userModel.findOne({
            username,
        })

        if (!enterUser || !enterUser.password) {
            res.status(400).json({
                msg: "Invalid username or password"
            });
            return;
        }
        const comparePass = await bcrypt.compare(password, enterUser.password);
        if (!enterUser) {
            res.status(200).json({
                msg: "invalid username"
            })

        }

        const token = jwt.sign({
            id: enterUser._id
        }, JWT_SECRET)

        res.json({ message: "Login successful", token });


    } catch (error) {
        console.error("Error during signin:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        title:req.body.type,
        userId: req.userId,
        tags: []
    })

    res.json({
        msg: "content"
    })
})
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })

})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {

    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        _id: contentId,
        userId: req.userId
    })
    res.json({
        msg: "content is deleated "
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }

        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        });

        res.json({
            message: hash
        });
    } else { // Disable the URL
        await LinkModel.deleteOne({
            userId: req.userId // Delete all links for this user
        });

        res.json({
            message: "Removed link"
        });
    }
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {


    const link = await LinkModel.findOne({
        hash: req.params.shareLink

    })
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input "
        })
        return
    }
    const content = await ContentModel.findOne({
        userId: link.userId
    })

    const user = await userModel.findOne({
        _id: link.userId
    })

    // if(!user){
    //     res.status(411).json({
    //         message:"user not found "
    //     })
    // }

    res.json({
        username: user?.username,
        content: content

    })

})

app.listen(3000);

