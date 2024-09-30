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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const model = require('./models/models');
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'https://netflix-client-gamma.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../static')));
app.use((0, express_fileupload_1.default)({}));
app.use('/api', index_1.default);
app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.sequelize.authenticate();
        yield db_1.sequelize.sync();
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    catch (e) {
        console.log(e);
    }
});
start();
