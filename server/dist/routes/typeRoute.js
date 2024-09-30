"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeController_1 = __importDefault(require("../controllers/typeController"));
const router = (0, express_1.default)();
router.post('/', typeController_1.default.create);
router.get('/', typeController_1.default.getAll);
exports.default = router;
