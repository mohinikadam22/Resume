import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import Particle from "../Particle";

import soil from "./Projects/soil.png";
import scop from "./Projects/scop.png";

import Sumago from "./Projects/sumago.png";

function Project() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scop}
              isBlog={false}
              title="SCOPE"
              description=
              "Proficient in utilizing training websites to enhance skill sets and knowledge base. Familiarity with navigating and utilizing various platforms to access courses and tutorials, ensuring continuous professional development and staying updated with industry trends."
              ghLink="https://github.com/soumyajit4419/scop"
              demoLink="https://website.sumagotraining.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sumago}
              isBlog={false}
              title="SUMAGO"
              description="Utilized Sumago IT Company's website for research, collaboration, and accessing valuable resources. Leveraged the platform to stay informed about company updates, access training materials, and engage with colleagues, enhancing productivity and contributing to project success."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://web.sumagoinfotech.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soil}
              isBlog={false}
              title="SOIL"
              description=
              "Applied Soil Charger technology to optimize soil health and plant growth. Utilized innovative methods to enhance nutrient absorption, water retention, and overall crop yield, resulting in sustainable agriculture practices and increased environmental efficiency."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://web.soilchargertechnology.com/"              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
