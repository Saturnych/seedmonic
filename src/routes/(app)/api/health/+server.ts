import { getWordBlocks, returnJson } from '$lib/utils';
import consts from '$lib/vars/consts';

export const GET = async () => {
	const data = {
		status: 200,
		success: true,
		message: 'ok',
		version: consts.version,
	};
	return returnJson({
		timestamp: Date.now(),
		uptime: process?.uptime(),
	});
};
