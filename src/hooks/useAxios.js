import axios from "axios";
import { useEffect } from "react";

export const useAxios = (pageData, dataDispatch) => {
  const DAYS_PER_PAGE = 15;
  const DAY_MS = 24 * 60 * 60 * 1000;

  const baseUrl = "https://api.nasa.gov/planetary/apod";

  useEffect(() => {
    // Use local midnight-adjusted "now" to account for timezone offset in ISO date
    const offset = new Date().getTimezoneOffset();
    const now = new Date(new Date().getTime() - offset * 60 * 1000);

    // Derive non-overlapping windows from page number
    // pageNum = 0 => most recent DAYS_PER_PAGE days
    const endDate = new Date(now.getTime() - pageData.pageNum * DAYS_PER_PAGE * DAY_MS);
    const startDate = new Date(endDate.getTime() - (DAYS_PER_PAGE - 1) * DAY_MS);

    const endParam = endDate.toISOString().split("T")[0];
    const startParam = startDate.toISOString().split("T")[0];

    dataDispatch({ type: "CALL", isCalling: true });

    axios
      .get(baseUrl, {
        params: {
          api_key: `${process.env.REACT_APP_API_KEY}`,
          start_date: startParam,
          end_date: endParam,
        },
      })
      .then((res) => (Array.isArray(res.data) ? res.data.reverse() : [res.data]))
      .then((data) => {
        dataDispatch({ type: "LOAD", data });
        dataDispatch({ type: "CALL", isCalling: false });
      })
      .catch((error) => {
        dataDispatch({ type: "CALL", isCalling: false });
        console.error(error);
      });
  }, [dataDispatch, pageData.pageNum]);
};
