import path from 'path'
import React, { Component } from 'react'
import typescriptWebpackPaths from './webpack.config.js'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'CJ Patoilo'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias = typescriptWebpackPaths.resolve.alias
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true
                }
              }
            ]
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader
        ]
      }
    ]
    return config
  },
  Document: class CustomHtml extends Component {
    render () {
      const { props: { Html, Head, Body, children, renderMeta } } = this

      return (
        <Html>
          <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="assets/icons/mstile-150x150.png"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff"/>
            <meta name="apple-mobile-web-app-title" content="CJ Patoilo"/>
            <meta name="application-name" content="CJ Patoilo"/>
            <meta name="format-detection" content="telephone=no"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="robots" content="index, follow"/>
            <meta name="author" content="CJ Patoilo"/>
            <meta name="description" content="Life Hacker based in Brazil. Engineer of things. Creator of Milligram and Airform."/>
            <meta property="og:description" content="Life Hacker based in Brazil. Engineer of things. Creator of Milligram and Airform."/>
            <meta property="og:image" content="https://avatars3.githubusercontent.com/u/1542831?v=3&s=800"/>
            <meta property="og:locale" content="en"/>
            <meta property="og:site_name" content="CJ Patoilo"/>
            <meta property="og:title" content="CJ Patoilo"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://cjpatoilo.com"/>
            <meta property="article:published_time" content="2018-04-18T04:10:52.014Z"/>
            <meta property="article:author" content="CJ Patoilo"/>
            <meta property="article:section" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:domain" content="CJ Patoilo"/>
            <meta name="twitter:url" content="https://cjpatoilo.com"/>
            <meta name="twitter:site" content="https://cjpatoilo.com"/>
            <meta name="twitter:creator" content="CJ Patoilo"/>
            <meta name="twitter:title" content="CJ Patoilo"/>
            <meta name="twitter:description" content="Life Hacker based in Brazil. Engineer of things. Creator of Milligram and Airform."/>
            <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/1542831?v=3&s=800"/>
            <title>CJ Patoilo</title>
            <link rel="canonical" href="https://cjpatoilo.com"/>
            <link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png" sizes="180x180"/>
            <link rel="icon" href="assets/icons/favicon-32x32.png" sizes="32x32"/>
            <link rel="icon" href="assets/icons/favicon-16x16.png" sizes="16x16"/>
            <link rel="manifest" href="manifest.json"/>
            <link rel="image_src" href="https://avatars3.githubusercontent.com/u/1542831?v=3&s=800"/>
            <script async defer src="service-worker.js"></script>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
