export const ROUTE_PATHS = {
  // Rutas de error
  ERRORS: {
    ROOT: 'errors',
    NOT_FOUND: '404',
    UNAUTHORIZED: '401',
    SERVER_ERROR: '500',
    FORBIDDEN: '403'
  },
  // Módulo Router
  ROUTER: {
    ROOT: 'router',
    WITHOUT_SIGNALS: 'router-without-signals',
    WITH_SIGNALS: 'router-signals',
    WITHOUT_SIGNALS_WITH_ID: 'router-without-signals/:id',
    WITH_SIGNALS_WITH_ID: 'router-signals/:id'
  },

  // Módulo RxJS
  RXJS: {
    ROOT: 'rxjs',
    TO_SIGNAL: 'rxjs-interop-to-signal',
    TO_OBSERVABLE: 'rxjs-interop-to-observable',
    RX_RESOURCE: 'rxjs-interop-rx-resource',
    TAKE_UNTIL_DESTROYED: 'rxjs-interop-take-until-destroyed',
    OUTPUT: 'rxjs-interop-output'
  },
} as const;