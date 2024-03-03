import { useParams } from "react-router-dom";
import useSelectedContent from "./context/context";
import { myPortfolio } from "../utls/myPortfolio";
const Portfolio = () => {
  let data;
  const { id } = useParams();
  if (id == "frontend") {
    data = myPortfolio.frontend;
  } else {
    data = myPortfolio.music;
  }
  return (
    <div>
      <div>{data.title}</div>
      <div>COMING SOON</div>
    </div>
  );
};

export default Portfolio;
