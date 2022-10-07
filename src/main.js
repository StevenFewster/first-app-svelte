import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Steven',
		age: 46
	}
});

export default app;