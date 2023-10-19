import { useContext } from "react";
import { AppContext } from "../AppContextProvider/AppContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AppContext);

  if (loading) {
    return <div className="h-[70vh] w-full flex item-center justify-center">
      <span className="loading loading-infinity loading-lg text-3xl"></span>
    </div>
  } else if (user) {
    return children
  } else {
    return <Navigate to='/signUp'></Navigate>
  }
}

export default PrivateRouter;