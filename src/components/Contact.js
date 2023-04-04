import axios from "axios";
import "../styles/Contact.css";

export default function Contact() {
  // use google form link to submit name email and message

  const handleClick = (event) => {
    event.preventDefault();
    const formLink =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSecMMLo7ygI7m7NrfdEULVUZj-oFVArPa3DxAM8cLlQnpmlFg/formResponse";
    const name = document.querySelector(".formtext").value;
    const email = document.querySelector(".formtext:nth-child(2)").value;
    const message = document.querySelector(".textArea").value;

    const name_entry = "entry.1282777015";
    const email_entry = "entry.356948375";
    const message_entry = "entry.753230595";

    const url = `${formLink}?${name_entry}=${name}&${email_entry}=${email}&${message_entry}=${message}`;
    try {
      axios.post(url);
      alert("Message Sent");
    } catch (error) {
      alert("Message failed, please try contacting- singh.agam0009@gmail.com");
    }
  };
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
              <button className="btn formButton" onClick={handleClick}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
