# apollo-auth0-sample

A simple client and server setup to showcase an issue with apollo dev tools.

## Auth0 Setup

This can all be done with a free auth0 account. Once you have an account, there are two things you'll need to create...

### 1. Auth0 Application

> This is where you get the domain and client ID values needed in the .env files

1. Go to the "Applications" tab in auth0 and click "Create Application"
2. Give your application a name (can be anything you want)
3. For the type, select "Single Page Web Application" then click create
4. Go to the "Settings" section of your application
5. Under the "Allowed Callback URLs", "Allowed Logout URLs", and "Allowed Web Origins" fields, put `http://localhost:3000` (the client url)
6. Click "Save Changes" at the bottom of the "Settings" section to save these changes

### 2. Auth0 API

> This is where you get the audience value needed in the .env files

1. Go to the "APIs" tab in auth0 and click "Create API"
2. Give your API a name (can be anything you want) and an identifier (NOTE: identifier is in the shape of a url but does not need to be real)
3. Click create to create the API

## server

A simple apollo server with two possible queries:
* `public` - returns an array of public Items
* `protected` - returns an array of protected Items

> An item has the following fields: id, name, type

To run the server...
1. Navigate to the `server` directory in this repo
2. Create a `.env` file at the same level as `.env.sample` and fill in the necessary info
3. Install dependencies `yarn install`
4. Run the server `yarn start`

## client

A basic CRA app. Has two buttons, one to trigger the public query and one for the protected query. Both queries are run when the client loads, but may be rerun at any point.

To run the client...
1. Navigate to the `client` directory in this repo
2. Create a `.env` file at the same level as `.env.sample` and fill in the necessary info
3. Install dependencies `yarn install`
4. Run the client `yarn start`
