import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./HotelsPage.module.scss";
import SearchForm from "../../components/SearchForm";
import Header from "../../components/Header/Header";
import Favorites from "../../components/Favorites";
import HotelsList from "../../components/HotelsList/HotelsList";

function HotelsPage() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  if (!isLogin) {
    return null;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <SearchForm />
          <Favorites />
        </div>
        <HotelsList />
      </div>
    </>
  );
}

export default HotelsPage;
