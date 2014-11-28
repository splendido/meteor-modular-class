
// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:plugin main.js');


// Adds a plug-in method
ModularBC.prototype.plugin = function () {
  var self = this;

  self.log.info("This method was added by the modular:plugin package before class instantiation!");
};
