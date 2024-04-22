import type { Event, Layout } from '$lib/types';

export const load = (async (event: Event) => {
	const pathname = event.url?.pathname;
	return {
		pathname,
	};
}) satisfies Layout;
