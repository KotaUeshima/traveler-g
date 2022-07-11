Basic story:

The user arrives at our site with the intent to learn more about different countries before deciding to travel there.

On the home page they are introduced to a selection of countries that are represented with the country name and corresponding flag. When the user clicks on the flag it then displays some important information about that particular country (ex. Language, currency, capacitor city)

The user can navigate to an about page to learn about the site’s purpose.

The user may also navigate to the travelers experiences tab to view the list of countries again. This time when the user clicks on the country, the user will be able to see images/ comments added by other travelers about their experiences in these countries. The user will be able to submit their own travel experience image and comment to a country they themselves have visited via a form.

(stretch goal) The user can then navigate to the currency exchange tab to discover what the current exchange rate would be for the country they have chosen to visit.


User stories:
As a user, I should view each country with a corresponding flag on the home page. I should be able to click on this flag image and reveal more details about that country: currency, language, capitol city, etc.
As a user I should be able to navigate to the about page to learn more about the intention of the travel guide site.
As a user I should be able to view images and reviews added by others who have traveled to that particular country when I navigate to the User experience tab on the nav bar. Here I as a user should also be able to add my own picture/ review of somewhere I visited in one of the countries if I wish.
Stretch goal: As a user I should be able to find the currency exchange rate of that country by navigating to the currency exchange tab

Challenges we expect to face:
Getting react router set up the way we want it to work
Navigating the data flow between our components.
Figuring out the best way to use CSS or using styled components

How we are meeting the requirements:
Our navigation component will enable us to use React router and navigate between Home, About, User experience , and if able to achieve our stretch goal the currency exchange tab.
We will create several components including nav, countries container, country card, about, experience form, experiences container, etc.
We will include a json file that contains all of our data required for each country and its initial user experiences. This will allow us to make POST requests to add new user experiences.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

