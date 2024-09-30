"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ListMoviesController_1 = __importDefault(require("../controllers/ListMoviesController"));
const router = (0, express_1.default)();
router.post('/', ListMoviesController_1.default.createListMovieItem);
router.get('/', ListMoviesController_1.default.getAll);
router.get('/:id', ListMoviesController_1.default.getOne);
router.get('/user/:id', ListMoviesController_1.default.getOneByUser);
router.post('/check/', ListMoviesController_1.default.checkIfExistInList);
router.post('/delete/', ListMoviesController_1.default.removeListMovieItem);
exports.default = router;
