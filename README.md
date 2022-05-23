# wit-micro-frontend-example

In this repository is the result of creating a Micro Frontend using Webpack 5 Module Federation from my 2022 Perspektywy Women in Tech Summit Talk.

1. Created a **Host** application (`host-app`) with React, JavaScript and CSS using [create-mf-app](https://www.npmjs.com/package/create-mf-app).
2. Created a **Remote** application (`remote-app`) with React, JavaScript and CSS using [create-mf-app](https://www.npmjs.com/package/create-mf-app), and added a **Counter** component.
3. Exposed the **Remote** application's **Counter** module using Webpack 5 ModuleFederationPlugin in `webpack.config.js` so that our `host-app` can access it.
4. Configured **Host** application's Webpack 5 ModuleFederationPlugin in `webpack.config.js` to reference our remote, and then imported the **Counter** component into its `App.jsx` to render it.

## How To Run Locally
1. cd into the root of the `host-app` directory
2. run `npm install`
3. run `npm start`
4. Your browser should now show the host-app running on http://localhost:8080
5. cd into the root of the `remote-app` directory
6. run `npm install`
7. run `npm start`
8. Your browser should now show the remote-app running on http://localhost:8181
