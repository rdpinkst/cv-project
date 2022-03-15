import React from "react";

function EducationInfo({
  education,
  change,
  length,
  individualIndex,
  clickButton,
  clickDelete,
}) {
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
              onChange={change}
            />
          </div>
        );
      })}
      {length === individualIndex && (
        <button className="add-education" onClick={clickButton}>
          Add
        </button>
      )}
      {length !== 0 && (
        <button className="delete-education" onClick={clickDelete}>
          Delete
        </button>
      )}
    </div>
  );
}

export default EducationInfo;
