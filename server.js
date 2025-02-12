"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3030;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use('/api', routes_1.default);
// Middleware de erro
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!', details: err.message });
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
