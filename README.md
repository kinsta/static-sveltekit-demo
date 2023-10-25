![static-sveltekit](https://github.com/olawanlejoel/static-sveltekit-demo/assets/57611810/826b7bba-0948-450c-804c-de2e25508ba9)

# How To Build a Static Site With SvelteKit

This article explains how to build a static site with Sveltekit and deploy it to Kinsta.

Read the [full article](https://kinsta.com/blog/static-sveltekit/).

## Installation
1. Clone or fork the repository.

## Kinsta Static Site Hosting Setup
### Dependency Management

Kinsta automatically installs dependencies defined in your `package.json` file during the deployment process.

### Setting the Build Command, Node version, and Publish directory

After connecting the repository, **Static Site Hosting** will automatically populate all the fields with the correct values.
| Configuration option |Value     |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Node version      | 18.16.0         |
| Publish directory | `build`         |


### Deployment Lifecycle

Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit), the build command is run, followed by the deployment of the Publish Directory content.

## What is Kinsta
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. Focus on coding and building, and we’ll take care of deployment and provide fast, scalable hosting. + 24/7 expert-only support.

- [Start your free trial](https://kinsta.com/signup/?product_type=app-db)
- [Application Hosting](https://kinsta.com/application-hosting)
- [Database Hosting](https://kinsta.com/database-hosting)
