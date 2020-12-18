# apollo-auth0-sample

A simple client and server setup to showcase an issue with apollo dev tools.

## server

A simple apollo server with two possible queries:
* `public` - returns the string "public response"
* `protected` - an authenticated query; returns the string "protected response" if authenticated

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
