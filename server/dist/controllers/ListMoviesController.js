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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
class ListMoviesController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield models_1.ListMovies.findAll();
                res.json(result);
            }
            catch (e) {
                return res.status(500).json(e);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const list = yield models_1.ListMovies.findOne({ where: { id },
                    include: [{ model: models_1.MovieListItem, as: 'MovieListItems', include: [{ model: models_1.Movie, as: 'Movie' }] }] });
                return res.json(list);
            }
            catch (e) {
                return res.status(500).json(e);
            }
        });
    }
    getOneByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const foundList = yield models_1.ListMovies.findOne({ where: { userId: id },
                    include: [{ model: models_1.MovieListItem, as: 'MovieListItems', include: [{ model: models_1.Movie, as: 'Movie' }] }] });
                return res.json(foundList);
            }
            catch (e) {
                return res.status(500).json(e);
            }
        });
    }
    createListMovieItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { movieId, listId } = req.body;
                console.log(movieId);
                console.log(listId);
                const listItemCheck = yield models_1.MovieListItem.findOne({ where: { movieId: movieId, ListMovieId: listId } });
                if (listItemCheck != null) {
                    res.json({ message: "already exist" });
                }
                else {
                    const result = yield models_1.MovieListItem.create({ movieId: movieId, ListMovieId: listId });
                    return res.json(result);
                }
            }
            catch (e) {
                console.error(e);
                return res.status(500).json(e);
            }
        });
    }
    removeListMovieItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { movieId, listId } = req.body;
                console.log(movieId);
                console.log(listId);
                const deleteItem = yield models_1.MovieListItem.destroy({ where: { movieId: movieId, ListMovieId: listId } });
                return res.status(200).json(deleteItem);
            }
            catch (e) {
                console.error(e);
                return res.status(500).json(e);
            }
        });
    }
    checkIfExistInList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { listId, movieId } = req.body;
                const findOne = yield models_1.MovieListItem.findOne({ where: { ListMovieId: listId, movieId: movieId }, });
                if (findOne != null) {
                    return res.json({ message: "Already exist" });
                }
                else {
                    return res.json({ message: "ok" });
                }
            }
            catch (e) {
                return res.status(500).json(e);
            }
        });
    }
}
exports.default = new ListMoviesController();
