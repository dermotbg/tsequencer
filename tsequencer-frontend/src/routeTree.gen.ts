/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

<<<<<<< HEAD
import { Route as rootRoute } from './routes/__root'
import { Route as TutorialImport } from './routes/tutorial'
import { Route as IndexImport } from './routes/index'
import { Route as UserUserIdImport } from './routes/user/$userId'
=======
import { Route as rootRoute } from "./routes/__root";
import { Route as TutorialImport } from "./routes/tutorial";
import { Route as IndexImport } from "./routes/index";
>>>>>>> main

// Create/Update Routes

const TutorialRoute = TutorialImport.update({
  path: "/tutorial",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const UserUserIdRoute = UserUserIdImport.update({
  path: '/user/$userId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
<<<<<<< HEAD
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/tutorial': {
      id: '/tutorial'
      path: '/tutorial'
      fullPath: '/tutorial'
      preLoaderRoute: typeof TutorialImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId': {
      id: '/user/$userId'
      path: '/user/$userId'
      fullPath: '/user/$userId'
      preLoaderRoute: typeof UserUserIdImport
      parentRoute: typeof rootRoute
    }
=======
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/tutorial": {
      id: "/tutorial";
      path: "/tutorial";
      fullPath: "/tutorial";
      preLoaderRoute: typeof TutorialImport;
      parentRoute: typeof rootRoute;
    };
>>>>>>> main
  }
}

// Create and export the route tree

<<<<<<< HEAD
export const routeTree = rootRoute.addChildren({
  IndexRoute,
  TutorialRoute,
  UserUserIdRoute,
})
=======
export const routeTree = rootRoute.addChildren({ IndexRoute, TutorialRoute });
>>>>>>> main

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/tutorial",
        "/user/$userId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/tutorial": {
      "filePath": "tutorial.tsx"
    },
    "/user/$userId": {
      "filePath": "user/$userId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
