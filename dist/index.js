"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./config/config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 8888);
const server = (0, config_1.default)(app);
server.listen(process.env.PORT || 8888, () => console.log(`Servidor rodando na porta: ${process.env.PORT}`));