import { Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"; 
import projects from "./dataproject";


export const Projects = () => {

    return (
        <section className="project" id="projects">

            <Container>
                <Row>
                    <Col>
                    <h2>Projects </h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>                          
                                    {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
<img className="background-image-right" src={colorSharp2} alt="img"></img>
        </section>
    )
}