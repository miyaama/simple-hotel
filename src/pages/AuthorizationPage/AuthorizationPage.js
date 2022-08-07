import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./AuthorizationPage.module.scss";
import AuthForm from "../../components/AuthForm";

function AuthorizationPage() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (isLogin) {
      navigate("/hotels");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <div className={styles.container}></div>
      <AuthForm />
    </>
  );
}

export default AuthorizationPage;
