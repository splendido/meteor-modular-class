// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Executing modular:plugin:server_startup.js');


ModularBC.prototype.__startupHooks.push(function(){
    ModularClassLog.debug(' - Running modular:plugin:server_startup.js');
});
