// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Executing modular:init:server_startup.js');


ModularBC.prototype.__startupHooks.push(function(){
    ModularClassLog.debug(' - Running modular:init:server_startup.js');
});
