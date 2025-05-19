import API from "./api"

export const login = async (user_name: string, user_password: string) => {
  const res = await API.post("/users/login", {
    user_name,
    user_password,
  })
  return res.data
}
