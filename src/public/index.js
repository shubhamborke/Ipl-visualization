function MatchesPlayedPerYear() {         // Matches played per year data
  try {
    fetch("./matchesPerYear.json")
      .then((response) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        return response.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }
        Highcharts.chart("matchesPlayedPerYear", {
          chart: {
            type: "bar",
          },
          title: {
            text: "Matches Played Per Year",
          },
          xAxis: {
            categories: keys,
          },
          series: [
            {
              name: "Matches-Played-Per-Yers-Chart",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}




function bestEconomyPlayers() {             // Best economy players data
  try {
    fetch("./bestEconomyPlayers.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("bestEconomyPlayers", {
          chart: {
            type: "column",
          },
          title: {
            text: "Best Economy Players",
          },
          xAxis: {
            categories: keys,
          },
          series: [
            {
              name: "Best-Economy-Of-Players",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}




function extraRunIn2016() {             // Extra runs in year 2016 per team data
  try {
    fetch("./extraRunIn2016.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("extraRunsIn2016", {
          chart: {
            type: "column",
          },
          title: {
            text: "Extra Runs In 2016",
          },
          xAxis: {
            categories: keys,
          },
          series: [
            {
              name: "Extra-Runs-In-2016",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}



function mostMatchesAwards() {            // Most awards winning teams data
  try {
    fetch("./mostMatchAward.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let names = [];
        let values = [];
        for (let key in data) {
          names.push(data[key]);
          values.push([data[key] + " " + key, Number(key)]);
        }

        Highcharts.chart("mostMatchAwards", {
          chart: {
            type: "pie",
          },
          title: {
            text: "Most Matches Awards",
          },
          xAxis: {
            categories: names,
          },
          series: [
            {
              name: "Most-Matches-Awards",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}




function top10EconomicBowler() {          // Top 10 econmy of bowlers by sorted economy data
  try {
    fetch("./top10EconomiBowler.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("top10EconomicBowler", {
          chart: {
            type: "column",
          },
          title: {
            text: "Top Ten Economic Bowler",
          },
          xAxis: {
            categories: keys,
          },
          series: [
            {
              name: "Top-Ten-Economic-Bowler",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}




function tossAndMatchWinner() {       // Toss and matches win by same team data
  try {
    fetch("./tossAndMachesWinner.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let keys = [];
        let values = [];
        for (let key in data) {
          keys.push(key);
          values.push(data[key]);
        }

        Highcharts.chart("tossAndMachesWinner", {
          chart: {
            type: "column",
          },
          title: {
            text: "Toss And Match Winner",
          },
          xAxis: {
            categories: keys,
          },
          series: [
            {
              name: "Toss-And-Match-Winner",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}



function dismissalPlayer() {        // Dismissal player by bowler count data
  try {
    fetch("./dismissalPlayer.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let values = [];
        for (let key in data) {
          for (let valKey in data[key]) {
            values.push([
              `${key} ${valKey} ${data[key][valKey]}`,
              data[key][valKey],
            ]);
          }
        }

        Highcharts.chart("dismissalPlayer", {
          chart: {
            type: "pie",
          },
          title: {
            text: "Dismissal Player",
          },
          series: [
            {
              name: "Dismissal-Player",
              data: values,
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}



function matchesWonPerYear() {          // Matches won by per team
  try {
    fetch("./matchesWonPerYear.json")
      .then((resolve) => {
        if (typeof response === undefined) {
          throw new Error("Responce error");
        }
        resolve.json();
      })
      .then((data) => {
        if (typeof data === undefined) {
          throw new Error("Responce error");
        }
        let keys = [];
        let values = [];
        let seasons = [];
        for (let key in data) {
          keys.push(key);
          let indexval = [];
          for (let valKey in data[key]) {
            indexval.push(data[key][valKey]);
            if (!seasons.includes(valKey)) {
              seasons.push(valKey);
            }
          }
          values.push([key, indexval]);
        }

        Highcharts.chart("matchesWonPerYear", {
          chart: {
            type: "column",
          },
          title: {
            text: "Matches Won Per Year",
          },
          xAxis: {
            categories: seasons,
          },
          series: [
            {
              name: values[0][0],
              data: values[0][1],
            },
            {
              name: values[1][0],
              data: values[1][1],
            },
            {
              name: values[2][0],
              data: values[2][1],
            },
            {
              name: values[3][0],
              data: values[3][1],
            },
            {
              name: values[4][0],
              data: values[4][1],
            },
            {
              name: values[5][0],
              data: values[5][1],
            },
            {
              name: values[6][0],
              data: values[6][1],
            },
            {
              name: values[7][0],
              data: values[7][1],
            },
            {
              name: values[8][0],
              data: values[8][1],
            },
            {
              name: values[9][0],
              data: values[9][1],
            },
            {
              name: values[10][0],
              data: values[10][1],
            },
            {
              name: values[11][0],
              data: values[11][1],
            },
            {
              name: values[12][0],
              data: values[12][1],
            },
            {
              name: values[13][0],
              data: values[13][1],
            },
            {
              name: values[14][0],
              data: values[14][1],
            },
          ],
        });
      });
  } catch (err) {
    document.write(err);
  }
}
MatchesPlayedPerYear();
bestEconomyPlayers();
extraRunIn2016();
mostMatchesAwards();
top10EconomicBowler();
tossAndMatchWinner();
dismissalPlayer();
matchesWonPerYear();


