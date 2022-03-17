import { Component } from "react";
import uniqid from "uniqid";
import  ReactToPrint  from "react-to-print";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import WorkOutput from "./components/WorkOutput";
import EducationOutput from "./components/EducationOutput";
import SkillsOutput from "./components/SkillsOutput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalData: [
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
      ],
      educationData: [
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
      ],
      workData: [
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
      ],
      textArea: [
        [
          {
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam doloribus amet fuga dolor quod facere libero, adipisci excepturi, veritatis quis? Perspiciatis impedit accusantium quis aspernatur porro totam nemo aut.",
            id: uniqid(),
          },
        ],
      ],
      skillsData: [
        [{ label: "Skills", typeInput: "text", value: "", id: uniqid() }],
      ],
    };
  }

  changeInput = (event) => {
    const keyState = Object.keys(this.state);
    console.log(event.target.id);

    for (let i = 0; i < keyState.length; i++) {
      if (
        this.state[keyState[i]].some((input) =>
          input.some((e) => e.id === event.target.id)
        )
      ) {
        this.setState(() => {
          return {
            ...this.state,
            [keyState[i]]: this.state[keyState[i]].map((allData) => {
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
            }),
          };
        });
      }
    }
  };

  addInput = (e, name) => {
    e.preventDefault();
    this.setState(() => {
      if (name === "educationData") {
        return {
          ...this.state,
          [name]: [
            ...this.state[name],
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
          ],
        };
      } else if (name === "workData") {
        return {
          ...this.state,
          [name]: [
            ...this.state[name],
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
          ],
          textArea: [...this.state.textArea, [{ value: "", id: uniqid() }]],
        };
      } else if (name === "skillsData") {
        return {
          ...this.state,
          [name]: [
            ...this.state[name],
            [{ label: "Skills", typeInput: "text", value: "", id: uniqid() }],
          ],
        };
      }
    });
  };

  deleteInput = (e, name, id, indexDelete) => {
    e.preventDefault();
    console.log(indexDelete);
    console.log(this.state.educationData.findIndex((data) => data.id === id));
    this.setState(() => {
      if (name === "educationData") {
        return {
          ...this.state,
          [name]: this.state[name].filter(
            (data) => !data.some((e) => e.id === id)
          ),
        };
      } else if (name === "workData") {
        return {
          ...this.state,
          [name]: this.state[name].filter(
            (data) => !data.some((e) => e.id === id)
          ),
          textArea: this.state.textArea.filter(
            (data, index) => index !== indexDelete
          ),
        };
      } else if (name === "skillsData") {
        return {
          ...this.state,
          [name]: this.state[name].filter(
            (data) => !data.some((e) => e.id === id)
          ),
        };
      }
    });
  };

  render() {
    const { personalData, educationData, workData, skillsData, textArea } =
      this.state;
    const educationPass = "educationData";
    const workPass = "workData";
    const skillsPass = "skillsData";

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
              change={this.changeInput}
            />
            <h1 className="work-experience">Work Experience</h1>
            <hr></hr>
            {workData.map((data, index) => {
              return (
                <WorkExperience
                  key={data[5].id}
                  work={data}
                  areaText={textArea[index]}
                  change={this.changeInput}
                  clickButton={(e) => this.addInput(e, workPass)}
                  clickDelete={(e) =>
                    this.deleteInput(e, workPass, data[0].id, index)
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
                  change={this.changeInput}
                  clickButton={(e) => this.addInput(e, educationPass)}
                  clickDelete={(e) =>
                    this.deleteInput(e, educationPass, data[0].id, index)
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
                  change={this.changeInput}
                  clickButton={(e) => this.addInput(e, skillsPass)}
                  clickDelete={(e) =>
                    this.deleteInput(e, skillsPass, data[0].id, index)
                  }
                  individualIndex={index}
                  length={skillsData.length - 1}
                />
              );
            })}
            <ReactToPrint 
            trigger = {() => {

              return <button className = "print-cv" type="button">Print</button>
            }}
            content = {() => this.componentRef}
            pageStyle = "print"
            
          
          />
          </form>

          <div className="cv-output section-to-print" ref= {el => (this.componentRef = el)}>
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
            <h3 className = "title-section">Work Experience</h3>
            {workData.map((data, index) => {
              return (
                <WorkOutput
                  key={data[0].id}
                  outputWork={data}
                  outputText={textArea[index][0]}
                />
              );
            })}
            <h3 className = "title-section">Education</h3>
            {educationData.map((data) => {
              return (
                <EducationOutput key={data[0].id} outputEducation={data} />
              );
            })}
            <h3 className = "title-section">Skills</h3>
            <div className="skills-output">
            {skillsData.map((data) => {
              return <SkillsOutput key={data[0].id} outputSkills={data} />;
            })}
            </div>
          </div>
          {/* <ReactToPrint 
            trigger = {() => {

              return <button className = "print-cv">Print</button>
            }}
            content = {() => this.componentRef}
            pageStyle = "print"
          
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
