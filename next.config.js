const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({dest: 'public', runtimeCaching})
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  const baseConfig = {
    experimental: {
      optimizeCss: true,
    },
    reactStrictMode: true,
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...baseConfig
    }
  }

  return withPWA({
      ...baseConfig,
      poweredByHeader: false,
      swcMinify: true
   })
}
