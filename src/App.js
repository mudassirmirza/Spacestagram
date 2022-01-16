import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
import { Header } from "./components/header/header.js";
import { Card } from "./components/image-card/Card.js";
import { getImageByDate, getImagesByDates } from "./services/Api.js";
import { nanoid } from "nanoid";
function App() {
  const [cardDates, setCardDates] = useState([]);
  const [isGetting, setIsGetting] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);

  useEffect(() => {
    let tempStart = startDate.getTime();
    tempStart -= 10 * 86400000;
    setStartDate(new Date(tempStart));
    window.addEventListener("scroll", handleScroll);
    getImages();
    setIsInitialLoaded((curr) => !curr);
  }, []);

  useEffect(() => {
    setIsInitialLoaded((curr) => !curr);
  }, [isInitialLoaded]);

  useEffect(() => {}, [startDate]);
  useEffect(() => {
    if (!isGetting || isInitialLoaded) return;
    getMoreImages();
  }, [isGetting]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isGetting
    )
      return;
    setIsGetting(true);
  };
  const getImages = () => {
    var newEnd = `${endDate.getFullYear()}-${
      endDate.getMonth() + 1
    }-${endDate.getDate()}`;
    var newStart = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`;

    getImagesByDates(newStart, newEnd).then((images) => {
      setCardDates(images);
      changeDates();
    });
  };
  const getMoreImages = () => {
    getImages();
    setIsGetting(false);
  };

  const changeDates = () => {
    let tempStart = startDate.getTime();
    tempStart -= 10 * 86400000;
    setStartDate(new Date(tempStart));
    if (isInitialLoaded) {
      let tempEnd = startDate.getTime();
      tempEnd -= 86400000;
      setEndDate(new Date(tempEnd));
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="app__card-list">
        {cardDates?.map((givenObject) => (
          <Suspense key={"card-key-" + nanoid()} fallback={<h1>loading</h1>}>
            <Card
              // date={givenDate}
              givenObject={givenObject}
            />
          </Suspense>
        ))}
      </div>
      {isGetting && <h1> LOADING...</h1>}
    </div>
  );
}
export default App;
