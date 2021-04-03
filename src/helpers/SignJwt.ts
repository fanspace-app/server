import jwt from "jsonwebtoken";
const JWT_SECRET: string = <string>process.env.JWT_SECRET;

const signJWT = (userData: object): string => {
	const token = jwt.sign({ userData }, JWT_SECRET);
	return token;
};

export default signJWT;
