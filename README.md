# Northcoders News FE

This project is my frontend project as part of my time with Northcoders and is linked to my backend API. 

The app looks to provide a similar service to reddit, the functionality meets the requirements laid out in the brief however there is scope for additional features ie add/delete articles (this functionality would be similar to the current comments sections), the backend already has support for this along with pagination of articles.

The current version of the repo has a hard coded user which leaves scope for external authentication services to be implemented.

You can find a hosted verison of the app here along with the associated repo:

https://rw-nc-news.netlify.app/

https://github.com/Willo84uk/nc-news-fe

and the backend api here along with the associated repo:

https://nc-news-5sxy.onrender.com/

https://github.com/Willo84uk/nc-news

In order to run locally you will require minimum Node v20.7.0

To run the project locally you will need to:

$ git clone https://github.com/Willo84uk/nc-news-fe.git

you should then install dependencies to your machine by running

$ npm install

you can then launch the project

$ npm run dev

If required you can use your own version of the api created from the backend element of the project and you will need to update the path of your api in the utils.js file.

