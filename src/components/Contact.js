import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div id="contact" className="banner-c">
        <div className="banner-text-c">
          <h1 className="banner-title-c">Contact Me</h1>
          <div className="contact">
            <form className="form">
              <input
                className="formtext"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="formtext"
                type="email"
                placeholder="Email"
                required
              />
              <textarea className="textArea" placeholder="Message" required />
              <button className="btn formButton" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
