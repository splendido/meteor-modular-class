// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:helpers client_startup.js');


ModularBC.prototype.__startupHooks.push(function(){
  ModularClassLog.debug(' - Running modular:helpers client_startup.js');

  Template.ModularClass.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.ModularClass.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Meteor.startup(function(){
    // counter starts at 0
    Session.setDefault("counter", 0);
  });

});
