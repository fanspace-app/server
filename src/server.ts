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

//Port listener
const PORT: number = parseInt(<string>process.env.PORT);
app.listen(PORT, () => console.log("App is running on port " + PORT));
