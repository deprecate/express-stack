var path = require('path');
var express = require('express');

module.exports = function(grunt) {
  grunt.renameHelper('server', 'yeoman-server');

  grunt.registerHelper('server', function(opts, cb) {
    cb = cb || function() {};

    var app = express();

    // add the special livereload snippet injection middleware
    if ( opts.inject ) {
      app.use( grunt.helper('reload:inject', opts) );
    }

    app.use(express.static(path.join(opts.base, '../temp')));
    // Serve static files.
    app.use(express.static(opts.base));
    // Make empty directories browsable.
    app.use(express.directory(opts.base));
    // Serve the livereload.js script
    app.use(express.static(path.join(__dirname, '..', 'livereload')));
    // Establish application server.*/
    require('./appRouter')(app);
    // To deal with errors, 404 and alike.
    app.use(grunt.helper('server:errorHandler', opts));
    // Connect error handler (for better looking error pages)
    app.use(express.errorHandler());

    // the connect logger format if --debug was specified. Get values from
    // config or use defaults.
    var format = grunt.config('server.logformat') || (
      '[D] server :method :url :status ' +
      ':res[content-length] - :response-time ms'
    );

    // If --debug was specified, enable logging.
    if (grunt.option('debug')) {
      express.logger.format('yeoman', format.magenta);
      app.use(express.logger('yeoman'));
    }

    return app
      .on('error', function( err ) {
        if ( err.code === 'EADDRINUSE' ) {
          return this.listen(0); // 0 means random port
        }

        // not an EADDRINUSE error, buble up the error
        cb(err);
      })
      .listen(opts.port, function() {
        var port = this.address().port;

        // Start server.
        grunt.log
          .subhead( 'Starting Express web server on port '.yellow + String( port ).red )
          .writeln( '  - ' + path.resolve(opts.base) )
          .writeln('I\'ll also watch your files for changes, recompile if neccessary and live reload the page.')
          .writeln('Hit Ctrl+C to quit.');

        // create the reactor object
        grunt.helper('reload:reactor', {
          server: this,
          apiVersion: '1.7',
          host: opts.hostname,
          port: port
        });

        cb(null, port);
      });
    });
};
