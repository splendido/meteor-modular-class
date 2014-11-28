console.log("Loading server/main.js");


if (ModularClass.plugin)
    ModularClass.plugin();


Meteor.startup(function(){
    console.log("Running server/main.js Meteor.startup");
});
