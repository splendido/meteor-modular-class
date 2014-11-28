// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Executing modular:base:client_startup.js');


ModularBC.prototype.__startupHooks.push(function(){
    ModularClassLog.debug(' - Running modular:base:client_startup.js');
});
