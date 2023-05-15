import React, { useState, useEffect } from "react";
import Chart from "./Datescheck";
import "./CheckData.css";

function FetchTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json?.items);
        });
  }, []);

  return (
    <div>
      {data.map((e, key) => {
        console.log(e, "check the dsta in  map");
        return (
          <div key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.description}</p>
            <p>{e.issue_events_url}</p>
            <img className="avatarImage" src={e.owner?.avatar_url} />
            <p>{e.owner?.login}</p>
            <Chart DateCreated={e.created_at} />
          </div>
        );
      })}
    </div>
  );
}

export default FetchTest;
