'use strict';

module.exports = function gruntConfig(grunt) {

  grunt.initConfig({
    galen: {
      options: {
        cwd: './test/galen/',

        htmlReport: true,
        htmlReportDest: 'reports',

        url: (grunt.option('galen_url') || '').toString() ||
             process.env.GALEN_URL ||
             'http://127.0.0.1:3000'
      },
      'grid': {
        src: ['test/galen/**/*.test.js'],
        options: {
          output: true,
          concat: false,

          devices: {
            mobile: {
              browser: 'safari',
              platform: 'MAC',
              deviceName: 'iPhone 5s',
              desiredCapabilities: {
                platformName: 'iOS',
                deviceName: 'iPhone 5s'
              }
            },
            tablet: {
              browser: 'safari',
              platform: 'MAC',
              deviceName: 'iPad 2',
              desiredCapabilities: {
                platformName: 'iOS',
                deviceName: 'iPad 2'
              }
            },
            desktop: {
              browser: 'chrome',
              platform: 'MAC',
              deviceName: 'desktop',
              size: '1280x800'
            }
          },
          seleniumGrid: {
            url: 'http://10.65.85.67:4444/wd/hub'
          }
        }
      }
    }
  });

  // libs
  grunt.loadNpmTasks('grunt-galen');

  /**
   * grunt test
   * - Will run mocha tests
   * - Will run karma tests
   *
   * karma:once MUST be run before mochaTest otherwise mocha exposes env variablse
   * and karma breaks :(
   */
  grunt.registerTask('test', ['galen:grid']);
};

