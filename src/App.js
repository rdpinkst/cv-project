import { useState } from "react";
import uniqid from "uniqid";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import WorkOutput from "./components/WorkOutput";
import EducationOutput from "./components/EducationOutput";
import SkillsOutput from "./components/SkillsOutput";

function App() {
  const [personalData, setPersonalData] = useState([
    [
      {
        label: "First Name",
        typeInput: "text",
        value: "John",
        id: uniqid(),
      },
      { label: "Last Name", typeInput: "text", value: "Doe", id: uniqid() },
      {
        label: "Current Title",
        typeInput: "text",
        value: "Awesome",
        id: uniqid(),
      },
      {
        label: "Location",
        typeInput: "text",
        value: "Los Angeles, CA",
        id: uniqid(),
      },
      {
        label: "Email",
        typeInput: "email",
        value: "john@mail.com",
        id: uniqid(),
      },
      {
        label: "Phone Number",
        typeInput: "tel",
        value: "555-555-5555",
        id: uniqid(),
      },
    ],
  ]);

  const [educationData, setEducationData] = useState([
    [
      {
        label: "School or University Name",
        typeInput: "text",
        value: "",
        id: uniqid(),
      },
      { label: "City", typeInput: "text", value: "", id: uniqid() },
      { label: "State", typeInput: "text", value: "", id: uniqid() },
      {
        label: "Attended From",
        typeInput: "text",
        value: "",
        id: uniqid(),
      },
      { label: "Attended To", typeInput: "text", value: "", id: uniqid() },
      {
        label: "Degree of Study",
        typeInput: "text",
        value: "",
        id: uniqid(),
      },
    ],
  ]);

  const [workData, setWorkData] = useState([
    [
      {
        label: "Company Name",
        typeInput: "text",
        value: "AwesomeCompany",
        id: uniqid(),
      },
      {
        label: "City",
        typeInput: "text",
        value: "San Diego",
        id: uniqid(),
      },
      { label: "State", typeInput: "text", value: "CA", id: uniqid() },
      {
        label: "Start Date",
        typeInput: "text",
        value: "May 2021",
        id: uniqid(),
      },
      {
        label: "End Date",
        typeInput: "text",
        value: "Present",
        id: uniqid(),
      },
      {
        label: "Position",
        typeInput: "text",
        value: "SoftwareEngineer",
        id: uniqid(),
      },
    ],
  ]);

  const [areaText, setAreaText] = useState([
    [
      {
        value:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam doloribus amet fuga dolor quod facere libero, adipisci excepturi, veritatis quis? Perspiciatis impedit accusantium quis aspernatur porro totam nemo aut.",
        id: uniqid(),
      },
    ],
  ]);

  const [skillsData, setSkillsData] = useState([
    [{ label: "Skills", typeInput: "text", value: "", id: uniqid() }],
  ]);

  const dataInfo = [
    "personalData",
    "educationData",
    "workData",
    "skillsData",
  ];

  function changeInput(event, inputField) {
    switch (inputField) {
      case "personalData":
        setPersonalData((prevState) => {
          return prevState.map((allData) => {
            return allData.map((data) => {
              if (data.id !== event.target.id) {
                return data;
              } else {
                return {
                  ...data,
                  value: event.target.value,
                };
              }
            });
          });
        });
        break;
      case "educationData":
        setEducationData((prevState) => {
          return prevState.map((allData) => {
            return allData.map((data) => {
              if (data.id !== event.target.id) {
                return data;
              } else {
                return {
                  ...data,
                  value: event.target.value,
                };
              }
            });
          });
        });
        break;
      case "workData":
        setWorkData((prevState) => {
          return prevState.map((allData) => {
            return allData.map((data) => {
              if (data.id !== event.target.id) {
                return data;
              } else {
                return {
                  ...data,
                  value: event.target.value,
                };
              }
            });
          });
        });
        setAreaText(prevState => {
          return prevState.map((allData) => {
            return allData.map((data) => {
              if (data.id !== event.target.id) {
                return data;
              } else {
                return {
                  ...data,
                  value: event.target.value,
                };
              }
            });
          });
        })
        break;
      case "skillsData":
        setSkillsData((prevState) => {
          return prevState.map((allData) => {
            return allData.map((data) => {
              if (data.id !== event.target.id) {
                return data;
              } else {
                return {
                  ...data,
                  value: event.target.value,
                };
              }
            });
          });
        });
        break;
      default:
        console.log("Something went wrong!");
    }
  }

  function addInput(e, name) {
    e.preventDefault();

    if (name === "educationData") {
      setEducationData((prevState) => {
        return [
          ...prevState,
          [
            {
              label: "School or University Name",
              typeInput: "text",
              value: "",
              id: uniqid(),
            },
            { label: "City", typeInput: "text", value: "", id: uniqid() },
            { label: "State", typeInput: "text", value: "", id: uniqid() },
            {
              label: "Attended From",
              typeInput: "text",
              value: "",
              id: uniqid(),
            },
            {
              label: "Attended To",
              typeInput: "text",
              value: "",
              id: uniqid(),
            },
            {
              label: "Degree of Study",
              typeInput: "text",
              value: "",
              id: uniqid(),
            },
          ],
        ];
      });
    } else if (name === "workData") {
      setWorkData((prevState) => {
        return [
          ...prevState,
          [
            {
              label: "Company Name",
              typeInput: "text",
              value: "",
              id: uniqid(),
            },
            { label: "City", typeInput: "text", value: "", id: uniqid() },
            { label: "State", typeInput: "text", value: "", id: uniqid() },
            {
              label: "Start Date",
              typeInput: "text",
              value: "",
              id: uniqid(),
            },
            { label: "End Date", typeInput: "text", value: "", id: uniqid() },
            { label: "Position", typeInput: "text", value: "", id: uniqid() },
          ],
        ];
      });
      setAreaText((prevState) => [...prevState, [{ value: "", id: uniqid() }]]);
    } else if (name === "skillsData") {
      setSkillsData((prevState) => {
        return [
          ...prevState,
          [{ label: "Skills", typeInput: "text", value: "", id: uniqid() }],
        ];
      });
    }
  }

  function deleteInput(e, name, id, indexDelete) {
    e.preventDefault();
    console.log(indexDelete)

    switch (name) {
      case "educationData":
        setEducationData((prevState) => {
          return prevState.filter((data) => !data.some((e) => e.id === id));
        });
        break;
      case "workData":
        setWorkData((prevState) => {
          return prevState.filter((data) => !data.some((e) => e.id === id));
        });
        setAreaText((prevState) => {
          return prevState.filter((data, index) => index !== indexDelete);
        });
        break;
      case "skillsData":
        setSkillsData((prevState) => {
          return prevState.filter((data) => !data.some((e) => e.id === id));
        });
        break;
      default:
        console.log("Something went wrong!")
    }
  }

  return (
    <div className="App">
      <nav className="page-name">
        <h2 className="cv-generator">CV Generator</h2>
      </nav>
      <div className="input-container">
        <form className="cv-input">
          <h1 className="personal">Personal Information</h1>
          <hr></hr>
          <PersonalInfo
            personal={personalData[0]}
            change={(e) => changeInput(e, dataInfo[0])}
          />
          <h1 className="work-experience">Work Experience</h1>
          <hr></hr>
          {workData.map((data, index) => {
            return (
              <WorkExperience
                key={data[5].id}
                work={data}
                areaText={areaText[index]}
                change={(e) => changeInput(e, dataInfo[2])}
                clickButton={(e) => addInput(e, dataInfo[2])}
                clickDelete={(e) =>
                  deleteInput(e, dataInfo[2], data[0].id, index)
                }
                individualIndex={index}
                length={workData.length - 1}
              />
            );
          })}
          <h1 className="education">Education Experience</h1>
          <hr></hr>
          {educationData.map((data, index) => {
            return (
              <EducationInfo
                key={data[5].id}
                education={data}
                change={(e) => changeInput(e, dataInfo[1])}
                clickButton={(e) => addInput(e, dataInfo[1])}
                clickDelete={(e) =>
                  deleteInput(e, dataInfo[1], data[0].id, index)
                }
                individualIndex={index}
                length={educationData.length - 1}
              />
            );
          })}
          <h1 className="skills">Skills</h1>
          <hr></hr>
          {skillsData.map((data, index) => {
            return (
              <Skills
                key={data[0].id}
                skill={data}
                change={(e) => changeInput(e, dataInfo[3])}
                clickButton={(e) => addInput(e, dataInfo[3])}
                clickDelete={(e) =>
                  deleteInput(e, dataInfo[3], data[0].id, index)
                }
                individualIndex={index}
                length={skillsData.length - 1}
              />
            );
          })}
        </form>

        <div className="cv-output">
          <div className="personal-output">
            <div>
              <h1 className="name-output">
                {personalData[0][0].value} {personalData[0][1].value}
              </h1>
              <h3 className="title-output">{personalData[0][2].value}</h3>
            </div>
            <div className="where-output">
              <p>{personalData[0][3].value}</p>
              <p>{personalData[0][4].value}</p>
              <p>{personalData[0][5].value}</p>
            </div>
          </div>
          <hr></hr>
          <h3 className="title-section">Work Experience</h3>
          {workData.map((data, index) => {
            return (
              <WorkOutput
                key={data[0].id}
                outputWork={data}
                outputText={areaText[index][0]}
              />
            );
          })}
          <h3 className="title-section">Education</h3>
          {educationData.map((data) => {
            return <EducationOutput key={data[0].id} outputEducation={data} />;
          })}
          <h3 className="title-section">Skills</h3>
          <div className="skills-output">
            {skillsData.map((data) => {
              return <SkillsOutput key={data[0].id} outputSkills={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
