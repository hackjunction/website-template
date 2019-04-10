# Development

This is a general guide to working with the project. You'll mostly be making code changes to the `frontend` directory, but at the end we will also briefly cover some cases where you might need to edit files in `backend`.

## Frontend overview

So the frontend for this app is a React app generated with `create-react-app`, and it has the following folder structure under `src`: (we'll cover each folder in detail below)

- `utils` - general purpose utility functions
- `services` - any API calls the app needs to make are defined here
- `styles` - base styles for the app, as well as Scss variables to use elsewhere. The styles that relate only to a specific component should be defined in a `style.scss` file that lives next to the component
- `pages` - any component that exists at a unique url, such as `HomePage` or `AboutPage`
- `components` - all other components
- `redux` - all Redux related stuff
- `assets` - any static images, icons or fonts used in the app

In addition to this you'll find the following files not normally present in a React app:

- `src/GlobalLifecycle.js` - A component that doesn't render anything but can be used to e.g. dispatch API calls or do other actions that we want to perform when the app first loads
- `src/config.js` - A config object that takes values from your `.env` file and maps them to config options (you shouldn't use `process.env.SOME_VARIABLE` anywhere else in the app)

## Working with components

When creating new components, you should use the following structure: 

1) Is it a page with a unique url (put it in `pages`) or is it a reusable, smaller component (put it in `components`)
2) Under the correct directory, create a new **folder** with the name of the component:

```
-MyComponent
---index.js
---style.scss
```

With this structure you can import this component with `import MyComponent from 'components/MyComponent'` instead of having to write `components/MyComponent/index.js` (it automatically chooses the `index.js` file from the specified directory)

## Styling components

You should use some version of [BEM](https://css-tricks.com/bem-101/) when thinking about classNames for your components. For example, if I were to write a component to display a social media post (a component called `<Post />`), I might do something like this:

```
<div className="Post">
	<h3 className="Post--title">A post</h3>
	<p className="Post--body">Yadayadayada</p>
	<div className="Post--buttons">
		<a className="Post--buttons__facebook">Share on Facebook</a>
		<a className="Post--buttons__linkedin">Share on LinkedIn</a>
	</div>
</div>
```

This keeps your `.scss` code very clean and readable, because you can take advantage of nesting:

```
.Post {

	&--title {

	}

	&--body {

	}

	&--buttons {

		&__facebook {

		}

		&__linkedin {

		}
	}
}
```

If a component has more than two levels of hierarchy, the class names might start getting a bit ugly. This might be a good situation to extract that part of the code to a smaller component, which can be styled in a similar manner. 

The upsides of this BEM approach are:

- Your Scss code looks really nice, logical and readable
- You can clearly see the hierarchy of your elements directly from your .scss
- As long as you don't create several components with the same name (which you shouldn't), your styles have no possible way of leaking elsewhere, as your .scss is all contained within a class name that begins with the component's name
- You don't have to constantly hop between your .scss and .js files when styling, since you can intuitively remember the logical names you gave to your components once you get used to using a system like this.

You can make up your own version of BEM as well, or look up a good one from the internet, it's up to you - your classes don't need to be in the specific format that I like to use (`ComponentName--element__child`).

**Also, one additional note** about .scss: Please don't use element selectors for styling (`h1`, `span`, etc.) - take the time to give a class for each element you want to apply styles to. Element selectors should only be used when you want to apply global styles, such as saying "I want all <a/> elements on my site to be red (unless overriden somewhere)"

## Adding an API service to fetch content and store it in Redux

 