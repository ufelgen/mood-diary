import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error("du kannst gar nichts");
      }
    }
    startFetching();
  }, [url]);
  return data;
}
