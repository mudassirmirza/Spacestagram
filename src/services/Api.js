import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (pageData, dataDispatch) => {
  const offset = new Date().getTimezoneOffset();
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getTime() - offset * 60 * 1000)
  );

  const baseUrl = "https://api.nasa.gov/planetary/apod?";
  useEffect(() => {
    let endParam = currentDate.toISOString().split("T")[0];
    let startParam = new Date(currentDate.getTime() - 20 * 84000000)
      .toISOString()
      .split("T")[0];
    setCurrentDate(new Date(currentDate.getTime() - 20 * 84000000));
    dataDispatch({ type: "CALL", isCalling: true });
    axios
      .get(`${baseUrl}`, {
        params: {
          api_key: `${process.env.REACT_APP_API_KEY}`,
          start_date: startParam,
          end_date: endParam,
        },
      })
      .then((pageData) => pageData.data.reverse())
      .then((data) => {
        dataDispatch({ type: "LOAD", data });
        dataDispatch({ type: "CALL", isCalling: false });
      })
      .catch(function (error) {
        dataDispatch({ type: "CALL", isCalling: false });
        console.error(error);
      });
  }, [dataDispatch, pageData.pageNum]);
};
