import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";
import './gallery.scss'

const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
  };

  return (
    <div id='gallery-section' className="gallery-section min-vh-100">
      <Container>
        {openModal && (
          <div className="sliderWrap">
            <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal} />
            <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide} />
            <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide} />
            <div className="fullScreenImage">
              <img src={galleryImages[slideNumber].img} alt="" />
            </div>
          </div>
        )}

        <div className="section-title">
          <h3>Momentos compartidos con nuestros hermanos</h3>
        </div>

        <div className="galleryWrap">
          <Row className="image-container">
            {galleryImages &&
              galleryImages.map((slide, index) => {
                return (
                  <Col md={4} key={index} >
                    <div className="single" onClick={() => handleOpenModal(index)}>
                      <img src={slide.img} alt="" />
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
