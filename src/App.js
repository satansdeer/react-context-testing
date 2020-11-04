import logo from "./logo.svg";
import "./App.css";
import { useAuthContext } from "./AuthProvider";

function App() {
  const { authed, login, logout } = useAuthContext();

  return (
    <>
      <h1>{authed ? "You are logged in" : "You are logged out"}</h1>
      {authed ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <button onClick={login}>Log in</button>
      )}
    </>
  );
}

export default App;
