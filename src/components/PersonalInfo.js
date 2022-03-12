import { Component } from "react";

class PersonalInfo extends Component {
  render() {
    const { personal } = this.props;

    return (
      <div className="personal-style">
        {personal.map((data) => {
          return (
            <div className="contain-input" key={data.id}>
              <label>{data.label}:</label>
              <input
                type={data.typeInput}
                placeholder={data.label}
                id = {data.id}
                value={data.value}
                onChange = {this.props.change}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PersonalInfo;
