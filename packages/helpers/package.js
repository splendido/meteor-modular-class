Package.describe({
  name: 'modular:helpers',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('modular:base@1.0.0');

  api.use([
      "templating",
  ], ["client"]);

  api.addFiles([
    'lib/client_startup.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:helpers');
  api.addFiles('tests/main.js');
});
