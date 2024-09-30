"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./userRoute"));
const typeRoute_1 = __importDefault(require("./typeRoute"));
const genreRoute_1 = __importDefault(require("./genreRoute"));
const movieRoute_1 = __importDefault(require("./movieRoute"));
const ListMovieRoute_1 = __importDefault(require("./ListMovieRoute"));
const router = (0, express_1.default)();
router.use('/user', userRoute_1.default);
router.use('/type', typeRoute_1.default);
router.use('/genre', genreRoute_1.default);
router.use('/movie', movieRoute_1.default);
router.use('/list-movie', ListMovieRoute_1.default);
exports.default = router;
