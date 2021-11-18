import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Footer.css';
import logo from '../../../logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer-bg mt-5'>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className='footer-section'>
                            <img className='img-fluid' style={{ height: '60px', borderRadius: "5px" }} src={logo} alt="" />
                            <p className="p-2">You can register here in variety of events. Call for more information 357-257-2021 available 24/7.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='footer-section'>
                            <h2 className='fw-bold text-primary'>Contact us</h2>
                            <p><i className="fas fa-map-marker icon-color me-2"></i> 02540, Dhaka, Gulsan, 12/3</p>
                            <p><i className="fas fa-phone-alt icon-color me-2"></i> 801-44-6533-99</p>
                            <p><i className="fas fa-envelope icon-color me-2"></i> admin@admin.com</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='footer-section'>
                            <h2 className="text-primary">Socials Media</h2>
                            <div>
                                <Link className='d-block footer-link' to="/"><i className="fab fa-facebook-square icon-color me-2"></i> Like our Facebook page</Link>
                                <Link className='d-block footer-link' to="/"><i className="fab fa-youtube-square icon-color me-2"></i> Subscribe our YouTube chanel</Link>
                                <Link className='d-block footer-link' to="/"><i className="fab fa-instagram icon-color me-2"></i> Follow on Instagram</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: '#000000' }} className='py-3 text-white text-center'>
                <p className='text-white mt-2'>Copyright &copy; by  <span className='text-primary '>Monjurur Kader Shipu</span></p>
            </div>
        </div>
    );
};

export default Footer;