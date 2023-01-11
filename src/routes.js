import { Navigate, useRoutes } from 'react-router-dom';
// layouts
//
import Persons from './components/Persons';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <Persons />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'persons', element: <Persons /> },
      ],
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
