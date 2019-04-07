## Setup 

- run `npm run setup` to install dependencies

## Running the app 

- run `yarn dev` in the root directory to start both the backend and the frontend development server
- Open `localhost:1337/admin` and create your first user for the admin panel
- Go to `Roles & Permission`, choose `Public` and under permissions check `find`, `findone` and `count` under all content types - then click Save in the top right corner.
- 


## app.json

- Change `name` to the name of your app, as declared in `package.json`
- Change `repository` to the url of your repository, e.g. `https://github.com/.../your-project.git`

## frontend/.env.example

- Copy the file, and rename it to `.env` (will not be checked in to version control)
- Fill in the required environment variables
- CLOUDINARY_CLOUD_NAME

## Redux

- Change persist key to your app name