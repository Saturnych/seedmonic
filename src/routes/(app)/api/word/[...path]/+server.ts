import type { Event, Layout } from '$lib/types';
import type { Response } from '@sveltejs/kit';
import { getWordBlocks, returnJson } from '$lib/utils';
import { DEBUG } from '$lib/vars/client';

export const GET = async (event: Event): Response => {
	try {
		const { pathname, searchParams } = event.url;
		const lang = searchParams.get('lang');
		const num = searchParams.get('num');
		let word = searchParams.get('word');
		const paths: string[] = pathname.split('/').filter(s=>s.length>0).reverse();
		console.log(paths);
		if (paths?.length>2 && !word) word = paths[0];
		if (!word) throw error(401, 'Word needed');
		return returnJson(getWordBlocks({ word }))
	} catch (err) {
		console.error('api/word error:', err);
		return returnJson(err, err.status ?? 400, err.body?.message ?? 'Error', false);
	}
};
