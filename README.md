# React + Strapi website template

This is a website template for building a beautiful website that is 100% editable by non-technical users via a visual admin panel :)

This template contains a demo of how to build an editable website while keeping a good level of control of the design and layout of the website. Non-technical users can use the admin panel to:

- Add new pages to the website, with specific fields defined by the developer (title, header image, body text, etc...)
- Control content on static pages (such as the home page) by editing text and image fields
- Add list-based content such as FAQ's, upcoming events or team members, which are shown in pre-defined places in the app

With this template, developers won't need to hardcode even the smallest pieces of text on the website if they don't want to. In general, it's a good balance between keeping the basic structure of the site in control of the developer, while giving content creators the necessary freedom and tools to edit the website content without having to ask the developer to make changes in the code. 

See below for how to set up the template for development, import some default content into the database, edit the site and eventually deploy it!

# Prerequisites

**Be warned:** this guide was written by someone who uses Macos for development, and while most if not all steps are likely the same even if you are working on Linux or Windows - [install with Homebrew] if using a Mac, the setup instructions below are only guaranteed to work on Macos :)

Okay, first of all you'll need to have the following installed on your system:

- Node.js 10.7.0 or higher - [install with Homebrew](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew) if using a Mac, or [download the installer for your system](https://nodejs.org/en/download/current/) if not

- MongoDB - [install with Homebrew](https://treehouse.github.io/installation-guides/mac/mongo-mac.html) if using a Mac, or follow the [installation instructions here](https://docs.mongodb.com/manual/installation/)


# Setup

### Clone the repository and set it up

Next, clone the repository. You'll probably want to rename it from `website-template` to something else - we'll use `awesome-site` in this readme.

First, clone the repository:

```
git clone git@github.com:hackjunction/website-template.git awesome-site
```

Next, let's clear the link to this git repository and create your own git project:

```
cd awesome-site
rm -rf .git
git init
```

Also, the example repository comes packaged with a few uploaded images (for demo purposes) so we've removed the `uploads` folder from `.gitignore`, but you'll want to add that back so your uploads don't get checked into your git repository. 

Edit `backend/.gitignore` and remove the hashtags in front of the two `public/uploads/...` lines

```
############################
# Misc.
############################

*#
ssl
.idea
nbproject
# public/uploads/*
# !public/uploads/.gitkeep

```

### Change the project name

Our project is called `awesome-site` so let's edit the project name in a few places to reflect that. This is not strictly necessary but would make a lot of sense for you to do as well. 

1) In `backend/config/environments/development/database.json` edit the `database` field from `react-strapi-starter` to your project name (`awesome-site`)

2) In package.json, change the project name to `awesome-site`. Do the same for `backend/package.json`

3) In `frontend/src/redux/configureStore.js` edit `persistConfig` and change the `key` field from `react-strapi-starter` to your app name (`awesome-site`)


### Spin up the project

First, let's install the dependencies for both the backend and frontend.

In the project root, run: 

```
npm run setup
```

In addition to the project dependencies this will install `yarn` globally on your machine. In short, Yarn is a better alternative for npm and should be used when installing new dependencies to the frontend (the React app in `frontend`). 

So, instead of:

- `npm install` use `yarn install`
- `npm install --save some-dependency` use `yarn add some-dependency`

Anyway, now that you've installed the dependencies, let's start the app in development mode by running (in the root of the project):

```
yarn dev
```

This will spin up the frontend at `localhost:3000` and the backend at `localhost:1337`. Both will automatically reload if any code changes are made. You'll notice that the frontend of the site isn't really showing any content, but we'll fix that in the next steps.

### Log in to the admin panel

Open `localhost:1337/admin` in a browser, and it will prompt you to create your first user. Once you've created your first admin user, let's make a few changes in the admin panel:

- Go to `Roles & Permission`, choose `Public` and under permissions check `find`, `findone` and `count` under all content types - then click Save in the top right corner.

1) Go to Roles & Permission in the sidebar
2) Choose Public
3) Under Permissions, check `find`, `findone` and `count` under all of the content types
4) Click Save in the top right corner

### Import sample content 

Okay, the final step: let's import some sample content so you can see the site in action. You'll find some database dumps in `database-dumps`,let's import those into the database with `mongoimport`. In the following `mongoimport` commands you should note that I am using `awesome-site` as the database name, but change that to whatever you named your database to.

```
cd database-dumps
mongoimport --db awesome-site --collection mediafield --file mediafield.json
mongoimport --db awesome-site --collection textfield --file textfield.json
mongoimport --db awesome-site --collection page --file page.json
mongoimport --db awesome-site --collection upload_file --file upload_file.json
mongoimport --db awesome-site --collection technology --file technology.json
```

If the import was successful, you should now see some content on the site running at `localhost:3000` (make sure to refresh the page). You can now go ahead and delete the `database-dumps` folder from the project. 

### Play around with it 

Editing content in the admin panel is pretty simple, and the example content contains some instructions on how to edit the site. Play around with it a bit and see how it works! :) 

### Setting up Cloudinary

By default any images uploaded to the admin panel will go into `/backend/public/uploads` but you might want to change that to use something like Cloudinary. Cloudinary is an online image hosting service where you can serve any images on your site via their CDN in various formats and sizes depending on where you want to show them. This will dramatically speed up your site and I would recommend setting it up.

- Create a [Cloudinary account](https://cloudinary.com/users/register/free) (they have a very generous free tier which will be more than enough for one site)
- Open the Admin panel at `localhost:1337`
- Click Plugins under General in the sidebar
- Click the cog icon next to Files Upload
- Under the development tab, choose Cloudinary from the Providers dropdown, fill in your Cloudinary keys, and Save

Now any images uploaded via the admin panel will go to your Cloudinary account, from where you can serve them in various sizes and formats just by making small edits to the url of the image. The project has [`cloudinary-react`](https://github.com/cloudinary/cloudinary-react) already set up for use, but you should look further into it yourself to learn how to unleash the full power of Cloudinary.

