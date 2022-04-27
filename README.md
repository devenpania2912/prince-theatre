A little overview of the project:

The project pulls some info from the API and displays it on screen, with a little bit of beautification.

The API is a bit unstable -> When there is an error, the code sets the flag to 1 which tells the program that it needs to retry

Choosing currency -> There is a dropdown list on the top right hand corner which lets you select the currency and converts the values into the chosen currency, without delay. The default is, for obvious reasons AUD.

Mobile view -> The frontend is optimised for mobile view as well.

The code consumes the API, which gives us 2 arrays that need to be merged into one to make sure we have an object which has all details of a movie with provider info such as provider name and their price.

The code uses three custom classes to consume the API:
1. MovieListClass -> array of movies consumed through the API
2. MovieClass -> Object containing info about that particular movie, along with a providerClass array
3. ProviderClass -> Object in every movieClass which gives us the provider's id, name and price (Needed for highlighting the cheapest movie, and also to some extent for converting currency)

The code also has a few console logs used during build, and a few comments around every function explaining why its needed and what it does

Once the API is fully consumed by the wrapper(Service) it is then passed to Theatre which renders the Theatre and cleans up the list before passing it on. The list is passed on to the component MovieCard, one movie at a time. (along with the currency selected)

MovieCard is the component which displays the movies -> poster, title, price (for all providers)

MovieCard looks for the cheapest price from the providerList array and highlights it in green, and also converts the price to the selected currency.

How is the price converterd? 
The component movieCard also consumes another API which gives us the real-time rates for converting currencies, if the user selects AUD, price is shown as it is, but in case a different currency is chosen, the component does the magic and converts the prices to the chosen currency. (The API's base currency is EUR, hence the function converts prices to EUR and then to final price that is to be displayed.)

Check out the currency exchange rates API used: https://api.exchangerate.host/latest

There is a lot of commented out code that can be found inside, but thats kept there deliberately for understanding the thought process behind building each function/ component / service etc.

Q: How to run the project? 
A: Can be found below, but its pretty simple, 'npm start' is all it needs. Make sure you have installed all the dependencies.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
