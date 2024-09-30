"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const models_1 = require("../models/models");
const uuid = __importStar(require("uuid"));
const path_1 = __importDefault(require("path"));
class MovieController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, year, duration, description, typeId, genreId, trailer, banner_trailer } = req.body;
                console.log(req.body);
                const { name_image, banner_image } = req.files;
                let name_image_filename = uuid.v4() + ".jpg";
                let banner_image_filename = uuid.v4() + ".jpg";
                name_image.mv(path_1.default.resolve(__dirname, '..', '..', 'static', 'name_images', name_image_filename));
                banner_image.mv(path_1.default.resolve(__dirname, '..', '..', 'static', 'banner_images', banner_image_filename));
                console.log(banner_image_filename);
                const newMovie = yield models_1.Movie.create({ name: name, year: year, description: description, duration: duration, name_img: name_image_filename, banner_img: banner_image_filename, typeId: typeId, genreId: genreId, trailer: trailer, banner_trailer: banner_trailer });
                return res.json(newMovie);
            }
            catch (e) {
                return res.status(500).json(e);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const types = yield models_1.Movie.findAll();
                return res.json(types);
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
                const movie = yield models_1.Movie.findOne({
                    where: { id },
                    include: [{ model: models_1.Genre, as: 'genre', },
                        { model: models_1.Type, as: 'type' }],
                });
                return res.json(movie);
            }
            catch (e) {
                return res.status(500).json(e);
            }
        });
    }
}
exports.default = new MovieController();
