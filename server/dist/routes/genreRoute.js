"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genreController_1 = __importDefault(require("../controllers/genreController"));
const router = (0, express_1.default)();
router.post('/', genreController_1.default.create);
router.get('/', genreController_1.default.getAll);
router.get('/:id', genreController_1.default.getOne);
exports.default = router;
