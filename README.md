[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# NodeJS export server application
This example shows how to create an export server with AnyChart and NodeJS.

## Running
Clone this repository:
```
$ git clone git@github.com:anychart-integrations/nodejs-export-server-application.git
```
Navigate to the example directory:
```
$ cd ./nodejs-export-server-application
```
To run this example you have to install dependencies. Run this command:
```
$ npm install
```
And to run the export server you should just execute index.js file with nodejs:
```
$ node index.js
Export server listening on port 3000!
```

## Rules
```
 / - main page for input code of a chart
 /export - rule for post requests with stringified JavaScript code for export
```

## Requirements
* jsdom (DOM environment for chart rendering)
* express (Web server)
* body-parser (Node.js body parsing middleware)
* anychart (AnyChart library)
* anychart-nodejs (AnyChart nodejs export module)

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-export-server-application/blob/master/LICENSE).
