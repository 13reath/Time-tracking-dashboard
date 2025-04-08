import "./index.css";

function App() {
  return (
    <main className="cards-deck">
      <div className="card-box-profile">
        <div className="card-profile a">
          <img
            className="avatar"
            src={process.env.PUBLIC_URL + "/images/image-jeremy.png"}
            alt="avatar"
          />
          <div className="card-profile-info">
            <span>Report for</span>
            <p>Jeremy Robson</p>
          </div>
        </div>
        <span>Daily</span>
        <span>Weekly</span>
        <span>Monthly</span>
      </div>
      <div className="card-box b ">
        <div className="card ">Card B - Inner</div>
      </div>
      <div className="card-box c ">
        <div className="card ">Card C - Inner</div>
      </div>
      <div className="card-box d">
        <div className="card ">Card D - Inner</div>
      </div>
      <div className="card-box e">
        <div className="card  ">Card E - Inner</div>
      </div>
      <div className="card-box f">
        <div className="card ">Card F - Inner</div>
      </div>
      <div className="card-box g">
        <div className="card ">Card G - Inner</div>
      </div>
    </main>
  );
}

export default App;

// Report for
//   Jeremy Robson

//   Daily
//   Weekly
//   Monthly

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
