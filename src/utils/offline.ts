import isLocalhost from '../utils/localhost'

type ConfigType = {
  onSuccess: Function
  onUpdate: Function
}

export function register (config?: ConfigType) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)
    if (publicUrl.origin !== window.location.origin) return

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config)

        navigator?.serviceWorker?.ready?.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA',
          )
        })
      } else {
        registerValidSW(swUrl, config)
      }
    })
  }
}

function registerValidSW (swUrl: string, config?: ConfigType) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration?.installing
        if (installingWorker == null) return
        installingWorker.onstatechange = () => {
          if (installingWorker?.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.',
              )

              config?.onUpdate?.(registration)
            } else {
              console.log('Content is cached for offline use.')
              config?.onSuccess?.(registration)
            }
          }
        }
      }
    })
    .catch(error => {
      console.error('Error during service worker registration:', error)
    })
}

function checkValidServiceWorker (swUrl: string, config?: ConfigType) {
  fetch(swUrl)
    .then(response => {
      const contentType = response?.headers?.get?.('content-type')
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        navigator?.serviceWorker?.ready?.then(registration =>
          registration.unregister().then(() => window.location.reload()),
        )
      } else {
        registerValidSW(swUrl, config)
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.',
      )
    })
}

export function unregister () {
  if ('serviceWorker' in navigator)
    navigator?.serviceWorker?.ready?.then(registration =>
      registration?.unregister?.(),
    )
}

export default {
  register,
  unregister,
}
