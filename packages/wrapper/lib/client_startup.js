// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:wrapper client_startup.js');


ModularBC.prototype.__startupHooks.push(function(){
    ModularClassLog.debug(' - Running modular:wrapper client_startup.js');

    // Uses WrappedModularClass template in place of the original ModularClass
    Template.WrappedModularClass.replaces("ModularClass");
});
