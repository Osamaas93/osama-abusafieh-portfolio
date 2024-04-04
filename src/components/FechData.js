import { useEffect, useState } from "react";

const FechData = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await fetch(`https://randomuser.me/api/`);
        const parcedData = await responce.json();
        setData(parcedData);
      } catch {
        console.error("error fetching data");
      }
    };
    getData();
  }, []);
  console.log(data.value);
  return <div>{data.value}</div>;
};

export default FechData;
