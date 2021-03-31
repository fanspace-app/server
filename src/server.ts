require("dotenv").config();
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

//Middlewares
const app: Application = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.enable("trust proxy"); //To log IP Address of the requests
app.use(
	morgan(
		":date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms"
	)
);

//Mongodb Connection
import mongoose from "mongoose";
const DB_URI: string = <string>process.env.DB_URI;
mongoose
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
const PORT: number = parseInt(<string>process.env.PORT);
app.listen(PORT, () => console.log("App is running on port " + PORT));
