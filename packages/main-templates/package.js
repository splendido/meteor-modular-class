Package.describe({
  name: 'modular:main-templates',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
      "templating",
  ], ["client"]);

  api.addFiles([
    'lib/modular_class.html',
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:main-templates');
  api.addFiles('tests/main.js');
});
