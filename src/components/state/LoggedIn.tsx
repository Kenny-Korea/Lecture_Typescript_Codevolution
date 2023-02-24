import { useState } from "react";

// 타입을 하나도 지정해줄 필요가 없음..
// --> type inference 덕분 (똑또케)

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    // setIsLoggedIn(0); boolean으로 type inference 되었기 때문에 number가 들어가면 error
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
