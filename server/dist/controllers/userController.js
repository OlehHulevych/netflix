"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models/models");
class UserController {
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, password, role } = req.body;
                if (!email || !password) {
                    return res.status(500).json("the bad request");
                }
                const candidate = yield models_1.User.findOne({ where: { email } });
                if (candidate) {
                    return res.status(500).json("the bad request");
                }
                const cryptedPassword = yield bcrypt_1.default.hash(password, 5);
                const user = yield models_1.User.create({ email, name, role, password: cryptedPassword });
                const movieList = yield models_1.ListMovies.create({ userId: user.id });
                const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET_KEY || '', { expiresIn: '168h' });
                res.json({ token: token });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, role } = req.body;
                const user = yield models_1.User.findOne({ where: { email } });
                if (!user) {
                    return res.json({ message: "User not found" });
                }
                let comparePassword = bcrypt_1.default.compareSync(password, user.password);
                if (!comparePassword) {
                    return res.json({ message: "Wrong Password" });
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name, password: user.password, role: role }, process.env.JWT_SECRET_KEY || '', { expiresIn: '168h' });
                return res.json({ token: token });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    check(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = jsonwebtoken_1.default.sign({ id: req.user.id, name: req.user.name, password: req.user.password }, process.env.JWT_SECRET_KEY || '', { expiresIn: '168h' });
                return res.json({ token });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const id = req.params.id;
                const user = yield models_1.User.findOne({ where: { id } });
                return res.json({ user: user });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    checkOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                console.log(email);
                const findUser = yield models_1.User.findOne({ where: { email } });
                if (findUser) {
                    return res.json({ error: "User with this email is already exist" });
                }
                else if (!findUser) {
                    return res.json({ message: "ok" });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    checkName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const findUser = yield models_1.User.findOne({ where: { name } });
                if (findUser) {
                    return res.json({ error: "This name is used" });
                }
                else {
                    return res.json({ message: "ok" });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = new UserController;
