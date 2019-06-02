![npm](https://img.shields.io/npm/v/simple-user-api.svg)

![NPM](https://img.shields.io/npm/l/simple-user-api.svg)

# Get Started

1. ```shell
	$ npm i simple-user-api
	```


2. ```shell
	$ npm run dev
	```

3. Navigate to localhost:8000



__I use postman to send requests__

# API
Note: when using the api send json in the body of the request.

This is an example user json file. 

```json

"username": "Gninoskcaj",
"password": "LetMeIn888",
"email": "jackson.mooring@gmail.com",
"ProUser": true
"Bio": "Making examples is not my thing"
"Example": "text more text so & so & so"

```

###### To Create a user: Send a `Post` request to `localhost:8000/users`

###### To Get a user: Send a `Get` request to `localhost:8000/users/(username of user e.g. Gninoskcaj)`

###### To update a user: Send a `Put` request to `localhost:8000/users/(username of user e.g. Gninoskcaj)`

###### To delete a user: Send a `Delete` request to `localhost:8000/users/((username of user e.g. Gninoskcaj)`
