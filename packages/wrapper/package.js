Package.describe({
  name: 'modular:wrapper',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('modular:base@1.0.0',           ['client', 'server']                );
  api.use('modular:plugin@1.0.0',         ['client', 'server'], { weak: true });
  api.use('modular:main-templates@1.0.0', ['client',         ], { weak: true });
  api.use('modular:helpers@1.0.0',        ['client',         ]                );

  api.use([
      "templating",
      "aldeed:template-extension@3.1.1"
  ], ["client"]);

  api.addFiles([
    'lib/wrapped_modular_class.html',
  ], ['client']);

  api.addFiles([
    'lib/main.js',
  ], ['server', 'client']);

  api.addFiles([
    'lib/client_startup.js',
  ], 'client');

  api.export('ModularClass', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:wrapper');
  api.addFiles('tests/main.js');
});
