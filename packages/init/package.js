Package.describe({
  name: 'modular:init',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
      'modular:base@1.0.0',
  ], ['client', 'server']);

  api.use('modular:plugin@1.0.0', { weak: true });
  api.use('modular:main-a@1.0.0', { weak: true });
  api.use('modular:main-b@1.0.0', { weak: true });

  api.addFiles([
    'lib/server_startup.js',
  ], 'server');

  api.addFiles([
    'lib/client_startup.js',
  ], 'client');

  api.addFiles([
    'lib/main.js',
  ], ['server', 'client']);

  api.export('ModularClass', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:init');
  api.addFiles('tests/main.js');
});
