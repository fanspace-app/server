import { Request, Response, NextFunction } from "express";
import { handleMessage, signJWT } from "../helpers";
import { Users, Mentees } from "../models";

interface messageHandlerObject {
	type: string;
	status: number;
	message: string;
	payload: any;
}

interface reqBody {
	fullName: string;
	googleUid: string;
	emailId: string;
	slug: string;
}

async function handleAuth(req: Request, res: Response, next: NextFunction) {
	let { fullName, googleUid, emailId, slug }: reqBody = req.body;

	if (!fullName || !googleUid || !emailId || !slug) {
		const errorObj: messageHandlerObject = handleMessage(
			"INVALID_REQUEST_SYNTAX",
			{}
		);
		return res.status(errorObj.status).json(errorObj);
	}

	fullName = fullName.toLowerCase();
	emailId = emailId.toLowerCase();

	try {
		const isUserExisting = await Users.findOne({ googleUid });
		if (isUserExisting) {
			const token: string = signJWT(isUserExisting);
			let payloadObject: object = {
				token: token,
				user: isUserExisting,
			};
			const messageObj: messageHandlerObject = handleMessage(
				"REQUEST_SUCCESS",
				payloadObject
			);
			return res.status(messageObj.status).json(messageObj);
		} else {
			//Create a mentee by default
			const newMentee = new Users({ fullName, googleUid, emailId });
			try {
				const savedMenteeInUsersTable = await newMentee.save();
				const addToMenteeTable = new Mentees({
					userId: savedMenteeInUsersTable._id,
				});
				const savedMentee = await addToMenteeTable.save();
				const token: string = signJWT(savedMenteeInUsersTable);
				let payloadObject: object = {
					token: token,
					user: savedMenteeInUsersTable,
				};
				const messageObj: messageHandlerObject = handleMessage(
					"RESOURCE_CREATED",
					payloadObject
				);
				return res.status(messageObj.status).json(messageObj);
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		}
	} catch (err) {
		return res.status(500).json({ error: err });
	}
}

export { handleAuth };
