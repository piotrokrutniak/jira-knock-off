/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectProjectIdViewImport } from './routes/project/$projectId/view'
import { Route as ProjectProjectIdStoryCreateImport } from './routes/project/$projectId/story/create'
import { Route as ProjectProjectIdStoryStoryIdImport } from './routes/project/$projectId/story/$storyId'
import { Route as ProjectProjectIdStoryTaskTaskIdImport } from './routes/project/$projectId/story/task/$taskId'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const ProjectCreateLazyImport = createFileRoute('/project/create')()
const AuthSignUpLazyImport = createFileRoute('/auth/signUp')()
const AuthSignInLazyImport = createFileRoute('/auth/signIn')()
const ProjectStoriesCreateLazyImport = createFileRoute(
  '/project/stories/create',
)()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProjectCreateLazyRoute = ProjectCreateLazyImport.update({
  path: '/project/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/project/create.lazy').then((d) => d.Route),
)

const AuthSignUpLazyRoute = AuthSignUpLazyImport.update({
  path: '/auth/signUp',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/auth/signUp.lazy').then((d) => d.Route))

const AuthSignInLazyRoute = AuthSignInLazyImport.update({
  path: '/auth/signIn',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/auth/signIn.lazy').then((d) => d.Route))

const ProjectStoriesCreateLazyRoute = ProjectStoriesCreateLazyImport.update({
  path: '/project/stories/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/project/stories/create.lazy').then((d) => d.Route),
)

const ProjectProjectIdViewRoute = ProjectProjectIdViewImport.update({
  path: '/project/$projectId/view',
  getParentRoute: () => rootRoute,
} as any)

const ProjectProjectIdStoryCreateRoute =
  ProjectProjectIdStoryCreateImport.update({
    path: '/project/$projectId/story/create',
    getParentRoute: () => rootRoute,
  } as any)

const ProjectProjectIdStoryStoryIdRoute =
  ProjectProjectIdStoryStoryIdImport.update({
    path: '/project/$projectId/story/$storyId',
    getParentRoute: () => rootRoute,
  } as any)

const ProjectProjectIdStoryTaskTaskIdRoute =
  ProjectProjectIdStoryTaskTaskIdImport.update({
    path: '/project/$projectId/story/task/$taskId',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/signIn': {
      id: '/auth/signIn'
      path: '/auth/signIn'
      fullPath: '/auth/signIn'
      preLoaderRoute: typeof AuthSignInLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/signUp': {
      id: '/auth/signUp'
      path: '/auth/signUp'
      fullPath: '/auth/signUp'
      preLoaderRoute: typeof AuthSignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/project/create': {
      id: '/project/create'
      path: '/project/create'
      fullPath: '/project/create'
      preLoaderRoute: typeof ProjectCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/project/$projectId/view': {
      id: '/project/$projectId/view'
      path: '/project/$projectId/view'
      fullPath: '/project/$projectId/view'
      preLoaderRoute: typeof ProjectProjectIdViewImport
      parentRoute: typeof rootRoute
    }
    '/project/stories/create': {
      id: '/project/stories/create'
      path: '/project/stories/create'
      fullPath: '/project/stories/create'
      preLoaderRoute: typeof ProjectStoriesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/project/$projectId/story/$storyId': {
      id: '/project/$projectId/story/$storyId'
      path: '/project/$projectId/story/$storyId'
      fullPath: '/project/$projectId/story/$storyId'
      preLoaderRoute: typeof ProjectProjectIdStoryStoryIdImport
      parentRoute: typeof rootRoute
    }
    '/project/$projectId/story/create': {
      id: '/project/$projectId/story/create'
      path: '/project/$projectId/story/create'
      fullPath: '/project/$projectId/story/create'
      preLoaderRoute: typeof ProjectProjectIdStoryCreateImport
      parentRoute: typeof rootRoute
    }
    '/project/$projectId/story/task/$taskId': {
      id: '/project/$projectId/story/task/$taskId'
      path: '/project/$projectId/story/task/$taskId'
      fullPath: '/project/$projectId/story/task/$taskId'
      preLoaderRoute: typeof ProjectProjectIdStoryTaskTaskIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  AuthSignInLazyRoute,
  AuthSignUpLazyRoute,
  ProjectCreateLazyRoute,
  ProjectProjectIdViewRoute,
  ProjectStoriesCreateLazyRoute,
  ProjectProjectIdStoryStoryIdRoute,
  ProjectProjectIdStoryCreateRoute,
  ProjectProjectIdStoryTaskTaskIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/auth/signIn",
        "/auth/signUp",
        "/project/create",
        "/project/$projectId/view",
        "/project/stories/create",
        "/project/$projectId/story/$storyId",
        "/project/$projectId/story/create",
        "/project/$projectId/story/task/$taskId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/auth/signIn": {
      "filePath": "auth/signIn.lazy.tsx"
    },
    "/auth/signUp": {
      "filePath": "auth/signUp.lazy.tsx"
    },
    "/project/create": {
      "filePath": "project/create.lazy.tsx"
    },
    "/project/$projectId/view": {
      "filePath": "project/$projectId/view.tsx"
    },
    "/project/stories/create": {
      "filePath": "project/stories/create.lazy.tsx"
    },
    "/project/$projectId/story/$storyId": {
      "filePath": "project/$projectId/story/$storyId.tsx"
    },
    "/project/$projectId/story/create": {
      "filePath": "project/$projectId/story/create.tsx"
    },
    "/project/$projectId/story/task/$taskId": {
      "filePath": "project/$projectId/story/task/$taskId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
