import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaAngular,FaHtml5,FaCss3Alt,FaBootstrap  } from "react-icons/fa";
import {

  SiExpress 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      
       
      <Col xs={4} md={2} className="tech-icons">
          <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress  />
      </Col>
     
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
   
    </Row>
  );
}

export default Techstack;
