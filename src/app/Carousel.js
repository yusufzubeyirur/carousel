"use client";
import { useState } from "react";
import styles from "./Home.module.css";

const images = [
  { url: "https://picsum.photos/200/300?random=1", title: "Fotoğraf 1" },
  { url: "https://picsum.photos/200/300?random=2", title: "Fotoğraf 2" },
  { url: "https://picsum.photos/200/300?random=3", title: "Fotoğraf 3" },
  { url: "https://picsum.photos/200/300?random=4", title: "Fotoğraf 4" },
  { url: "https://picsum.photos/200/300?random=5", title: "Fotoğraf 5" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleButtonPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleButtonPrevious}>
        Önceki⬅️
      </button>
      <div className={styles.imageContainer}>
        <h2 className={styles.title}>CarouselPicture</h2>
        <img
          className={styles.image}
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
        />
      </div>
      <button className={styles.button} onClick={handleButtonNext}>
        Sonraki➡️
      </button>
    </div>
  );
};

export default Carousel;
