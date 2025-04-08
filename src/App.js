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
      <div className="card-box-profile">
        <div className="card-profile a">
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
          <button onClick={() => handleClick("Daily")}>Daily</button>
          <button onClick={() => handleClick("Weekly")}>Weekly</button>
          <button onClick={() => handleClick("Monthly")}>Monthly</button>
        </div>
      </div>

      <div className="card-box b ">
        <img
          className="card-box-image"
          src={process.env.PUBLIC_URL + "/images/icon-work.svg"}
          alt=""
        />
        <div className="card-inner">
          <div className="card-theme">
            <p>Work</p>
            <img
              className="card-theme-image"
              src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
              alt=""
            />
          </div>
          <div className="card-time">
            <p>{content[activeTimeline][0]}</p>
            <span>
              {period} - {content[previousTimeline][0]}
            </span>
          </div>
        </div>
      </div>

      <div className="card-box c ">
        <div className="card-inner">
          <div className="card-theme">
            <p>Play</p>
            <img
              className="card-theme-image"
              src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
              alt=""
            />
          </div>
          <div className="card-time">
            <p>{content[activeTimeline][1]}</p>
            <span>
              {period} - {content[previousTimeline][1]}
            </span>
          </div>
        </div>
      </div>

      <div className="card-box d">
        <div className="card-inner">
          <div className="card-theme">
            <p>Study</p>
            <img
              className="card-theme-image"
              src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
              alt=""
            />
          </div>
          <div className="card-time">
            <p>{content[activeTimeline][2]}</p>
            <span>
              {period} - {content[previousTimeline][2]}
            </span>
          </div>
        </div>
      </div>

      <div className="card-box e">
        <div className="card-inner">
          <div className="card-theme">
            <p>Exercise</p>
            <img
              className="card-theme-image"
              src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
              alt=""
            />
          </div>
          <div className="card-time">
            <p>{content[activeTimeline][3]}</p>
            <span>
              {period} - {content[previousTimeline][3]}
            </span>
          </div>
        </div>
      </div>

      <div className="card-box f">
        <div className="card-inner">
          <div className="card-theme">
            <p>Social</p>
            <img
              className="card-theme-image"
              src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
              alt=""
            />
          </div>
          <div className="card-time">
            <p>{content[activeTimeline][4]}</p>
            <span>
              {period} - {content[previousTimeline][4]}
            </span>
          </div>
        </div>
      </div>

      <div className="card-box g">
        <div className="card-inner">
          <div className="card-theme">
            <p>Self care</p>
            <img
              className="card-theme-image"
              src={process.env.PUBLIC_URL + "/images/icon-ellipsis.svg"}
              alt=""
            />
          </div>
          <div className="card-time">
            <p>{content[activeTimeline][5]}</p>
            <span>
              {period} - {content[previousTimeline][5]}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
