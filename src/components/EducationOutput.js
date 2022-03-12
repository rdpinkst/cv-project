import { Component } from "react";

class EducationOutput extends Component {
  render() {
    const { outputEducation } = this.props;
    return (
      <div className="education-output">
        <div className="education-date">
          <p>
            {outputEducation[3].value} - {outputEducation[4].value}
          </p>
        </div>
        <div className="education-dataoutput">
          <p>
            {outputEducation[5].value} 
          </p>
          <p>{outputEducation[0].value}</p>
          <p>
            {outputEducation[1].value}, {outputEducation[2].value}
          </p>
        </div>
      </div>
    );
  }
}

export default EducationOutput;
