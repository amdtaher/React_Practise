import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPhone, FaCalendar, FaLocationArrow, FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';


const Footer = () => {
    const Variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }
  return (
    <>
        <Container fluid={true} className='footerMain pyb-5'>
            <Container className='footer'>
                <motion.div
                variants={Variants}
                viewport={false}
                initial='hidden'
                whileInView='visible'
                >
                            <Row>
                                <Col>
                                    <div className='footerLeft'>
                                    <h4 className='mb-3'>Vanue Location</h4>
                                    <ul className='footerUl'>
                                        <li><a href="#"><FaCalendar className='me-2'/> 23-27 Jan, 2024</a></li>
                                        <li><a href="#"><FaLocationArrow className='me-2'/> yellow-green street, USA</a></li>
                                        <li><a href="#"><FaPhone className='me-2'/> +880 123 4567 7890</a></li>
                                    </ul>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='footerRight'>
                                        <h4 className='mb-3'>Social Connection</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem repellendus quisquam, nesciunt ab itaque ipsam quidem dolores quaerat similique voluptatibus.</p>
                                        <ul className='footerSocial'>
                                            <li><a href="#"><FaFacebook className='me-2' size={30}/></a></li>
                                            <li><a href="#"><FaInstagram className='me-2' size={30}/></a></li>
                                            <li><a href="#"><FaTwitch className='me-2' size={30}/></a></li>
                                            <li><a href="#"><FaYoutube className='me-2' size={30}/></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Row>
                                    <Col>
                                        <div className='footerBottom text-center'>
                                            <h4>Evnia</h4>
                                            <ul className='footerBottomUl'>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Blog</a></li>
                                            </ul>
                                            <p>Copyright  2022 Evnia. All rights reserved</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                </motion.div>
            </Container>
        </Container>
    </>
  )
}

export default Footer