"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.ContentModel = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
mongoose_1.default.connect("mongodb+srv://nitinyadav484220:dhB5JqYv8LbnffVT@cluster0.aq9li.mongodb.net/second-brain");
const userSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String
});
const contentSchema = new mongoose_2.Schema({
    title: { type: String },
    link: { type: String },
    tag: [{ type: mongoose_1.default.Types.ObjectId, ref: "Tag" }],
    type: String,
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User", required: true }
});
const linkSchema = new mongoose_2.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
});
exports.userModel = (0, mongoose_3.model)("User", userSchema);
exports.ContentModel = (0, mongoose_3.model)("Content", contentSchema);
exports.LinkModel = (0, mongoose_3.model)("Link", linkSchema);
