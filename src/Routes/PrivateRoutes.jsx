import { Navigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = userAuth();
console.log('PRIVATE => ', currentUser)


  if(!currentUser) {
    return <Navigate to="/" replace={true}  />
  }
  return children;
}