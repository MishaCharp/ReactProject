import { useContext } from "react";
import { UserContext } from "../../UserProvider/UserProvider.jsx";

export const UserInfo = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};