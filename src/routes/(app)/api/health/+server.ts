import { getWordBlocks, returnJson } from '$lib/utils';
import consts from '$lib/vars/consts';

export const GET = async () => {
	return returnJson({
		timestamp: Date.now(),
		uptime: process?.uptime(),
	});
};
