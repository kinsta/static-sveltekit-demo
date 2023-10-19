<script>
	export let data;
	const post = data.post;
</script>

<div>
	<div class="blog_content">
		<h3>{post.title}</h3>
		<p>{post.body}</p>
	</div>
</div>

<style>
	.blog_content h3 {
		font-size: 40px;
		margin-bottom: 20px;
		text-align: center;
	}
</style>
