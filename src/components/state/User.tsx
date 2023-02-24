import { stringify } from "querystring";
import { useState } from "react";

// LoggedIn 컴포넌트의 경우, 처음에 initial value를 알고 있기 때문에 type infer가 가능했으나
// 들어올 변수의 타입을 아직 모를 경우 직접 타입을 설정해줘야 함

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // initial state가 null이 아닐 경우에는 아래와 같이 as 키워드를 사용해주면 됨
  // const [user, setUser] = useState<AuthUser>({} as AuthUser});
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
    </div>
  );
};
