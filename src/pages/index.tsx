import { useEffect, useState } from 'react';

export default function Home() {
	const [ipAddress, setIpAddress] = useState<string>('');

	useEffect(() => {
		fetch('/api/ip')
			.then((res) => res.json())
			.then((data) => {
				if (Array.isArray(data)) {
					data = data[0];
				}
				setIpAddress(data.ipAddr);
			});
	}, []);

	return ipAddress;
}
