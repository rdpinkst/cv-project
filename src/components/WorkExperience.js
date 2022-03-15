import React from "react";

function WorkExperience({
  work,
  areaText,
  change,
  clickButton,
  clickDelete,
  length,
  individualIndex,
}) {
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
              onChange={change}
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
              onChange={change}
              index = {individualIndex}
            />
          );
        })}
      </div>
      {length === individualIndex && (
        <button className="add-work" onClick={clickButton}>
          Add
        </button>
      )}
      {length !== 0 && (
        <button className="delete-work" onClick={clickDelete}>
          Delete
        </button>
      )}
    </div>
  );
}

export default WorkExperience;
