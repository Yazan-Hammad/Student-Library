import Link from "../Link";
import Logo from "../../images/logo.png";

function LoginContent({setEmail, setPassword, submit}) {
	return (
    <>
      <div className="content">
        <img src={Logo} alt="Logo" className="logo" />
        <p>
          Connect with your classmates and the Universities around you on
          <span>StudentsLibrary</span>
        </p>
      </div>
      <div className="login-section">
        <form action="" method="post">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name=""
            placeholder="Email"
          ></input>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name=""
            placeholder="Password"
          ></input>
          <input type="submit" onClick={submit}></input>
        </form>
        <Link to="/signup">Signup</Link>
        <Link to="/resetpassword">forget your password?</Link>
      </div>
    </>
  );
}

export default LoginContent