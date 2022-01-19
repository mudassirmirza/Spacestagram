import { useState, useEffect } from "react";
import "./Card.scss";

export const Card = (props) => {
  const [imageInfo, setImageInfo] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [likeBtnText, setLikeBtnText] = useState("Like");
  const [isHd, setIsHd] = useState(true);
  const [imageClass, setImageClass] = useState("card__image");
  const [bodyStyle, setBodyStyle] = useState("");
  const [divClass, setDivClass] = useState("card__image-wrapper");

  useEffect(() => {
    setImageInfo(props.givenObject);
  }, [props]);

  useEffect(() => {
    setCurrentUrl(imageInfo.url);
  }, [imageInfo]);

  useEffect(() => {
    if (!isHd) {
      setBodyStyle(window.getComputedStyle(document.body).overflow);
      document.body.style.overflow = "hidden";
      setImageClass("card__image--clicked");
      setDivClass("card__image-wrapper--clicked");
      setCurrentUrl(imageInfo.hdurl);
    } else {
      document.body.style.overflow = bodyStyle;
      setImageClass("card__image");
      setDivClass("");
      setCurrentUrl(imageInfo.url);
    }
  }, [isHd]);

  const handleImageClick = () => {
    setIsHd((curr) => !curr);
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
        <h2 className="card__title">{imageInfo.title}</h2>
        <div className={divClass}>
          {imageInfo.media_type === "image" ? (
            <img
              className={imageClass}
              src={currentUrl}
              onClick={handleImageClick}
              alt={imageInfo.title}
            />
          ) : (
            <iframe
              className="card__iframe"
              title={imageInfo.title}
              src={currentUrl}
              allowFullScreen
            ></iframe>
          )}
        </div>
        <button className="card__like-button" onClick={handleLikeButton}>
          {likeBtnText}
        </button>
        <p className="card__explanation">{imageInfo.explanation}</p>
        <div className="card__date">
          <time className="card__date-time" dateTime={imageInfo.date}>
            {imageInfo.date}
          </time>
        </div>
      </article>
    </>
  );
};

export default Card;
