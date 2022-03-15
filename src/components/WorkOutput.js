import React from "react";

function WorkOutput({ outputWork, outputText }){
  return (
    <div className="experience-output">
      <div className = "experience-date">
        <p>
          {outputWork[3].value} - {outputWork[4].value}
        </p>
      </div>
      <div className = "company-output">
      <p>
        {outputWork[5].value} at {outputWork[0].value}
      </p>
      <p>
        {outputWork[1].value}, {outputWork[2].value}
      </p>

      <p>{outputText.value}</p>
      </div>
    </div>
  );
}

export default WorkOutput;
