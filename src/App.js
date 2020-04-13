//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  const [seconds, setSeconds] = useState(59);
  const [minute, setMinute] = useState(14);

  useEffect(
    () => {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      if (seconds < 1 && minute > 0) {
        setSeconds(59);
        setMinute(minute - 1);
      } else if (minute < 1 && seconds < 1) {
        setMinute(14);
      }
    },
    [seconds],
    [minute]
  );

  // useEffect(() => {
  //   if (seconds < 1) {
  //     setMinute(minute - 1);
  //   } else if (minute < 1 && seconds < 1) {
  //     setMinute((minute += 15));
  //   }
  // }, [seconds][minute]);

  // useEffect(() => {
  //   minute > 0 && setTimeout(() => setMinute(minute - 1), 60000);
  // }, [minute]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{home}</div>
          </div>
          <div className="timer">
            {minute}:{seconds}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={(event) => {
              setHome(home + 7);
            }}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={(event) => {
              setHome(home + 3);
            }}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={(event) => {
              setAway(away + 7);
            }}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={(event) => {
              setAway(away + 3);
            }}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>

          {/* <button onClick={Quarter} className="awayButtons__fieldGoal">
            {" "}
            Quarter{" "}
          </button> */}
        </div>
      </section>
    </div>
  );
}

export default App;
