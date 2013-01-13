express-stack
=============
A proof of concept stack for development using Yeoman 0.9.6, Express and AngularJS

* Custom version of Yeoman's server.js with support for Express middleware
* LiveReload supported out of the box
* Generator for Express and CRUD generator for AngularJS
* Proof-of-concept application using AngularJS

This stack assumes that you wish to develop both the server and client portions of your application within the same directory. By the end of setup, you will be able to see how to do this using the demo application which has a `server` directory for Express code and an `app` directory for your client-side code.

### Components

* `yeoman-custom` - A custom build of Yeoman 0.9.6 with support for Express middleware
* `generators` - Express and AngularJS Crud generators for scaffolding
* `demo` - A sample application

### Installation (assume you have already installed Yeoman@0.9.6)
From `express-stack` root:
1. `npm install`
2. `grunt install`
3. cd `yeoman-custom/cli/bin` and run `pwd` then add the output to your system path
4. Now your system has a new command `yeomen` (noticed the `e`, instead of `a`, `e` for `express`?), which will run this custom copy of yeoman bundled with the custom generators listed below.

### Usage

You should now be able to navigate to `demo` and run `yeoman server` to run it. Note, if you have multiple versions of yeoman installed locally, you may wish to directly use the binary in `yeoman-custom`, otherwise everything should work.

For the generators, the following are supported:

```
Angularcrud:
  angularcrud:all
  angularcrud:app
  angularcrud:common
  angularcrud:controller
  angularcrud:crud
  angularcrud:crud-controller
  angularcrud:crud-route
  angularcrud:crud-view
  angularcrud:directive
  angularcrud:filter
  angularcrud:route
  angularcrud:service
  angularcrud:view

Express:
  express:all
  express:crud
```

For more information about individual sub-generators, please see the USAGE guidelines.

### Credits

@addyosmani, @blai, @jacobmumm, @mklabs