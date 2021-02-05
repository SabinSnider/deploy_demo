import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../config";

function NowPlayingDetails({ match }) {
  const [playingNow, setPlayingNow] = React.useState([]);

  React.useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const res = await axios.get(`${BASE_URL}/movie/${match.params.id}`, {
      params: { api_key: API_KEY },
    });
    console.log(res);

    setPlayingNow(res.data);
  };
  if (!playingNow) {
    return <p>Loading.</p>;
  }

  return (
    <div>
      <h1> Items detail</h1>
      <div>
        <h1>{playingNow.id}</h1>
      </div>
    </div>
  );
}

export default NowPlayingDetails;
