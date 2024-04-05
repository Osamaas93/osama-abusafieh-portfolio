import { useParams } from "react-router-dom";
import { myExperience } from "../utls/myExperience";
import styled from "styled-components";
import { Container } from "@mui/material";

const CustomBox = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 0rem 2rem 4rem 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const CustomHeading1 = styled.h1`
  color: var(--bodyText);
  padding: 2rem;
`;

const CustomHeading2 = styled.h2`
  margin-bottom: 2rem;
  color: var(--bodyText);
`;

const CustomCard = styled.div`
  background-color: var(--bgDefault);
  padding: 1rem;
  margin-bottom: 2rem;
`;

const CustomText = styled.p`
  color: var(--bodyText);
  margin-bottom: 1rem;
`;

const CustomTitle = styled.span`
  color: var(--brandSecondary);
  font-size: 1.5rem;
`;

const SkillBox = styled.div`
  padding: 1rem;
  @media (max-width: 768px) {
    /*fill the code here*/
  }
`;

const SkillList = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: left; /* Align items to the left */
    width: 100%; /* Take full width of the container */
  }
`;

const SkillListItem = styled.div`
  border: 1px solid #999;
  padding: 5px 10px;
  margin: 0px;
  white-space: nowrap;
`;

const Experience = () => {
  let data;
  const { id } = useParams();
  if (id === "frontend") {
    data = myExperience.frontend;
  } else {
    data = myExperience.music;
  }

  return (
    <>
      <CustomHeading1>{data.title}</CustomHeading1>
      <CustomBox>
        <section>
          <div>
            <CustomHeading2>Experience</CustomHeading2>
            {data.experience.map((exp, index) => (
              <CustomCard key={index}>
                <CustomTitle>{exp.jobTitle}</CustomTitle>
                <CustomText>{exp.companyName}</CustomText>
                <CustomText>{exp.duration}</CustomText>
                <ul>
                  {exp.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </CustomCard>
            ))}
          </div>
        </section>
        <aside>
          <SkillBox>
            <CustomHeading2>Skills</CustomHeading2>
            <div>
              <h3>Technical Skills</h3>
              <SkillList>
                {data.technicalSkills.map((skill, index) => (
                  <SkillListItem key={index}>{skill}</SkillListItem>
                ))}
              </SkillList>
            </div>
            <div>
              <h3>Transferable Skills</h3>
              <SkillList>
                {data.transferableSkills.map((skill, index) => (
                  <SkillListItem key={index}>{skill}</SkillListItem>
                ))}
              </SkillList>
            </div>
          </SkillBox>
        </aside>
      </CustomBox>
    </>
  );
};

export default Experience;
