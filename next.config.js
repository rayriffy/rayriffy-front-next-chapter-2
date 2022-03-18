const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPreact = require('next-plugin-preact')

dayjs.extend(utc)
dayjs.extend(timezone)

module.exports = withPlugins([[withPreact], [withBundleAnalyzer]], {
  env: {
    buildNumber: dayjs.tz(dayjs(), 'Asia/Bangkok').format('YYYYMMDD.HH'),
  },
  images: {
    domains: ['images.ctfassets.net', 'webring.wonderful.software'],
  },
  experimental: {
    polyfillsOptimization: true,
    scrollRestoration: true,
  },
})
