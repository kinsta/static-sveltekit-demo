<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/global.css';

	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<div class="layout">
	<Navbar />
	<slot />
	<Footer />
</div>
