
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/odds/baseball_mlb")
      .then(res => res.json())
      .then(data => setOdds(data));
  }, []);

  return (
    <div>
      <h1>OddsScope - MLB Odds</h1>
      {odds.map((game, index) => (
        <div key={index}>
          <p>{game.home_team} vs {game.away_team}</p>
        </div>
      ))}
    </div>
  );
}
