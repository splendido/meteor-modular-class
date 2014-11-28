Package.describe({
  name: 'modular:main-a',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('modular:base@1.0.0');
  api.use('modular:plugin@1.0.0', { weak: true });
  api.use('modular:init@1.0.0');

  api.addFiles([
    'lib/main.js',
  ], ['server', 'client']);

  api.export('ModularClass', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:main-a');
  api.addFiles('tests/main.js');
});
