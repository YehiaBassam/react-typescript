// useState
import { useState } from 'react'

type AuthUser = {
name: string
age: number
}

export const User = () => {
const [isAuth, setIsAuth] = useState<boolean>(false);
const [userData, setUserData] = useState<AuthUser | null>(null);

const handleLogin = () => {
  setIsAuth(!isAuth);
  setUserData({
    name: 'yehia',
    age: 30
  })
}

return (
<div>
  <button onClick={handleLogin}>{isAuth ? 'Logout' : 'Login'}</button>
  {
    isAuth && (
      <>
        <div>User name is {userData?.name}</div>
        <div>User age is {userData?.age}</div>
      </>
    )
  }
</div>
)
}