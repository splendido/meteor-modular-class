// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Executing modular:init:client_startup.js');


ModularBC.prototype.__startupHooks.push(function(){
    ModularClassLog.debug(' - Running modular:init:client_startup.js');
});
