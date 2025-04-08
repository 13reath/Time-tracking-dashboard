import React, { useState } from "react";
import "./index.css";

const content = {
  Daily_active: ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"],
  Daily_previous: ["7hrs", "2hrs", "1hr", "1hr", "3hrs", "1hr"],

  Weekly_active: ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"],
  Weekly_previous: ["36hrs", "8hrs", "7hrs", "5hrs", "10hrs", "2hrs"],

  Monthly_active: ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"],
  Monthly_previous: ["128hrs", "29hrs", "19hrs", "18hrs", "23hrs", "11hrs"],
};

const titles = ["Work", "Play", "Study", "Exercise", "Social", "Self care"];

function App() {
  const [activeTimeline, setActiveTimeline] = useState("Daily_active");
  const [previousTimeline, setPreviousTimeline] = useState("Daily_previous");
  const [period, setPeriod] = useState("Yesterday");

  const handleClick = (timeline) => {
    setActiveTimeline(timeline + "_active");
    setPreviousTimeline(timeline + "_previous");

    setPeriod(
      timeline === "Daily"
        ? "Yesterday"
        : timeline === "Weekly"
        ? "Last Week"
        : timeline === "Monthly"
        ? "Last Month"
        : ""
    );
  };

  return (
    <main className="cards-deck">
      <CardProfile onClick={handleClick} />
      {titles.map((title, index) => (
        <Card
          key={title}
          title={title}
          index={index}
          current={activeTimeline}
          previous={previousTimeline}
          period={period}
        />
      ))}
    </main>
  );
}

function Card({ title, index, current, previous, period }) {
  return (
    <div className={`card-box card-${index}`}>
      <img
        className="card-box-image"
        src={process.env.PUBLIC_URL + `/images/icon-${title.toLowerCase()}.svg`}
        alt=""
      />
      <div className="card-inner">
        <div className="card-theme">
          <p>{title}</p>
          <img
            className="card-theme-image"
            src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
            alt=""
          />
        </div>
        <div className="card-time">
          <p>{content[current][index]}</p>
          <span>
            {period} - {content[previous][index]}
          </span>
        </div>
      </div>
    </div>
  );
}

function CardProfile({ onClick }) {
  return (
    <div className="card-box-profile card-x">
      <div className="card-profile">
        <img
          className="card-profile-avatar"
          src={process.env.PUBLIC_URL + "/images/image-jeremy.png"}
          alt="avatar"
        />

        <div className="card-profile-info">
          <span>Report for</span>
          <p>Jeremy Robson</p>
        </div>
      </div>

      <div className="card-profile-buttons">
        <button onClick={() => onClick("Daily")}>Daily</button>
        <button onClick={() => onClick("Weekly")}>Weekly</button>
        <button onClick={() => onClick("Monthly")}>Monthly</button>
      </div>
    </div>
  );
}

export default App;
