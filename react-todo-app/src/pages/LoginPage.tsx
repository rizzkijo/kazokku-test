import { useForm } from 'react-hook-form'

import useUserToken from '@/hooks/getUserToken'
import { useFooterCopyText } from '@/stores/themeStore'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { LogIn } from 'lucide-react'
import logo from '@/assets/logo.svg'

import type { LoginFormType } from '@/types/LoginFormType'
import ButtonToggleTheme from '@/components/ButtonToggleTheme'

const LoginPage = () => {
  const { loginUser, loggedIn, loading } = useUserToken();
  const { footerCopyText } = useFooterCopyText();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>();

  const btnLoginLabel =
    (!loggedIn && isSubmitting) || (!loggedIn && loading)
      ? "Signing In..."
      : (loggedIn && !loading) || (loggedIn && !isSubmitting)
      ? "Signed In"
      : "Sign In";

  return (
    <section className="w-full max-w-lg px-6">
      <img
        src={logo}
        className="h-[40px] mb-10"
      />
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.2]">Welcome Back!</h2>
        <p className="text-gray-600 dark:text-gray-400">Hey, what's next on the list?</p>
      </div>

      <form onSubmit={handleSubmit(loginUser)} className="space-y-4">
        <div>
          <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
          <Input
            id="email"
            type="email"
            disabled={loading}
            placeholder="adx-01@mail.com"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email format is invalid!",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password" className="block text-sm font-medium mb-1">Password</Label>
          <Input
            id="password"
            type="password"
            isPassword
            disabled={loading}
            placeholder="1234567890"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="w-full flex items-center space-x-2 mt-9">
          <Button
            type="submit"
            size="lg"
            className="w-full font-medium flex-1/2"
            disabled={loading}
          >
            <LogIn />
            {btnLoginLabel}
          </Button>

          <div className="flex-1/2">
            <ButtonToggleTheme
              wrapperClassName="justify-end"
            />
          </div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">{footerCopyText}</p>
      </form>
    </section>
  )
}

export default LoginPage;
