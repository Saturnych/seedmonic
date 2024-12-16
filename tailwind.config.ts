import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts,md}'
	],
	theme: {
		extend: {
      fontFamily: {
        mono: ['SF Mono', 'ui-monospace', 'monospace']
      }
    }
	},
  plugins: []
} satisfies Config;
