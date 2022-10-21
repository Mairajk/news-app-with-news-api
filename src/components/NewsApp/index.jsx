import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTopic, setSearchTopic] = useState([]);
  const [isLoading, setLoading] = useState([]);

  const getSearchNews = (e) => {
    e.preventDefault();

    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: searchTopic,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "f04c782149msh43af711d4b74938p16b0d2jsnc68594e23092",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNewsData(response.data.value);
        console.log("newsData : ", newsData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="newsApp">
      <form action="" onSubmit={getSearchNews}>
        <input
          type="text"
          onInput={(e) => {
            setSearchTopic(e.target.value);
          }}
        />

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default NewsApp;
