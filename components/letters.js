import React from "react";
import { Sentence } from "../utils/bouncing-letter";

const Letters = () => {
  return (
    <div className="margin-top-3">
      <div className="non-mobile">
        <div className="margin-l-3 flex">{Sentence("Hi,")}</div>
        <div className="margin-l-3 flex">
          {Sentence("I'm")}
          <div className="logo letter space">K</div>
          {Sentence("senija,")}
        </div>
        <div className="margin-l-3 flex">
          {Sentence("Full-stack")}
          <div className="letter space">D</div>
          {Sentence("eveloper")}
        </div>
      </div>

      <div className="mobile appear">
        <div className="margin-l-3 flex">{Sentence("Hi,", true)}</div>
        <div className="margin-l-3 flex">
          {Sentence("I'm", true, "delay1")}
          <div className="logo letter appear space delay1">K</div>
          {Sentence("senija,", true, "delay1")}
        </div>
        <div className="margin-l-3 flex">
          {Sentence("Full-stack", true, "delay2")}
          <div className="letter appear space delay2">D</div>
          {Sentence("eveloper", true, "delay2")}
        </div>
      </div>

    </div>
  );
};

export default Letters;
