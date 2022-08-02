import Form from "./form";
import Letters from "./letters";
import Card from "./work-card";

const Body = () => {
  const hello = () => {
    console.log("Hello");
  };

  const goodbye = () => {
    console.log("goodbye");
  };

  return (
    <div className="body border-box">
      <Letters />

      <div className="margin-l-3 margin-top-3">
        <p>Front End Developer | Back End Developer</p>
      </div>

      <div className="flex justify-between margin-l-1 margin-top-5">
        <div className="flex scroll">
          <div className="bounce">Scroll down</div>
          <div className="margin-top-0-5"> →</div>
        </div>
        <a className="contact-btn" href="#contact">
          Contact me!
        </a>
        <div className="flex scroll margin-r-1">
          <div className="bounce">Scroll down</div>
          <div className="margin-top-0-5"> →</div>
        </div>
      </div>

      <div id="about" className="margin-l-3 margin-top-7">
        <h1 className="background">About</h1>
        <h2>Nice to meet you!</h2>
        <p className="description">
          I'm a Full-Stack Developer from Latvia with a passion for design and
          creation.
        </p>
        <p className="description">
          After finishing medical school, I dived right into everything that
          inspires me and gives me tools to express myself - Front-End
          Development. Since then I progressed a lot as a Full-Stack Developer
          and keep going on.
        </p>
        <p className="description">
          I'm well-organised person, problem solver, good team-player and
          independent employee with high attention to details.
        </p>
      </div>

      <div id="skills" className="margin-l-3 margin-top-10">
        <h1 className="background-1">My skills</h1>
        <h2>
          Skills & <br />
          Experience
        </h2>
        <div className="flex">
          <div>
            <p className="description">
              Since beginning of my journey I've worked for IT company and
              collaborated with talented people to create web products.
            </p>
            <p className="description">
              I create successful responsive websites and webapplications that
              are easy to use and fast. I develop following best practices,
              using HTML, CSS, JS for Front-End Development, and Java, Maven,
              MySQL/PostgreSQL, Spring for Back-End Development.
            </p>
            <p className="description">
              Visit my{" "}
              <a
                className="description-link"
                href="https://www.linkedin.com/in/kgerasimcuka/"
              >
                Linkedin
              </a>{" "}
              profile for more details or{" "}
              <a className="description-link" href="#contact">
                contact me
              </a>
              .
            </p>
          </div>
          <div className="width-full">
            <div>
              <h4 className="margin-y-0-5">Front-end</h4>
              <div className="chart-1"></div>
            </div>
            <div>
              <h4 className="margin-y-0-5">Back-end</h4>
              <div className="chart-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="margin-l-3 margin-top-10">
        <h1 className="background-2">Work</h1>
        <h2>Work</h2>
        <Card />
      </div>

      <div id="contact" className="margin-l-3 margin-top-10">
        <h1 className="background-3">Contact</h1>
        <h2>Contact</h2>
        <p className="description">
          I'm always interested in cool stuff. Are you minding a project?{" "}
        </p>
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Body;
