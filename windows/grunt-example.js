// for selenium IE9
{
  'browserName': 'internet explorer',
  'platform': 'WINDOWS',
  'version': '9'
}

// for selenium IOS
{
  'browserName': 'internet explorer',
  'platform': 'WINDOWS',
  'version': '9'
}

// for GALEN
devices: {
  desktop: {
    platform: 'WINDOWS',
    size: '280x800',
    desiredCapabilities: {
      browserName: 'chrome'
    }
  },
  mobile: {
    platform: 'MAC',
    desiredCapabilities: {
      browserName: 'safari',
      platformName: 'iOS',
      deviceName: 'iPad 2'
    }
  },
},
seleniumGrid: {
  url: 'http://10.65.85.67:4444/wd/hub'
}
