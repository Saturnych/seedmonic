import type { Event, Layout } from '$lib/types';
import { getRandomInt, getWordBlocks } from '$lib/utils';
import { DEBUG } from '$lib/vars/client';

export const load = (async (event: Event) => {
	const pathname = event.url?.pathname;

	const num = getRandomInt(1, 2048);
	if (DEBUG) console.log('getRandomInt:', num);

	const blocks = getWordBlocks({ num });

	return {
		pathname,
	};
}) satisfies Layout;
