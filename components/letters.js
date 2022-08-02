import React from "react";
import { Sentence } from "../utils/bouncing-letter";

const Letters = () => {

  return (
    <div className="margin-top-3">
      <div className="margin-l-3 flex">
        {Sentence('Hi,')}
      </div>
      <div className="margin-l-3 flex">
        {Sentence("I'm")}
        <div className="logo letter space">K</div>
        {Sentence('senija,')}
      </div>
      <div className="margin-l-3 flex">
        {Sentence('Full-stack')}
        <div className="letter space">D</div>
        {Sentence('eveloper')}
      </div>
    </div>
  );
};

export default Letters;
