import { useState } from "react"
import AuthenticationButton from "../../Components/AuthenticationButton"
import Auth0ProviderWithHistory from "../../AuthFolder/AuthProvider"
import UserName from "../../Components/UserName"
export default function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>

      </div>
      <AuthenticationButton />
    </div>
  )
}