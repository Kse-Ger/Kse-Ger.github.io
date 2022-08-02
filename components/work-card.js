const Card = () => {
  const hover = (element) => {
    console.log(element.id);
    if (element) {
      document.getElementById(element.id).setAttribute("src", "/DN-1.png");
    }
  };

  const unhover = (element) => {
    if (element) {
      document.getElementById(element.id).setAttribute("src", "/DN.png");
    }
  };

  return (
    <div className="grid grid-3 margin-r-3">
      <div className="card flex">
        <a href="https://kse-ger.github.io/Company-Home-Page/" className="width-18 height-18">
          <img
            id="dn"
            src="/DN.png"
            className="width-18 height-18 cover blur"
            onMouseEnter={() => hover(dn)}
            onMouseOut={() => unhover(dn)}
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
