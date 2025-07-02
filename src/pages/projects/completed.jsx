import React from 'react';
import Nishtar from '../../assets/completed/nishtar.jpg';
import Fauji from '../../assets/completed/fauji.jpg';
import Tpl from '../../assets/completed/tpl.jpg';
import Airport from '../../assets/completed/airport.jpg';
import Hbl from '../../assets/completed/hbl.jpg';
import Sukh from '../../assets/completed/sukh.jpg';


const Completed = () => {
  return (
    <div className="ongoing-container nav-space">
      <div className="header">
        <h2 className="title">Completed Projects</h2>
        <p className="completed-link">
          Want to see ongoing projects? Click below </p>
        <a href="/projects/ongoing" className="completed-button">
          Ongoing Projects
        </a>
      </div>
      <div className="projects-description">
        <p>We have had the pleasure of working on the following projects throughout the decades...</p>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Airport} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src={Fauji} className="d-block w-100" alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src={Tpl} className="d-block w-100" alt="Third Slide" />
          </div>
          <div className="carousel-item">
            <img src={Nishtar} className="d-block w-100" alt="fourth Slide" />
          </div>
          <div className="carousel-item">
            <img src={Sukh} className="d-block w-100" alt="fifth Slide" />
          </div>
          <div className="carousel-item">
            <img src={Hbl} className="d-block w-100" alt="sixth Slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      <hr />
    </div>
  );
}

export default Completed;
