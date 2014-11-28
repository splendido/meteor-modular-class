Package.describe({
  name: 'modular:plugin',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('modular:base@1.0.0');

  api.addFiles([
    'lib/main.js',
  ], ['server', 'client']);

  api.addFiles([
    'lib/server_startup.js',
  ], 'server');

  api.addFiles([
    'lib/client_startup.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:plugin');
  api.addFiles('tests/main.js');
});
