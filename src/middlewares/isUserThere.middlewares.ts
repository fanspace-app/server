import { Request, Response, NextFunction } from "express";
import { Users } from "../models";
import jwt from "jsonwebtoken";
import { handleMessage } from "../helpers";
const JWT_SECRET: string = <string>process.env.JWT_SECRET;

async function verifyToken(req: Request, res: Response, next: NextFunction) {
	res.locals.user = null;

	const authorization: any = req.headers.authorization;

	if (authorization === null || authorization === undefined || !authorization) {
		next();
	}

	const token = authorization.replace("Bearer ", "");
	if (!token) {
		next();
	}

	jwt.verify(token, JWT_SECRET, async (err: any, payload: any) => {
		if (err) {
			next();
		} else {
			const emailId = payload.userData.emailId;
			const fetchedUser = await Users.findOne({ emailId });
			try {
				res.locals.user = fetchedUser;
				next();
			} catch (err) {
				const errorObject = handleMessage("INTERNAL_SERVER_ERROR", {});
				return res.status(errorObject.status).json(errorObject);
			}
		}
	});
}

export default verifyToken;
