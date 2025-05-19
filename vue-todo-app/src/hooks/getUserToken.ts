import { ref } from "vue"
import { useRouter } from "vue-router"
import { login } from "@/services/auth"
import { toast } from "vue-sonner"
import { AxiosError } from "axios"
import type { LoginFormType } from "@/types/LoginFormType"

type APIErrorResponse = {
  message?: string
}

export const useUserToken = () => {
  const router = useRouter()
  const loading = ref(false)
  const loggedIn = ref(false)

  const loginUser = async (values: LoginFormType) => {
    loading.value = true
    try {
      const data = await login(values.email, values.password)
      localStorage.setItem("aTkn", data.token)
      localStorage.setItem("aUsr", data.username)

      toast.success(`Welcome, ${data.username.split("@")[0]}!`)
      loggedIn.value = true

      setTimeout(() => {
        router.push("/todos")
      }, 2000)
    } catch (err: unknown) {
      let errorMessage = "Incorrect Email or Password!"

      if (err instanceof AxiosError) {
        const axiosError = err as AxiosError<APIErrorResponse>
        errorMessage = axiosError.response?.data?.message ?? errorMessage
      }

      toast.error(errorMessage)
    } finally {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    }
  }

  return {
    loginUser,
    loggedIn,
    loading,
  }
}
