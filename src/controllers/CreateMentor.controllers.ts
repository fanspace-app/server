import { Request, Response, NextFunction } from "express";
import { handleMessage, signJWT } from "../helpers";
import { Users, Mentors } from "../models";

async function createMentor(req: Request, res: Response, next: NextFunction) {
	
}

export { createMentor };
