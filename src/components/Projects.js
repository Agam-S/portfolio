import "../styles/Projects.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Projects() {
  return (
    <>
      <div id="projects" className="banner-p">
        <div className="banner-text-p">
          <h1 className="banner-title-p">Projects</h1>

          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3 tabs"
            fill
          >
            <Tab eventKey="STP" title="Short Term Projects" className="tabs">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">CRUD App</h5>
                      <h6 class="card-subtitle mb-2">
                        Angular, Node, ExpressJS, MongoDB
                      </h6>
                      <p class="card-text">
                        This was a challenge to create a full CRUD app in under
                        3 hours while I was doing my diploma. I am showing this
                        in my portfolio because of the time limit. Under
                        pressure, I was able to complete and deploy a CRUD app
                        in 3 hrs. API had all endpoints with database saving and
                        editing all of them by the frontend.
                      </p>
                      <h6 class="card-subtitle mb-3 text-muted">
                        This app is not available to view as the servers are
                        closed.
                      </h6>
                      <a
                        href="https://github.com/Agam-S/DIP_Sem1_Challenge"
                        target="_blank"
                        class="btn github-button"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Request Invite Form Demo</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        React, TypeScript, Axios
                      </h6>
                      <p class="card-text">
                        I made this Invite Form just for practise. I was looking
                        at interviews and this request invite form was a very
                        common test. So I made it in React + TypeScript. This
                        site was very CSS dependant as it has no functionality
                        other than validation and send form.
                      </p>
                      <h6 class="card-subtitle mb-3 text-muted">
                        One deployed version is available to view.
                      </h6>
                      <div className="buttons">
                        <a
                          href="https://github.com/Agam-S/request-invite-demo"
                          target="_blank"
                          class="btn github-button"
                        >
                          GitHub
                        </a>
                        <a
                          href="https://endearing-banoffee-6b432e.netlify.app/"
                          target="_blank"
                          class="btn github-button"
                        >
                          Live Version
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="LTP" title="Long Term Projects">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">NBA Prediction App</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Angular, ExpressJS, Python, Scikit-Learn, MongoDB,
                        Auth0, TypeScript
                      </h6>
                      <p class="card-text">
                        This project was created for the Diploma of IT program
                        at Swinburne University. The main purpose of this
                        project was to enable users to create custom NBA teams
                        and add their desired players to it. The app had two
                        distinct sides. The first was to verify authentication
                        with Auth0 and manage the CRUD operations depending on
                        the logged-in user. The second was to run a Python
                        script in ExpressJS that would predict the win% using
                        Scikit-Learn of the team.
                      </p>
                      <h6 class="card-subtitle mb-3 text-muted">
                        This app is not available to view as the servers are
                        closed.
                      </h6>
                      <a
                        href="https://github.com/Agam-S/DIP-Sem1-TeamProj"
                        class="btn github-button"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">EdAble Donation System</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        React, ExpressJS, PayPal, Firebase, Auth0, TypeScript
                      </h6>
                      <p class="card-text">
                        This project was created for the Diploma of IT program
                        at Swinburne University. In this web application, users
                        may make general donations to organizations or
                        contribute products such as milk to organisations. We
                        utilised Paypal to finalise transactions and an email
                        bot to send payment emails.
                      </p>
                      <h6 class="card-subtitle mb-3 text-muted">
                        Live version is available to view.
                      </h6>
                      <div className="buttons">
                        <a
                          href="https://www.edable.org.au/donations"
                          class="btn github-button"
                          target="_blank"
                        >
                          Live Version
                        </a>
                        <a
                          href="https://github.com/Agam-S/edable-donors"
                          class="btn github-button"
                          target="_blank"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="PP" title="Personal Projects">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Family Friends App</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Angular, ExpressJS, JWT, Hash & Salt,
                      </h6>
                      <p class="card-text">
                        I made this app becuase I wanted to make an app that
                        used CRUD operations (create family or friend objects to
                        store some information) and used user authentication.
                        The authentication system is created from scratch that
                        uses hash and salt methods to encrypt passwords. It also
                        uses JWT to store tokens in browser for verification.
                      </p>
                      <h6 class="card-subtitle mb-3 text-muted">
                        A live version is available but the API no longer works
                        as it was hosted on Heroku which is now a paid service.
                      </h6>
                      <div className="buttons">
                        <a
                          href="https://condescending-einstein-a16489.netlify.app/"
                          target="_blank"
                          className="btn github-button"
                        >
                          Live Version
                        </a>
                        <a
                          href="https://github.com/Agam-S/fam-friends-project"
                          target="_blank"
                          className="btn github-button"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
