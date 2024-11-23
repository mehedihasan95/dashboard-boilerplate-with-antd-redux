import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/store";
import Loader from "../common/Loader/Loader";
import { AuthState } from "../app/slice/authSlice";
import { useGetProfileQuery } from "../modules/SystemConfig/Profile/api/profileEndpoint";

interface Props {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<Props> = ({ children }) => {
  const { token } = useAppSelector(AuthState);
  const { isLoading, isSuccess } = useGetProfileQuery(undefined, {
    skip: !token,
  });
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  } else if (isSuccess && token) {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
