import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element, isLoggedIn, ...rest }) {
  const isLogrRoute = rest.path === '/Logr';
  
  return (
    <Route
      {...rest}
      element={isLogrRoute || isLoggedIn ? element : <Navigate to="/Logr" replace />}
    />
  );
}

export default PrivateRoute;
