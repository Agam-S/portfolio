import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
          <h1 className="banner-title">Agam Singh</h1>
          <p className="banner-subtitle">Full Stack Developer</p>
        </div>
      </div>
      <div className="about-me">
        <h1 className="title">About Me</h1>
        <p className="text">
          Hello! My name is{" "}
          <span style={{ color: "#aa1deb" }}> Agam Singh.</span> <br></br> Hello
          and welcome to my portfolio. I am a passionate full stack developer
          with a profound enthusiasm for technology.<br></br> I've worked with
          JavaScript frameworks and libraries like React and Angular. I've also
          created APIs with Express.JS and .NET and databases such as MongoDB,
          Firebase, and MSSQL that are integrated into the front end.
        </p>
      </div>
    </>
  );
}
