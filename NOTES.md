## Setup 

- run `npm run setup` to install dependencies

## backend

# - change database name in backend/config/environments/development/database.json from react-strapi-starter to your-own-name
# - remove #comments from .gitignore relating to /public/uploads 

## Import the content to your local database
mongoimport --db react-strapi-starter --collection test --file test.json

## Setting up the admin

- run `yarn dev` in the root directory to start both the backend and the frontend development server
- Open `localhost:1337/admin` and create your first user for the admin panel
- Go to `Roles & Permission`, choose `Public` and under permissions check `find`, `findone` and `count` under all content types - then click Save in the top right corner.

- Put cloudinary credentials in admin panel
- Import sample data to database for reference

## app.json

- Change `name` to the name of your app, as declared in `package.json`
- Change `repository` to the url of your repository, e.g. `https://github.com/.../your-project.git`

## frontend/.env.example

- Copy the file, and rename it to `.env` (will not be checked in to version control)
- Fill in the required environment variables
- CLOUDINARY_CLOUD_NAME

## Redux

- Change persist key to your app name