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
    <div className="cards margin-r-3">
      <a
        href="https://kse-ger.github.io/Company-Home-Page/"
        className="height-card width-card"
      >
        <img
          id="dn"
          src="/DN.png"
          className="height-card width-card cover card"
          onMouseEnter={() => hover(dn)}
          onMouseOut={() => unhover(dn)}
        />
      </a>
      <a
        href="/chart"
        className="height-card width-card"
      >
        <img
          src="/DN.png"
          className="height-card width-card cover card"
        />
      </a>
    </div>
  );
};

export default Card;
