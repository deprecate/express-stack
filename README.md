express-stack
=============
A proof of concept stack using Yeoman 0.9.6, Express and AngularJS

* Custom version of Yeoman with support for Express middleware
* LiveReload supported out of the box
* Proof-of-concept application using AngularJS

This stack assumes that you wish to develop both the server and client portions of your application within the same directory. By the end of setup, you will be able to see how to do this using the demo application which has a `server` directory for Express code and an `app` directory for your client-side code.


### Components

* yeoman-custom
* demo

### Installation

1. Find out where your local yeoman lives using `where yeoman` (e.g `/usr/local/share/npm/lib/node_modules/yeoman`). 
2. Under the tasks directory of your yeoman install, replace `server.js` with `yeoman-custom/cli/tasks/server.js` from this repo.
3. Run `nom install` on your updated yeoman, to resolve the Express.js dependency

### Usage

You should now be able to navigate to `demo` and run `yeoman server` to run it. Note, if you have multiple versions of yeoman installed locally, you may wish to directly use the binary in `yeoman-custom`, otherwise everything should work.

### Todos

* We need a generator for the Express side of things.

### Credits

addyosmani, blai, jacobmunn, mklabs