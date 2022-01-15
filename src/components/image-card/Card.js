import { useState, useEffect } from "react";
import { getImageByDate } from "../../services/Api";
import "./Card.scss";

export const Card = ({ date }) => {
  const [imageInfo, setImageInfo] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [likeBtnText, setLikeBtnText] = useState("Like");
  const [imageClass, setImageClass] = useState("card__image");
  const [bodyStyle, setBodyStyle] = useState("");
  const [divClass, setDivClass] = useState("card__image-wrapper");

  useEffect(() => {
    getImageByDate(date).then((imageData) => {
      setImageInfo(imageData);
      setCurrentUrl(imageData.url);
    });
  }, [date]);

  useEffect(() => {}, [currentUrl]);

  const handleImageClick = () => {
    if (currentUrl === imageInfo.url) {
      setBodyStyle(window.getComputedStyle(document.body).overflow);
      document.body.style.overflow = "hidden";
      setCurrentUrl(imageInfo.hdurl);
      setImageClass(imageClass + "--clicked");
      setDivClass("card__image-wrapper--clicked");
    } else {
      document.body.style.overflow = bodyStyle;
      setImageClass("card__image");
      setDivClass("");
      setCurrentUrl(imageInfo.url);
    }
  };

  const handleLikeButton = () => {
    if (likeBtnText === "Like") {
      setLikeBtnText("Unlike");
    } else {
      setLikeBtnText("Like");
    }
  };

  return (
    <>
      <article className="card">
        <div className={divClass}>
          <img
            className={imageClass}
            src={currentUrl}
            onClick={handleImageClick}
          />
        </div>
        <button className="card__like-button" onClick={handleLikeButton}>
          {likeBtnText}
        </button>
        <div className="card__text">
          <h2 className="card__text card__text-title">{imageInfo.title}</h2>
          <time className="card__text__date" dateTime={imageInfo.date}>
            {imageInfo.date}
          </time>
          <p className="card__text__explanation">{imageInfo.explanation}</p>
        </div>
      </article>
    </>
  );
};
