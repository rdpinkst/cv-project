import React from "react";

function Skills({
  skill,
  length,
  individualIndex,
  clickButton,
  clickDelete,
  change,
}) {
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
              onChange={change}
            />
          </div>
        );
      })}
      {length === individualIndex && (
        <button className="add-skill" onClick={clickButton}>
          Add
        </button>
      )}
      {length !== 0 && (
        <button className="delete-skill" onClick={clickDelete}>
          Delete
        </button>
      )}
    </div>
  );
}

export default Skills;
