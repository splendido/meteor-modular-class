
ModularClassLog = new Logger('modular');

// var isDev = ('localhost' === window.location.hostname);
// Logger.setLevel('useraccounts', isDev ? 'trace' : 'info');
Logger.setLevel('modular', 'debug');


// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:base main.js');

// ------------------------
//  Base Class Declaration
// ------------------------


// Constructor
ModularBC = function() {
  var self = this;
  self.log.debug('Instantiating ModularBC');

  self.__startup();
};


// Logger
ModularBC.prototype.log = ModularClassLog;


ModularBC.prototype.__startupHooks = [];


ModularBC.prototype.__startup = function(){
  var self = this;

  // run the startup hooks. other calls to startup() during this can still
  // add hooks to the end.
  while (self.__startupHooks.length) {
    var hook = self.__startupHooks.shift();
    hook();
  }
  // Setting this to null tells Meteor.startup to call hooks immediately.
  self.__startupHooks = null;
}


ModularBC.prototype.startup = function (callback) {
  var self = this;

  if (self.__startupHooks) {
    __self.__startupHooks.push(callback);
  } else {
    // We already started up. Just call it now.
    callback();
  }
};
