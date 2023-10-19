<script>
	export let data;
	const posts = data.posts;
</script>

<div class="blog_cont">
	<h2>Posts</h2>
	<div class="blog_grid">
		{#each posts as post}
			<a href={`/posts/${post.id}`} class="blog_card">
				<h3>{post.title}</h3>
				<p>
					{post.body}
				</p>
			</a>
		{/each}
	</div>
</div>

<style>
	.blog_cont h2 {
		font-size: 40px;
		margin-bottom: 20px;
	}

	.blog_grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}

	@media (max-width: 700px) {
		.blog_grid {
			grid-template-columns: 1fr;
		}
	}

	.blog_card {
		background-color: #bfbfbf;
		padding: 20px;
		border-radius: 5px;
		color: #000;
		transition: all 0.5s ease-in-out;
	}

	.blog_card:hover {
		background-color: #5333ed;
		color: #fff;
	}

	.blog_card h3 {
		margin-bottom: 15px;
	}

	.blog_card p {
		margin-bottom: 15px;
	}
</style>
