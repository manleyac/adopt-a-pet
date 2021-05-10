# adopt-a-pet
A webapp to search for adoptable pets!

This app searches for adoptable pets using the Petfinder API.

See it deployed here:
https://manleywebdev-petfinder.herokuapp.com/

Run the following command to start the server:

```
git clone
cd adopt-a-pet
npm install
cd client
npm install
cd ..
npm run start
```
or in developer mode with:
`npm run dev`

Accessing data from the api will require a .env file in the root of the directory with the following items:
```
API_KEY=yours here
SECRET=yours here
```


Server will start listening on port 8000, or another if a PORT environment variable is declared.
