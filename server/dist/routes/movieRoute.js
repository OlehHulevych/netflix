"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = __importDefault(require("../controllers/movieController"));
const router = (0, express_1.default)();
router.post('/', movieController_1.default.create);
router.get('/', movieController_1.default.getAll);
router.get('/:id', movieController_1.default.getOne);
router.get('/hello', (req, res) => {
    res.json("Hello World");
});
exports.default = router;
