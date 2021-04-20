import { Request, Response, NextFunction } from "express";
import { handleMessage } from "../helpers";
import { Mentors } from "../models";

async function getMentorProfile(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let user = res.locals.user;

	const mentorSlug = req.body.mentorSlug;
	user = user === null ? null : user;
	try {
		const requiredMentor = await Mentors.findOne({ slug: mentorSlug });
		if (requiredMentor) {
			const payloadObject = {
				mentor: requiredMentor,
				user,
			};

			const message = handleMessage("REQUEST_SUCCESS", payloadObject);
			res.status(message.status).json(message);
		} else {
			const errorObject = handleMessage("NOT_FOUND", { user });
			return res.status(errorObject.status).json(errorObject);
		}
	} catch (err) {
		const errorObject = handleMessage("INTERNAL_SERVER_ERROR", { user });
		return res.status(errorObject.status).json(errorObject);
	}
}

export { getMentorProfile };
