import { useMemo } from "react";
import Login from "../Pages/Login/LoginPage/LoginPage";
import Signup from "../Pages/Signup/SignupPage/SignupPage";

export const useRoutes = () => {
  const Routes = useMemo(
    () => [
      {
        id: "login_page",
        path: "/login",
        name: "Login",
        element: <Login />,
        hasPlainLayout: true,
      },
      {
        id: "register_page",
        path: "/signup",
        name: "Signup",
        element: <Signup />,
        hasPlainLayout: true,
      },
    ],
    []
  );

  const plainLayoutRoutes = useMemo(() => {
    return Routes.filter((value) => value.hasPlainLayout);
  }, []);

  return {
    plainLayoutRoutes,
    allRoutes: Routes,
  };
};
