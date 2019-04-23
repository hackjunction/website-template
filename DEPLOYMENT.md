# Deployment
This guide will cover how to deploy the site on Digitalocean. Despite the frontend and backend of the project living in the same repository, we will be deploying them separately. This is partially due to limitations with Strapi, but also allows a bit more flexibility in how and where you deploy. This guide will be updated if in the future we find a solid way to deploy the whole project in a single deployment. 

# Deploying a React app on Digitalocean with Dokku

A quick guide for deploying the frontend of this site on Digitalocean, using a handly tool called Dokku. Dokku is a Docker-based tool that essentially allows you to host a Heroku instance on your own servers. It requires a bit of work upfront as compared to Heroku, but in the end is much more value for money while maintaining the ease-of-use that comes with a PaaS like Heroku. Note: **This section is only for the frontend, see below for instructions on deploying the backend**

### Setting up your Droplet

1) Create a Digitalocean account (verify email, add credit card, etc.)
2) Create a new Project on your account
2) In your project, create a new Droplet with the pre-configured Dokku image (Create new Droplet > Marketplace > Dokku > Configure Dokku Droplet). As of writing this, the exact name is Dokku 0.14.6 on 18.04, but just choose the latest version.

You will be shown a configuration screen with various options, where you should choose:

- **Standard** under Choose a plan
- Choose the $10/mo plan for the Droplet ($5/mo should do as well, if you are on a tight budget)
- Choose a datacenter region nearest to you (the default is usually fine)
- Under Select additional options, just tick them all except for User data (they're free, so why not)
- If you don't yet have an SSH key added on your Digitalocean account, click New SSH Key and add one. Instructions for creating an SSH key [here](https://help.github.com/en/enterprise/2.14/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Once you've added your key to Digitalocean, remember to tick the box next to your SSH key. 

Finally, set the hostname to something to something you'll recognise (by default it will be something like dokku-s-1vcpu-2gb-fra1-01), and select the project you created earlier, then click Create.

Now you'll need to wait a few minutes for the server to spin up, but once that's done we can move on to configuring the server.

### Configuring the server

Under your project, you should now see your droplet and be able to copy the IP address of the droplet. Copy and paste that into a browser window, and you should be presented with a Dokku setup screen. If the page errors out (502 Bad Gateway etc.), the server has not yet completed it's internal setup processes and you should just wait a minute or two. 

On the Dokku setup page, assuming the page is showing you the SSH key you added in the previous step, and the hostname seems correct, all you need to do for now is click **Finish Setup**.

Now you'll want to SSH into your server, so open up a command line and type:

```
ssh root@<your-droplet-ip>
```

The server will have the dokku command line tool pre-installed, so you can create a new app with: 

```
dokku apps:create app-name
```

Again, you should make the app name something recognisable to the project you're working on.

Next, if you're using a `.env` file for managing environment variables, you'll want to set
those up on the server. If you're using this template, you'll want to make sure all variables defined in `frontend/.env` are also defined on the server. You can add environment variables with the following command:

```
dokku config:set app-name SOME_ENV_VARIABLE=value-of-the-variable
```

### Configuring your app for production

You'll want to have a `Procfile` in the root of your project that tells Dokku how to run your app. This project already has one set up, but if you don't have one in your project,just create a new `Procfile` with the contents: 

```
web: npm start
``` 

In addition, you should have an `app.json` file in the root of your project, so that dokku knows how to build your app. Since we are essentially deploying a Node.js app that serves our static React site, you should make one that tells Dokku to use the Node.js buildpack:

```
/* app.json */
{
	"name": "<name in package.json>",
	"repository": "<url of your repository>",
	"buildpacks": [
		{
			"url": "https://github.com/heroku/heroku-buildpack-nodejs"
		}
	],
	"env": {
		"NPM_CONFIG_PRODUCTION": true
	}
}
```

You need to also make sure that the React app gets built whenever the app is deployed, so go ahead and add a `heroku-postbuild` script to your **root-level** package.json which does that:

```
/* package.json */
"scripts": {
	
	...other scripts here...

	"heroku-postbuild": "cd frontend && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
}
```

Alright, that's it - we are now ready to deploy the app to our Droplet!

### Set up git remotes for deployment

To deploy updates to the app, you'll push your code to a git remote exposed by Dokku. Make sure you are now in your project directory on your local machine, and add the remote with the following command:

```
git remote add dokku dokku@<ip-of-your-droplet>:<app-name>
```

Make sure to substitute your Droplet IP and name of the app you created on your server in the previous step in the above command before running it.

### Your first deployment

If all is working, you should now be able to deploy your app by running 

```
git push dokku master
```

You'll see the build progress in your terminal window. Wait a few minutes for it to finish, and once it's done it will print something like this:

```
...
-----> Setting config vars
       DOKKU_APP_RESTORE:  1
=====> Renaming container (52447e06b16c) laughing_chaum to test-app.web.1
=====> Application deployed:
       http://dokku-s-1vcpu-2gb-fra1-01:16178
```

Now, if you visit the IP of your droplet in a browser, you should see that your site is indeed live. Congrats!

### Setting up domains

Let's make it so that users can access your site via an actual domain instead of just the IP,and make sure it works over HTTPS as well. 

To make your app accessible under an actual domain, first tell Dokku which domains you want to use with the app. SSH into the droplet, and run (with your preferred domain):

```
dokku domains:add app-name awesomeapp.hackjunction.com
```

Next, you'll need to set up an A record in the DNS settings for your domain. In the previous example, the correct A record would be:

- Type: A Record
- Host: awesomeapp
- Value: <IP of your droplet>
- TTL: Automatic

If you don't own the domain (for example, you want to use a subdomain of hackjunction.com), contact the owner of the domain and ask them to add the above DNS record.

Once you've done those two things (added the domain to Dokku, and created the DNS record), it'll take up to a few hours for the changes to take effect. If everything is working correctly, you should see your site when visiting the domain you set up for it. 

### Configuring SSL

It's 2019, and you **need** to have SSL enabled for your site or otherwise Google and other search engines will flag it as dangerous. It's also just a very good idea in general. Luckily it takes literally a minute or two to set up using `dokku-letsencrypt`. There's no point for me to rewrite their excellent guide, so please see here for instructions: https://github.com/dokku/dokku-letsencrypt

If you're too lazy to check it out, ssh into your droplet and run these (make sure to substitute your app name and email in the second and third steps):

```
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
dokku config:set --no-restart myapp DOKKU_LETSENCRYPT_EMAIL=your@email.tld
dokku letsencrypt myapp
dokku letsencrypt:cron-job --add
```

Now, visit the domain of your app and you should see that it automatically redirects all traffic to the https version of your site. In addition, it will automatically renew your SSL certificate for you whenever needed.




