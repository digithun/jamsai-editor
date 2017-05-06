// @flow
const Renderer = require('./renderer')

export type ApplicationContext = {
    config: {
        isDev: boolean
    }
}

const context: ApplicationContext = {
  config: {
    isDev: process.env.NODE_ENV === 'production' || false
  }
}

const renderer = Renderer(context)
