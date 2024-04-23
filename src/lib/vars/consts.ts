import { description, version, author, homepage, repository } from '../../../package.json';

export default {
	description,
	version,
	author,
	homepage,
	repo: repository.url.replace('.git',''),
	title: 'seedmonic.ru',
	language: 'en-en',
	locale: 'en-EN',
	theme: 'system', // system, dark or light
	email: 'm@seedmonic.ru',
	ymId: 97110177,
};
