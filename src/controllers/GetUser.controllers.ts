import { Request, Response, NextFunction } from "express";
import { handleMessage } from "../helpers";

async function getUser(req: Request, res: Response, next: NextFunction) {
	let user = res.locals.user;
	user = user === null ? { user: null } : { user: user };
	const message = handleMessage("REQUEST_SUCCESS", user);
	res.status(message.status).json(message);
}

export { getUser };
