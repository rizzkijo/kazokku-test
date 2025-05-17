import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/auth";
import { toast } from "sonner";
import { AxiosError } from "axios";
import type { LoginFormType } from "@/types/LoginFormType";

type APIErrorResponse = {
  message?: string;
};

const useUserToken = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = async (values: LoginFormType) => {
    setLoading(true);
    try {
      const data = await login(values.email, values.password);
      localStorage.setItem("aTkn", data.token);
      localStorage.setItem("aUsr", data.username);

      toast.success(`Welcome, ${data.username.split('@')[0]}!`);
      setLoggedIn(true);

      setTimeout(() => {
        navigate("/todos");
      }, 2000);
    } catch (err: unknown) {
      let errorMessage = "Incorrect Email or Password!";

      if (err instanceof AxiosError) {
        const axiosError = err as AxiosError<APIErrorResponse>;
        errorMessage = axiosError.response?.data?.message ?? errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return { loginUser, loggedIn, loading };
}

export default useUserToken;
