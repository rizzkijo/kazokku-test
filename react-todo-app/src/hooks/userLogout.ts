import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("aTkn");
    localStorage.removeItem("aUsr");
    navigate("/");
  };

  return logout;
};
