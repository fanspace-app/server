"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Middlewares
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(express_1.default.json());
app.enable("trust proxy"); //To log IP Address of the requests
app.use(morgan_1.default(":date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms"));
//Mongodb Connection
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URI = process.env.DB_URI;
mongoose_1.default
    .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("Connected to the database!");
})
    .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});
//Port listener
const PORT = parseInt(process.env.PORT);
app.listen(PORT, () => console.log("App is running on port " + PORT));
