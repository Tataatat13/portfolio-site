import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import headerImg from "../assets/img/head img.svg";
import resume from "../assets/img/cv.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [text, setText] = useState('');
    const period = 2000;
    const toRotate = useMemo(() => ["Natalia", "Web Developer"], []);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
    
        setText(updateText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [loopNum, toRotate, text, isDeleting, period]);
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () => {
            clearInterval(ticker);
        };
    }, [tick, delta]);
    
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm `} <span className="wrap">{text}</span></h1>
                    <p>Web developer specializing in creating responsive, user-centered websites with expertise in modern frameworks, a passion for clean code, and a track record of delivering impactful digital solutions.</p>
                    <a href={resume}> <button onClick={()=> console.log('connect')}>Download CV <BsArrowRightCircle size={25}/> </button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}