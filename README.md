meteor-modular-class
====================

Proof of Concept for a modular class made up by a number of different meteor packages


## What's that?!

I'm working on a proof of concept for an extensible modular class object made up by a number of different packages, some of which might be plug-in-packages.

The idea is to be able to extend the class prototype and wrap/substitute templates with plug-in packages before the actual class instantiation.

This means you can have a number of compulsory packages needed to properly set up the class and get it running (more than one to have a better code organization on the lines of what iron:router did recently...)
Then you could have a number of 'plug-in' packages that, when added to the project, are able to extend the prototype of your base class and possibly modify/substitute/wrap templates.

...by chance that is what I'd need for useraccounts to integrate advanced configuration options and code ;-)


To play around with this:

```shell
git clone https://github.com/splendido/meteor-modular-class.git
cd meteor-modular-class && meteor
```

lets keep an eye on the log streams...

Then (possibly on another console while the 'app is still running...)

```shell
meteor add modular:plugin
```

You'll see some more log lines pupping up in the middle of initialization sequences!
