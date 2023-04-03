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
                      <h5 class="card-title">Special title treatment</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
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
                      <h5 class="card-title">Special title treatment</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Special title treatment</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
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
                      <h5 class="card-title">Special title treatment</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Special title treatment</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
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
