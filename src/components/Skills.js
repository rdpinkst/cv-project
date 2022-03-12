import { Component } from "react";

class Skills extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="skill-contain">
        {skill.map((data) => {
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
          <button className="add-skill" onClick={this.props.clickButton}>
            Add
          </button>
        )}
        {this.props.length !== 0 && (
          <button className="delete-skill" onClick={this.props.clickDelete}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default Skills;
