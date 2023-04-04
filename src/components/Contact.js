import "../styles/Contact.css";

export default function Contact() {
  const handleClick = (event) => {
    event.preventDefault();
    const formLink =
      "https://v1.nocodeapi.com/agam_singh/google_sheets/VIPWLYigGQNRewcC?tabId=Sheet1";
    const name = document.querySelector(".formtext").value;
    const email = document.querySelector(".formtext:nth-child(2)").value;
    const message = document.querySelector(".textArea").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify([
        [name, email, message, new Date().toLocaleString()],
      ]),
    };

    try {
      fetch(formLink, requestOptions);
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
