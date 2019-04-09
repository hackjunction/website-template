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


# Clone the repository and set it up

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

Also, the example repository comes packaged with a few images so we've removed the `uploads` folder from `.gitignore`, but you'll want to add that back so your uploads don't get checked into your git repository. 

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

# Change the project name

Our project is called `awesome-site` so let's edit the project name in a few places to reflect that. This is not strictly necessary but would make a lot of sense for you to do as well. 

1) In `backend/config/environments/development/database.json` edit the `database` field from `react-strapi-starter` to your project name (`awesome-site`)

2) In package.json, change the project name to `awesome-site`. Do the same for `backend/package.json`

# Spin up the project

...to be continued
