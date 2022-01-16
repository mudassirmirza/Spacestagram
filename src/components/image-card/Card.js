import { useState, useEffect, Suspense } from "react";
import { nanoid } from "nanoid";
import "./Card.scss";

export const Card = (props) => {
  const [imageInfo, setImageInfo] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [likeBtnText, setLikeBtnText] = useState("Like");
  const [imageClass, setImageClass] = useState("card__image");
  const [bodyStyle, setBodyStyle] = useState("");
  const [divClass, setDivClass] = useState("card__image-wrapper");

  useEffect(() => {
    setCurrentUrl(props.givenObject.url);
  }, []);

  useEffect(() => {
    setImageInfo(props.givenObject);
  }, [currentUrl]);

  const handleImageClick = () => {
    if (currentUrl === imageInfo.url) {
      setBodyStyle(window.getComputedStyle(document.body).overflow);
      document.body.style.overflow = "hidden";
      setImageClass(imageClass + "--clicked");
      setDivClass("card__image-wrapper--clicked");
      setCurrentUrl(imageInfo.hdurl);
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
      <article className="card" id={`card-${nanoid()}`}>
        <div className={divClass}>
          <img
            className={imageClass}
            src={currentUrl}
            onClick={imageInfo.media_type === "image" ? handleImageClick : null}
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

export default Card;
