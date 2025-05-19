import { useRouter } from "vue-router"

export const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("aTkn")
    localStorage.removeItem("aUsr")
    router.push("/")
  }

  return logout
}
