# kult Coding Task

## Run the project
### Docker
This project can be run with docker by doing the following sequence of commands in the root of the project:
```bash
docker-compose build && docker-compose up
```
By default, the client is available at ```localhost:3000``` while the server is listening to ```localhost:3001```.

### Locally
To run locally, open two terminals and move to the client folder in one of them and to the server folder in the other. Run the command ```npm install && npm start``` in each of the terminals.

By default, the client is available at ```localhost:3000``` while the server is listening to ```localhost:3001```.

## Client
The client was written in React.js using boostrap, a CSS framework. It includes two pages:

* ```/``` Main page of the project which includes a form to make posts with a given title and text, and a list of submitted posts. Each post in the list contains the display name of the author and their profile picture.

* ```/profile``` This page allows the user to change their display name and profile picture.

Pages are located in ```client/pages``` and components in ```client/components```.

## Server
The server was written in Node.js and uses a small JSON database provided by lowdb to keep information on the posts, current display name and profile picture of the user.
It includes the following routes:

* ```GET /posts``` Returns a JSON object containing the submitted posts.

* ```POST /posts``` Creates a new post.

* ```GET /profile``` Returns a JSON object containing the user's name and path to profile picture.

* ```POST /profile``` Modifies the current profile.

* ```GET /profile/username``` Retrieves the user's name.

Controllers are located in ```server/controllers```. The ```server/public``` folder contains the user's profile picture.