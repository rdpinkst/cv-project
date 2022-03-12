import { Component } from "react";

class WorkExperience extends Component {
  render() {
    const { work, areaText } = this.props;

    return (
      <div className="work-container">
        {work.map((data) => {
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
        <div className="contain-input experience-work">
          <label>Work Description:</label>
          {areaText.map((data) => {
            return (
              <textarea
                key={data.id}
                type="text"
                placeholder="Work Description"
                id={data.id}
                value={data.value}
                onChange={this.props.change}
              />
            );
          })}
        </div>
        {this.props.length === this.props.individualIndex && (
          <button className="add-work" onClick={this.props.clickButton}>
            Add
          </button>
        )}
        {this.props.length !== 0 && (
          <button className="delete-work" onClick={this.props.clickDelete}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default WorkExperience;
