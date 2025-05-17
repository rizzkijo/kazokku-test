import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => !!localStorage.getItem("aTkn");

const PublicRoute = () => {
  return isAuthenticated() ? <Navigate to="/todos" replace /> : <Outlet />;
};

export default PublicRoute;
