module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'support/hooks.ts',
      'support/world.ts',
      'step_definitions/**/*.ts'
    ],
    format: [
      'progress',
      'json:reports/json/cucumber-report.json' 
    ],
    paths: ['features/**/*.feature']
  }
};
