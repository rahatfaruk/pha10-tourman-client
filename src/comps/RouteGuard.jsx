import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Loading from "./Loading";

function RouteGuard({children}) {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <Loading />
  }
  else if (user) {
    return <>{children}</>
  }
  else {
    return <Navigate to={'/signin'} state={location.pathname}/>
  }
}

export default RouteGuard;