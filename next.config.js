module.exports = {
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    /**
     * @summary config webpack here  
     * @todo config.module.rules.push()
     */

    return config
  }
}
