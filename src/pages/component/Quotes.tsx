// This code is based on yudejp/yude.jp_v4 published under MIT Licence.
// Thank you, yude!
import { useEffect, useState } from 'react';

export type Quote = {
  lyrics: string;
  songtitle: string;
  artist: string;
};

function Quotes() {
  const [data, setData] = useState<Quote>();

  const fetchData = async () => {
    const res = await fetch('./assets/quotes.json');
    const jsonData = await res.json();

    const dataSize = jsonData.length;
    return setData(jsonData[Math.floor(Math.random() * dataSize)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-center m-4">
      <span className="fs-4 d-block">{data && data.lyrics}</span>
      <br />
      <span className="d-block">
        {data && data.songtitle} -- {data && data.artist}
      </span>
    </div>
  );
}

export default Quotes;
