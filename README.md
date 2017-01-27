[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# NodeJS export server application
This example shows how to create export server with AnyChart and NodeJS.

## Running
First of all you need to clone this repository
```
$ git clone git@github.com:anychart-integrations/nodejs-export-server-application.git
```
Then go to the example directory
```
$ cd ./nodejs-export-server-application
```
For running example you have to install dependency. Just exec command below.
```
$ npm install
```
And to run export server you should just exec index.js file with nodejs.
```
$ node index.js
Export server listening on port 3000!
```

## Rules
```
 / - main page for input code of chart
 /export - rule for post requests with stringified js code for exporting
```

## Requirements
* jsdom (DOM environment for chart rendering)
* express (Web server)
* body-parser (Node.js body parsing middleware)
* anychart (anychart library)
* anychart-export (anychart export nodejs module)

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-export-server-application/blob/master/LICENSE).
