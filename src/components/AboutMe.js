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
          <span style={{ color: "#aa1deb" }}> Agam Singh.</span> <br></br>
          Welcome to my portfolio. I am a passionate full stack developer with
          an enthusiasm for technology. <br></br>I have over 3 years of
          experience working as a full stack developer with a strong focus on
          JavaScript frameworks and libraries, including React and Angular. I
          have also worked with various backend frameworks such as Express.JS
          and .NET to create robust APIs for web applications. In addition to my
          expertise in frontend and backend development, I am also familiar with
          several databases such as MongoDB, Firebase, and MSSQL which I
          integrate into the frontend.
          <br></br>Thank you for taking the time to visit my portfolio. Please
          feel free to contact me if you have any questions or would like to
          discuss potential projects.
        </p>
      </div>
    </>
  );
}
