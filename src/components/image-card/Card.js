import { useState, useEffect } from "react";
import { getImageByDate } from "../../services/Api";
import "./Card.scss";

export const Card = (props) => {
  const [imageInfo, setImageInfo] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [likeBtnText, setLikeBtnText] = useState("Like");
  const [imageClass, setImageClass] = useState("card__image");

  useEffect(() => {
    getImageByDate(props.date).then((imageData) => {
      setImageInfo(imageData);
      setCurrentUrl(imageData.url);
    });
  }, [props]);

  const handleQualityButton = () => {
    if (currentUrl === imageInfo.url) {
      setImageClass("card__image--clicked");
      setCurrentUrl(imageInfo.hdurl);
    } else {
      setImageClass("card__image");
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
        <img
          className={imageClass}
          src={currentUrl}
          onClick={handleQualityButton}
        />
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
