import React, { useState, useEffect } from "react";
import { SectionStyled } from "../styles/Main.styled";
import { Line } from "react-chartjs-2";
import {
  LiveContainerStyled,
  GraphContainerStyled,
} from "../styles/LiveGraph.styled";
import moment from "moment";

const LiveGraphPage = () => {
  const [price, setPrice] = useState([]);
  const [time, setTime] = useState([]);

  const data = {
    labels: time,
    datasets: [
      {
        label: "Bitcoin",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: price,
      },
    ],
  };

  useEffect(() => {
    console.log("start connection");
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    ws.onopen = () => {
      console.log("connection is ON");
      ws.send(
        JSON.stringify({
          ticks_history: "cryBTCUSD",
          adjust_start_time: 1,
          count: 10,
          end: "latest",
          start: 1,
          style: "ticks",
        })
      );
      ws.send(
        JSON.stringify({
          ticks: "cryBTCUSD",
        })
      );
    };

    ws.onmessage = (evt) => {
      var data = JSON.parse(evt.data);
      console.log("got msg from deriv ", data);

      if (data.tick != null) {
        var tickInfo = data.tick;
        var date = moment(tickInfo.epoch).format("LTS");
        var price = tickInfo.quote;
        setTime((currentTime) => [...currentTime, date]);
        setPrice((currentPrice) => [...currentPrice, price]);
        console.log("pricee ", price);
      }
    };

    return () => {
      console.log("closing connection");
      ws.close();
    };
  }, []);

  return (
    <SectionStyled>
      <h1>Live Graph</h1>
      <LiveContainerStyled>
        <GraphContainerStyled>
          <Line data={data} />
        </GraphContainerStyled>
        <div>
          <p>img</p>
          <p>name</p>
          <p>symbol</p>
          <p> BTC Price: {price.slice(-1)}</p>
        </div>
      </LiveContainerStyled>
    </SectionStyled>
  );
};

export default LiveGraphPage;
