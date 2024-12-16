import type { Event, Layout } from '$lib/types';
import { getRandomInt, getWordBlocks } from '$lib/utils';
import { DEBUG } from '$lib/vars/client';

export const load = (async (event: Event) => {
	const pathname = event.url?.pathname;
	return {
		pathname,
	};
}) satisfies Layout;
