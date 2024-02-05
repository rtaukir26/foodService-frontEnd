import emailIcon from "../../assets/images/mail.png";
import pwdIcon from "../../assets/images/padlock.png";

const LoginForm = () => {
  return (
    <>
      {/* <p>Please login</p> */}
      <form action="">
        <div className="inputGroup ">
          <input type="email" placeholder="Enter email" />
          <img id="emailIcon" src={emailIcon} alt="email" />
        </div>
        <div className="inputGroup input_password">
          <input type="email" placeholder="Enter email" />
          <img id="pwdIcon" src={pwdIcon} alt="email" />
        </div>
        <span>
          <small>Forgot password ?</small>
          <small>Sign up</small>
        </span>

        <button className="registerBtn" type="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
