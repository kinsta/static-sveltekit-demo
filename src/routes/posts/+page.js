export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	);
	const posts = await response.json();
	return {
		posts,
	};
};
