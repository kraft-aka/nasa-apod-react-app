import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

const FetchApi = () => {
  const [data, setData] = useState({});

  const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
  const nasaApiKey = process.env.REACT_APP_SECRET_KEY;

  const url = `${nasaEndpoint}?api_key=${nasaApiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <DisplayData data={data} />;
};

export default FetchApi;
