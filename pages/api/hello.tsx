import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ status: "Not implemented.... yet?" });
};

export default handler;
