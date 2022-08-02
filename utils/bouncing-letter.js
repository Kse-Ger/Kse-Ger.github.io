export const Sentence = (sentence) => {
    let x = sentence.split('');
    return x.map(element => {
      return (<div className="letter">{element}</div>);
    })
    
  }