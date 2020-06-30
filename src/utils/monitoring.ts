import { init } from '@sentry/browser'

export default {
  initialize: (dsn?: string, environment?: string) =>
    init({ dsn, environment }),
}
