import { useState } from 'react';
import { Users } from '../props/common.types';

export const LoggedIn = () => {
  const [user, setUser] = useState<Users | null>(null)
  const handleLogin = () => {
    setUser({
        name:"jaylal sahoo",
        email:"abc@gmail.com"
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}