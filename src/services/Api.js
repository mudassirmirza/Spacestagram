import axios from "axios";

export const getImageByDate = async (date) => {
  try {
    var response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getImagesByDates = async (start, end) => {
  try {
    var response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${start}&end_date=${end}`
    );
    return response.data.reverse();
  } catch (error) {
    console.error(error);
  }
};
