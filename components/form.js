const Form = () => {
  const mailToLink = () => {
    if (typeof window !== "undefined") {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let subject = document.getElementById("subject").value;
      let msg = document.getElementById("msg").value;
      console.log("name " + name);
    }
  };

  return (
    <form>
      <ul>
        <li className="half animated fadeInUp">
          <input
            className="input__field input__field--hoshi"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
          />
          <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
        </li>
        <li className="half animated fadeInUp">
          <input
            className="input__field input__field--hoshi"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
          <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
        </li>
        <li className="animated fadeInUp">
          <input
            className="input__field input__field--hoshi"
            placeholder="Subject"
            type="text"
            name="subject"
            id="subject"
          />
          <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
        </li>
        <li className="animated fadeInUp">
          <textarea
            className="input__field input__field--hoshi"
            placeholder="Message"
            name="msg"
            id="msg"
          ></textarea>
          <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
        </li>
        <li className="submit animated fadeInUp">
          <a onClick={() => mailToLink()} id="submit-form" className="submit">
            Let's talk.
          </a>
        </li>
      </ul>
    </form>
  );
};

export default Form;
