import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

const FetchApi = () => {
  const [data, setData] = useState({});

  const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
  const nasaApiKey = process.env.REACT_APP_SECRET_KEY;

  //const url = `${process.env.REACT_APP_NASA_ENDPOINT}?api_key=${process.env.REACT_APP_SECRET_KEY}`;
  const url = "https://api.nasa.gov/planetary/apod"+"?api_key=" + "dEx6y4xp6c7vdggZFdiHxUTRdhZo8coglQ2yWoNy"

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <DisplayData data={data} />;
};

export default FetchApi;
