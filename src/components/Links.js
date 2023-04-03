import "../styles/Links.css";

export default function Links() {
  return (
    <>
      <div id="links" className="banner-l">
        <div className="banner-text-l">
          <h1 className="banner-title-l">Useful Links</h1>
          <div className="links">
            <a
              //   href={resume}
              download="Agam_Singh_Resume.pdf"
              className="btn button"
            >
              Resume
            </a>
            <a
              //   href={cv}
              download="Agam_Singh_CV.pdf"
              className="btn button"
            >
              CV
            </a>
            <a
              href="https://www.linkedin.com/in/agamsingh0009/"
              target="_blank"
              className="btn button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
