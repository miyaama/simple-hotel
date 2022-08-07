import { useSelector } from "react-redux";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  const images = useSelector((state) => state.hotels.images);

  return (
    <div className={styles.container}>
      {images.map(({ url, id }) => (
        <img src={url} alt="hotel" key={id} />
      ))}
    </div>
  );
};

export default Carousel;
