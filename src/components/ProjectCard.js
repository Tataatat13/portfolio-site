import { Col } from "react-bootstrap"



export const ProjectCard = ({title, description, img, url}) => {
    return (
        <Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img src={img} alt="img2"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <button><a href={url} target="blank">See more</a></button>
                </div>

            </div>
        </Col>
    )
}