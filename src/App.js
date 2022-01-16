import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/header/header.js";
import { Card } from "./components/image-card/Card.js";
function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [cardDates, setCardDates] = useState([]);
  const [numLoaded, setNumLoaded] = useState(0);
  const [numImages, setNumImages] = useState(2);

  useEffect(() => {
    setCardDates([
      ...cardDates,
      `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`,
    ]);
    setNumLoaded((currNum) => currNum + 1);
  }, [currentDate]);

  useEffect(() => {
    if (numLoaded < numImages) {
      let tempDate = currentDate.getTime();
      tempDate -= 86400000;
      setCurrentDate(new Date(tempDate));
      console.log("tempdate: " + currentDate.getDate());
    }
  }, [numLoaded]);

  return (
    <div className="app">
      <Header />
      <div className="app__card-list">
        {cardDates?.map((givenDate) => (
          <Card date={givenDate} key={"card-key-" + givenDate} />
        ))}
      </div>
    </div>
  );
}
export default App;
