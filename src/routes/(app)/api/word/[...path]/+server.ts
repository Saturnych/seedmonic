import type { Event, Layout } from '$lib/types';
import { error, type Response } from '@sveltejs/kit';
import { getRandomInt, getWordBlocks, returnJson } from '$lib/utils';

import { DEBUG } from '$lib/vars/client';

export const GET = async (event: Event): Response => {
	try {
		const pathname: string = event.url?.pathname;
		const paths: string[] = pathname.split('/').filter(s=>s.length>0).reverse();
		if (paths?.length<3) throw error(401, 'Word needed');
		return returnJson(getWordBlocks({ word: paths[0] }))
	} catch (err) {
		console.error('api/word error:', err);
		return returnJson(err, err.status ?? 400, err.body?.message ?? 'Error', false);
	}
};
