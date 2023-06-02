import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Test from './test';

export const routes: RouteObject[] = [
  {
    path: '/',
    // lazy加载的test就会有问题
    Component: lazy(() => import('./test')),
    // 换成下面普通的组件test不会有问题
    // Component: Test,
  },
];

const router = createBrowserRouter(routes);

export default router;
