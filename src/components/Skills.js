
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <IoLogoJavascript size={80} color="white" className="img" />
                                <h5>JavaScript</h5>
                            </div>
                            
                            <div className="item">
                                <FaReact size={80} color="white" className="img" />
                                <h5>React</h5>
                            </div>

                            <div className="item">
                                <SiRedux size={80} color="white" className="img" />
                                <h5>Redux</h5>
                            </div>

                            <div className="item">
                                <FaNodeJs size={80} color="white" className="img"/>
                                <h5>NodeJs</h5>
                            </div>

                            <div className="item">
                                <DiMongodb size={80} color="white" className="img"/>
                                <h5>MongoDB</h5>
                            </div>

                            <div className="item">
                                <FaFigma size={80} color="white" className="img"/>
                                <h5>Figma</h5>
                            </div>

                            <div className="item">
                                <FaBootstrap size={80} olor="white" className="img"/>
                                <h5>Bootstrap</h5>
                            </div>
                            
                        </Carousel>

                    </div>
                    </Col>
                </Row>
            </Container>
<img className="background-image-left" src={colorSharp} alt="backimg"/>
        </section>

        
    )
}