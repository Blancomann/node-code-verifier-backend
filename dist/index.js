"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration .env file
dotenv_1.default.config();
// Create Express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define first app's route
app.get('/', (req, res) => {
    res.send('Que pasó cumpa?!');
});
app.get('/hello', (req, res) => {
    res.send('NEW ROUTE: /Heloooooow');
});
// Execute app and listen requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: runnig at LOCALHOST:${port}`);
});
//# sourceMappingURL=index.js.map