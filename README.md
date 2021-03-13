# ACSG-545-Restaurant

## Installation
Install [Node.js](https://nodejs.org/en/) 14.15.4 LTS.

Install packages:

```
npm install
```

Run local app server.
The DEBUG environment variable is optional.

```
# MacOS/Linux
DEBUG=acsg-545-restaurant:* npm start
# Windows
set DEBUG=acsg-545-restaurant:* & npm start
```

Then, navigate to [localhost:8080](localhost:8080).

## Contributing
Use [Javascript Standard Style](https://standardjs.com/).
In the project directory, run the following to check the style on-demand:

```
./node_modules/.bin/standard
```

Install the git pre-commit hook for automatic checking before a commit:

```
ln -s ../../tools/pre-commit .git/hooks/pre-commit
```
