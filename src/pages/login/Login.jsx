import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main className="login_main_container">
      <div className="body_wrapper">
        <div className="welcome_con">
          <h1>Welcome to Zn Food Service</h1>
          <p>Join us today and let&apos;s satisfy your hunger together!</p>
        </div>
        <div className="login_box">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
