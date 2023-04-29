// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	ipAddr: string;
};

const getIpv4 = (xForwardForHeader: string) => {
	const xForwardForHeaderSegments = xForwardForHeader.split(':');
	const ipAddr =
		xForwardForHeaderSegments[xForwardForHeaderSegments.length - 1];
	return ipAddr;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Data[] | string>
) {
	const headerVal = req.headers['x-forwarded-for'];
	if (headerVal) {
		if (Array.isArray(headerVal)) {
			const response: Data[] = [];
			headerVal.forEach((header) => {
				const ipAddr = getIpv4(header);
				response.push({ ipAddr });
			});
			res.status(200).json(response);
		} else {
			const ipAddr = getIpv4(headerVal);
			res.status(200).json({ ipAddr });
		}
	} else res.status(500).send('Something Went Wrong');
}
