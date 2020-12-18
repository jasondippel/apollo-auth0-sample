# apollo-auth0-sample

A simple client and server setup to showcase an issue with apollo dev tools.

## server

A simple apollo server with two possible queries:
* `public` - returns an array of public Items

> An item has the following fields: id, name, type

To run the server...
1. Navigate to the `server` directory in this repo
3. Install dependencies `yarn install`
4. Run the server `yarn start`

## client

A basic CRA app. Has one button to trigger the public query on the server. Query runs when client loads, but may be rerun at any point by clicking the button.

To run the client...
1. Navigate to the `client` directory in this repo
3. Install dependencies `yarn install`
4. Run the client `yarn start`
