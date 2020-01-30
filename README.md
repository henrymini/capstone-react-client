This is the front end for my poetry capstone project. It acts as a private forum/web storage for a poetry collection. Being a private collection, a user must first sign in using the link on the navbar in the top right corner. A sign up feature is provided for new users. Once signed in, the navbar will change to display the option to change the accounts password as well as an option to sign out. The user will also be presented with titles and matching authors for a collection of poems and similar works. Clicking on one will bring up the body of the piece, along with the information underneath informing the user of the year of original publication. Authenticated users have the option of adding a piece to the collection by clicking 'Make an Addition' on the navbar. They will then be presented with a form to input the necessary information. Authenticated users have the option of editing or deleting pieces that they have created themselves.

## Matching back end repo:
https://github.com/henrymini/capstone-express-api

## Deployed back end:
https://quiet-retreat-06599.herokuapp.com/

## Deployed front end:
https://henrymini.github.io/capstone-react-client/#/

## Installation Instructions

First download this repo to your computer, open in the terminal and run ```npm install``` to install the necessary packages. Next use ```npm start``` or ```npm run start``` to initiate the development client on your computer. The application should open automatically in a new tab. A production client can be hosted on GitHub Pages for a more permanent and publicly accessable version.

# ERD and Wireframe
Both can be found at this link: https://imgur.com/a/KZBB3ZQ

</hr>

For this project I used React.js for the front end and Express.js and Mongoose for the back end. Heroku was used to deploy the back end and GitHub pages was used for the front end. I used Atom as a text editor, and Node.js with npm as a package manager.

Future Iterations:
In the future I would like to add functionality that allows a user to change just one field of a piece at a time, instead of routing to the whole form.

I started this project with my back end, in the hope that if I could get the custom api to function properly the following front end would be much easier. Once I started on the front end, I focused first on defining the component for INDEX, or GET all. I moved on to a single GET, then the deletion, edit, and creation functionality. I focused on error-driven development to help guide me into when problem was next to solve.

#### Application Screenshot

This is a screenshot of the application past authorization. You can see two poems listed, Ozymandias by Percy Bysshe Shelley and The Raven by Edgar Allen Poe, but this application is capable of containing many more.
![alt text](https://imgur.com/a/zSZ6KXf)

This is the application view once one of the poems has been selected, in this case Ozymandias by Percy Bysshe Shelley.
![alt text](https://imgur.com/a/xpVQ9QY)
