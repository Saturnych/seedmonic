import type { RequestHandler, Response } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { wordlists } from '$lib/wordlists';
import consts from '$lib/vars/consts';

export const normalize = (string: string): string => {
	return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const isEnglish = (word: string): boolean => {
	return /^[a-z0-9]+$/i.test(word);
};

export const returnJson = (
	data: Record<string, any>,
	status: number = 200,
	message: string = 'ok',
  success: boolean = true,
  version: consts.version,
): Response => json({ status, message, success, version, data: status>399 ? null : data });

export const isNumeric = (n: string): boolean => !isNaN(parseFloat(n)) && isFinite(Number(n));

export const isDate = (d: any): boolean => d instanceof Date && !Number.isNaN(d.getTime());

export const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const splitLines = (str: string, eol = /\r?\n/): string[] => str.split(eol).map(s=>s.trim()).filter(s=>s.length>0);

export const getWordBlocks = (data: { num?: number; word?: string; lang?: string }): number[] => {
  let { num, word, lang = 'en' } = data;
	word = word.split(' ').join('');
	console.log('word:', word);
	const words = wordlists[lang];
	console.log('lang:', lang, 'words.length:', words.length);
  if (!num && word && words?.includes(word)) num = words.indexOf(word)+1;
  if (num && !word) word = words[num-1];
  if (!num || !word) throw Error('wrong data!');
  console.log('num:', num, 'word:', word);

  const base: number = 2;
  const bits: string = num.toString(base);
  const arr: string[] = bits.split('').reverse();
  const blocks: number[] = [];
	const pows: number[] = [];
  for (let i=0;i<arr.length;i++) {
    if (Number(arr[i])>0) {
			pows.push(i);
			blocks.push(Math.pow(base, i));
		}
  }

  const sum: number = blocks.reduce((a,b)=>(a+b),0);
	const verified: boolean = sum===num;
  console.log('10-bit number:', num, '2-bit string:', bits);
  console.log('arr:', arr);
  console.log('pows:', pows, 'blocks:', blocks);
  console.log('checksum', sum, 'verified:', verified);

  return (verified) ? { num, bits, pows, blocks } : null;
};

/**
 * JSON.parse() catching errors
 *
 * @param {String} data
 * @param {Object} json
 *
 */
export const parseJson = (data: string, obj?: object | undefined) => {
	try {
		obj = JSON.parse(data);
	} catch (e) {
		//console.error(e);
	}
	return obj;
};
