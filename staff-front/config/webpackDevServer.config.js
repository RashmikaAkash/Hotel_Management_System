'use strict';

const fs = require('fs');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('./paths');
const getHttpsConfig = require('./getHttpsConfig');

const host = process.env.HOST || '0.0.0.0';
const sockHost = process.env.WDS_SOCKET_HOST;
const sockPath = process.env.WDS_SOCKET_PATH; // default: '/ws'
const sockPort = process.env.WDS_SOCKET_PORT;

module.exports = function (proxy, allowedHost) {
  const disableFirewall =
    !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true';
  
  return {
    allowedHosts: disableFirewall ? 'all' : [allowedHost],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    compress: true,
    static: {
      directory: paths.appPublic,
      publicPath: [paths.publicUrlOrPath],
      watch: {
        ignored: ignoredFiles(paths.appSrc),
      },
    },
    client: {
      webSocketURL: {
        hostname: sockHost,
        pathname: sockPath,
        port: sockPort,
      },
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    devMiddleware: {
      publicPath: paths.publicUrlOrPath.slice(0, -1),
    },
    https: getHttpsConfig(),
    host,
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath,
    },
    proxy,
    
    // No nested 'devServer', setup middlewares directly
    setupMiddlewares: (middlewares, devServer) => {
      // Middleware logic that was previously in `onBeforeSetupMiddleware`
      
      // Keep `evalSourceMapMiddleware` before `redirectServedPath`
      middlewares.unshift({
        name: 'eval-source-map',
        middleware: evalSourceMapMiddleware(devServer),
      });

      if (fs.existsSync(paths.proxySetup)) {
        // Register user-provided middleware for proxy reasons
        const proxyMiddleware = require(paths.proxySetup);
        middlewares.unshift({
          name: 'proxy-setup',
          middleware: proxyMiddleware(devServer.app),
        });
      }

      // Middleware logic that was previously in `onAfterSetupMiddleware`
      
      // Redirect to `PUBLIC_URL` or `homepage` from `package.json` if URL doesn't match
      middlewares.push({
        name: 'redirect-served-path',
        middleware: redirectServedPath(paths.publicUrlOrPath),
      });

      // Service worker file to reset any previous service worker registered
      middlewares.push({
        name: 'noop-service-worker',
        middleware: noopServiceWorkerMiddleware(paths.publicUrlOrPath),
      });

      return middlewares;
    },
  };
};
