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

//   Work
//   5hrs <!-- daily -->
//   Previous - 7hrs <!-- daily -->
//   32hrs <!-- weekly -->
//   Previous - 36hrs <!-- weekly -->
//   103hrs <!-- monthly -->
//   Previous - 128hrs <!-- monthly -->

//   Play
//   1hr <!-- daily -->
//   Previous - 2hrs <!-- daily -->
//   10hrs <!-- weekly -->
//   Previous - 8hrs <!-- weekly -->
//   23hrs <!-- monthly -->
//   Previous - 29hrs <!-- monthly -->

//   Study
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 7hrs <!-- weekly -->
//   13hrs <!-- monthly -->
//   Previous - 19hrs <!-- monthly -->

//   Exercise
//   1hr <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 5hrs <!-- weekly -->
//   11hrs <!-- monthly -->
//   Previous - 18hrs <!-- monthly -->

//   Social
//   1hr <!-- daily -->
//   Previous - 3hrs <!-- daily -->
//   5hrs <!-- weekly -->
//   Previous - 10hrs <!-- weekly -->
//   21hrs <!-- monthly -->
//   Previous - 23hrs <!-- monthly -->

//   Self Care
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   2hrs <!-- weekly -->
//   Previous - 2hrs <!-- weekly -->
//   7hrs <!-- monthly -->
//   Previous - 11hrs <!-- monthly -->

function App() {
  const [activeTimeline, setActiveTimeline] = useState("Daily_active");
  const [previousTimeline, setPreviousTimeline] = useState("Daily_previous");

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
          <button
            onClick={() => {
              setActiveTimeline("Daily_active");
              setPreviousTimeline("Daily_previous");
            }}
          >
            Daily
          </button>
          <button
            onClick={() => {
              setActiveTimeline("Weekly_active");
              setPreviousTimeline("Weekly_previous");
            }}
          >
            Weekly
          </button>
          <button
            onClick={() => {
              setActiveTimeline("Monthly_active");
              setPreviousTimeline("Monthly_previous");
            }}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="card-box b ">
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
            <span>Yesterday - {content[previousTimeline][0]}</span>
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
            <span>Yesterday - {content[previousTimeline][1]}</span>
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
            <span>Yesterday - {content[previousTimeline][2]}</span>
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
            <span>Yesterday - {content[previousTimeline][3]}</span>
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
            <span>Yesterday - {content[previousTimeline][4]}</span>
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
            <span>Yesterday - {content[previousTimeline][5]}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
