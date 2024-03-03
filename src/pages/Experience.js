import { useParams } from "react-router-dom";
import { myExperience } from "../utls/myExperience";

const Experience = () => {
  let data;
  const { id } = useParams();
  if (id == "frontend") {
    data = myExperience.frontend;
  } else {
    data = myExperience.music;
  }
  return (
    <div>
      <div>{data.title}</div>
      <div>COMING SOON</div>
    </div>
  );
};

export default Experience;
