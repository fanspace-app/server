import { Request, Response, NextFunction } from "express";
import { handleMessage } from "../helpers";
import { Sessions, Mentors } from "../models";

interface payloadObjectTypes {
	mentorId: string;
	menteeId: string;
	sessionTimeDetails: Date;
	paymentId: string;
	amount: number;
	currency: string;
	meetLink: string;
}

async function registerSession(payloadObject: payloadObjectTypes) {
	const newSession = new Sessions({
		mentorId: payloadObject.mentorId,
		menteeId: payloadObject.menteeId,
		sesstionTimeDetails: payloadObject.sessionTimeDetails,
		paymentDetails: {
			paymentId: payloadObject.paymentId,
			amount: payloadObject.amount,
			currency: payloadObject.currency,
		},
		meetLink: payloadObject.meetLink,
	});

	try {
		const savedSession = await newSession.save();
		return handleMessage("RESOURCE_CREATED", savedSession);
	} catch (err) {
		return handleMessage("INTERNAL_SERVER_ERROR", {});
	}
}

// async function updateMentorsBookedSlots(
// 	sessionTimeDetails: Date,
// 	mentorId: string
// ) {
// 	try{
// 		const updatedMentorSlot = await Mentors.updateOne(
// 			{
// 				mentorCalendarDates
// 			}
// 		)
// 	}catch(err){

// 	}
// }

async function getSessionsofUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let user = res.locals.user;

	if (!user) {
		const errorObject = handleMessage("NOT_LOGGED_IN", { user: null });
		return res.status(errorObject.status).json(errorObject);
	}

	let userId = user._id;

	try {
		const sessions = await Sessions.find({
			$or: [{ mentorId: userId }, { menteeId: userId }],
		});

		if (sessions.length > 0) {
			const messageObject = handleMessage("REQUEST_SUCCESS", {
				sessions,
				user,
			});
			return res.status(messageObject.status).json(messageObject);
		} else if (sessions.length === 0) {
			const errorObject = handleMessage("NOT_FOUND", { user });
			return res.status(errorObject.status).json(errorObject);
		}
	} catch (err) {
		const errorObject = handleMessage("INTERNAL_SERVER_ERROR", { user });
		return res.status(errorObject.status).json(errorObject);
	}
}

export { registerSession, getSessionsofUser };
