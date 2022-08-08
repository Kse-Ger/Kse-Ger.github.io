export const Sentence = (sentence, mobile, delay) => {
  let x = sentence.split("");
  return x.map((element) => {
    if (mobile) {
      if (delay === "delay1") {
        return <div className="appear letter delay1">{element}</div>;
      }
      if (delay === "delay2") {
        return <div className="appear letter delay2">{element}</div>;
      }
      return <div className="appear letter">{element}</div>;
    } else {
      return <div className="letter">{element}</div>;
    }
  });
};
