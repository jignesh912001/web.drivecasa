import { Navigate, useRoutes } from 'react-router-dom';
import { PATH_BEFORE_LOGIN } from 'src/config-global';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
// import { componentsRoutes } from './components';
import { mainRoutes } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    {
      path: '/',
      element: <Navigate to={PATH_BEFORE_LOGIN} replace />,
    },


    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,   // used 404 error show

    // Components routes
    // ...componentsRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
