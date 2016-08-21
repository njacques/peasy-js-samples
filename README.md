![peasy](https://www.dropbox.com/s/2yajr2x9yevvzbm/peasy3.png?dl=0&raw=1)

### Showcases a middle tier built with [peasy-js](https://github.com/peasy/peasy-js).

A full implementation of a middle tier built using the [peasy-js framework](https://github.com/peasy/peasy-js) and consumed by nodejs can be found here.  You can clone the repo (```git clone https://github.com/peasy/peasy-js-samples.git```) or download the entire solution as a [zip](https://github.com/peasy/peasy-js-samples/archive/master.zip).

The sample application is a ficticious order entry / inventory management system web api.  All efforts were made to keep this application as simple as possible to keep the focus on how a middle tier is written with peasy-js and consumed by multiple clients (client and server).

By default, this project is configured to use in-memory implementations of the [data proxies](https://github.com/peasy/peasy-js/wiki/Data-Proxy).  However, there is a multitude of configuration possibilities.  The [configurations](https://github.com/peasy/peasy-js-samples#configurations) section provides details on setting up many potential configurations.

### Requirements

1. [nodejs](https://nodejs.org/) - this application is a nodejs application and requires nodejs to be installed.
2. [postman](https://www.getpostman.com/), [fiddler](https://www.telerik.com/download/fiddler), [cURL](https://curl.haxx.se/download.html), or similar - these tools help to facilitate hitting http endpoints.
3. [mongodb](https://www.mongodb.com/) (optional) - this application by default is configured to work with in-memory data proxies, however, you can easily swap data proxies to interact with a mongodb instance if desired. See [Mongodb Configuration] (https://github.com/peasy/peasy-js-samples/blob/master/README.md#mongodb-configuration) for more details.

### Running the application

From a command line, navigate to the peasy-js-samples directory and run:

1. ``` npm install ```
2. ```node index.js```

### Testing out the application

With the application up and running you can navigate to the following urls:

* [http://localhost:3000/customers](http://localhost:3000/customers)
* [http://localhost:3000/orders](http://localhost:3000/orders)
* [http://localhost:3000/orderitems](http://localhost:3000/orderitems)
* [http://localhost:3000/products](http://localhost:3000/products)
* [http://localhost:3000/categories](http://localhost:3000/categories)
* [http://localhost:3000/inventoryitems](http://localhost:3000/inventoryitems)

### Application Walkthrough

[This walkthrough](https://github.com/peasy/peasy-js-samples/wiki/Application-Walkthrough) covers creating a customer, category, product, and placing an order on behalf of the new customer.  Further, it will cover submitting and shipping an order to see how it affects inventory.

### Mongodb Configuration

The sample applications can be configured to interact with a mongodb database.  With mongodb installed and running, here are the steps to setup the application to interact with it:

1.) Navigate to ```wireUpRoutes.js``` in the root of the application

2.) Locate and *comment* out the following line: 
```javascript 
var proxyFactory = require('./data_proxies/in-memory/inMemoryDataProxyFactory');
```

3.) Locate and *uncomment* the following line:
```javascript
var proxyFactory = require('./data_proxies/mongo/mongoDataProxyFactory');
```

Here is what you should have:

<img src="https://www.dropbox.com/s/wi7uskhfhnj23xc/Screen%20Shot%202016-08-18%20at%203.05.52%20PM.png?dl=0&raw=1" width=600 />

4.) Restart the application to ensure that the new proxies are consumed

5.) Test the app according to [these](https://github.com/peasy/peasy-js-samples/blob/master/README.md#testing-out-the-application) steps or by completing the application walkthrough [tutorial](https://github.com/peasy/peasy-js-samples/wiki/Application-Walkthrough).

### Running the unit tests

[peasy-js]() was designed with unit testing in mind, and as a result, each actor in the application has corresponding unit tests, located in the [*/spec*](https://github.com/peasy/peasy-js-samples/tree/master/spec) directory.

To run the tests, navigate to the */spec* directory from a command line and run the following command:

``` jasmine ```


### Videos

Coming soon ...

### Solution and Project Structure

An overview of the solution and all of the projects can be viewed [here](https://github.com/peasy/peasy-js-samples/wiki/Solution-and-project-structure).