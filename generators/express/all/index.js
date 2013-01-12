var util   = require('util'),
    yeoman = require('yeoman');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createInitializerFile = function() {
  this.copy('server.js', 'server.js');
  this.copy('appRouter.js', 'appRouter.js');
};
