<div class="about_cont">
	<h2>About</h2>
	<div class="about_info">
		<div class="about_text">
			<p>
				Kinsta allows you to{' '}
				<a href="https://kinsta.com/docs/static-site-hosting/">
					host up to 100 static websites
				</a>{' '}
				for free. This can be done by pushing your code to your preferred Git provider
				(Bitbucket, GitHub, or GitLab) and then deploying it to Kinsta.
			</p>
			<p>
				As an alternative to Static Site Hosting, you can opt for deploying your
				static site with Kinsta’s{' '}
				<a href="https://kinsta.com/application-hosting/">
					Application Hosting
				</a>
				, which provides greater hosting flexibility, a wider range of benefits,
				and access to more robust features. For example, scalability, customized
				deployment using a Dockerfile, and comprehensive analytics encompassing real-time
				and historical data.
			</p>
		</div>
		<img src="/kinsta-img.jpg" alt="" class="about_img" />
	</div>
</div>

<style>
	.about_cont h2 {
		font-size: 40px;
		margin-bottom: 20px;
	}

	.about_info {
		display: flex;
		width: 100%;
		justify-content: space-between;
		gap: 20px;
	}

	@media (max-width: 700px) {
		.about_info {
			flex-direction: column;
		}
	}

	.about_text {
		flex-basis: 50%;
	}

	.about_text p {
		margin-bottom: 20px;
		font-size: 18px;
	}

	.about_img {
		flex-basis: 50%;
		width: 200px;
		border-radius: 10px;
	}

	@media (max-width: 700px) {
		.about_info {
			flex-direction: column;
		}

		.about_img {
			width: 100%;
		}
	}
</style>
