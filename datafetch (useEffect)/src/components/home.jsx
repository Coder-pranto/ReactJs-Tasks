import React from 'react';

import { useState, useEffect } from 'react';

export default function Home() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [datum, setDatum] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (await fetch(url)).json();
        setDatum(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-capitalize text-center p-3 text-primary">
        Fetch Data!
      </h1>
      {datum && datum.map((x, id) => <p key={id}>{x.body}</p>)}
    </div>
  );
}
