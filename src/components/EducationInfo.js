import { Component } from "react";

class EducationInfo extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="education-info">
        {education.map((data) => {
          return (
            <div className="contain-input" key={data.id}>
              <label>{data.label}:</label>
              <input
                type={data.typeInput}
                id={data.id}
                placeholder={data.label}
                value={data.value}
                onChange={this.props.change}
              />
            </div>
          );
        })}
        {this.props.length === this.props.individualIndex && (
          <button className="add-education" onClick={this.props.clickButton}>
            Add
          </button>
        )}
        {this.props.length !== 0 && <button className="delete-education" onClick={this.props.clickDelete}>
          Delete
        </button>}
      </div>
    );
  }
}

export default EducationInfo;
