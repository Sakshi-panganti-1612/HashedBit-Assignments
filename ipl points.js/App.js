import React, { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // check API data

        // sort by NRR (ascending)
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);

        setTeams(sortedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>IPL 2022 Points Table</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;