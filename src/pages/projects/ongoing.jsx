import React, { useState, useEffect } from 'react';

const Ongoing = () => {
  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [images4, setImages4] = useState([]);
  const [images5, setImages5] = useState([]);
  const [images6, setImages6] = useState([]);
  const [images7, setImages7] = useState([]);
  const [images8, setImages8] = useState([]);
  const [images9, setImages9] = useState([]);    
  const [images10, setImages10] = useState([]); 

  useEffect(() => {
    const importImages = async () => {
      const imageFiles = import.meta.glob('../../assets/ongoing/hunza/*.{jpg,png,jpeg}');
      const imageUrls = await Promise.all(
        Object.keys(imageFiles).map(async (key) => {
          const module = await imageFiles[key]();
          return module.default;
        })
      );
      setImages(imageUrls);
    };
    //2
    const importImages2 = async () => {
      const imageFiles2 = import.meta.glob('../../assets/ongoing/hmr/*.{jpg,png,jpeg}');
      const imageUrls2 = await Promise.all(
        Object.keys(imageFiles2).map(async (key) => {
          const module = await imageFiles2[key]();
          return module.default;
        })
      );
      setImages2(imageUrls2);
    };
    // 3
    const importImages3 = async () => {
      const imageFiles3 = import.meta.glob('../../assets/ongoing/peshawar/*.{jpg,png,jpeg}');
      const imageUrls3 = await Promise.all(
        Object.keys(imageFiles3).map(async (key) => {
          const module = await imageFiles3[key]();
          return module.default;
        })
      );
      setImages3(imageUrls3);
    };
    // 4
    const importImages4 = async () => {
      const imageFiles4 = import.meta.glob('../../assets/ongoing/indus/*.{jpg,png,jpeg}');
      const imageUrls4 = await Promise.all(
        Object.keys(imageFiles4).map(async (key) => {
          const module = await imageFiles4[key]();
          return module.default;
        })
      );
      setImages4(imageUrls4);
    };
    //5
    const importImages5 = async () => {
      const imageFiles5 = import.meta.glob('../../assets/ongoing/siut/*.{jpg,png,jpeg}');
      const imageUrls5 = await Promise.all(
        Object.keys(imageFiles5).map(async (key) => {
          const module = await imageFiles5[key]();
          return module.default;
        })
      );
      setImages5(imageUrls5);
    };
    //6
    const importImages6 = async () => {
      const imageFiles6 = import.meta.glob('../../assets/ongoing/getz/*.{jpg,png,jpeg}');
      const imageUrls6 = await Promise.all(
        Object.keys(imageFiles6).map(async (key) => {
          const module = await imageFiles6[key]();
          return module.default;
        })
      );
      setImages6(imageUrls6);
    };
    //7
    const importImages7 = async () => {
      const imageFiles7 = import.meta.glob('../../assets/ongoing/qaddafi/*.{jpg,png,jpeg}');
      const imageUrls7 = await Promise.all(
        Object.keys(imageFiles7).map(async (key) => {
          const module = await imageFiles7[key]();
          return module.default;
        })
      );
      setImages7(imageUrls7);
    };
    //8
    const importImages8 = async () => {
      const imageFiles8 = import.meta.glob('../../assets/ongoing/salim/*.{jpg,png,jpeg}');
      const imageUrls8 = await Promise.all(
        Object.keys(imageFiles8).map(async (key) => {
          const module = await imageFiles8[key]();
          return module.default;
        })
      );
      setImages8(imageUrls8);
    };
    //9
    const importImages9 = async () => {
      const imageFiles9 = import.meta.glob('../../assets/ongoing/nicvd/*.{jpg,png,jpeg}');
      const imageUrls9 = await Promise.all(
        Object.keys(imageFiles9).map(async (key) => {
          const module = await imageFiles9[key]();
          return module.default;
        })
      );
      setImages9(imageUrls9);
    };
    //10
    const importImages10 = async () => {
      const imageFiles10 = import.meta.glob('../../assets/ongoing/imtiaz_sahiwal/*.{jpg,png,jpeg}');
      const imageUrls10 = await Promise.all(
        Object.keys(imageFiles10).map(async (key) => {
          const module = await imageFiles10[key]();
          return module.default;
        })
      );
      setImages10(imageUrls10);
    };


    importImages();
    importImages2();
    importImages3();
    importImages4();
    importImages5();
    importImages6();
    importImages7();
    importImages8();
    importImages9();
    importImages10();

  }, []);

  return (
    <>
      <div className="ongoing-container nav-space">
        <div className="header">
          <h2 className="title">Ongoing Projects</h2>
          <p className="completed-link">
            Want to see our completed projects? Click below
          </p>
          <a href="/projects/completed" className="completed-button">
            Completed Projects
          </a>
        </div>
        <div className="projects-description">
          <p>We are currently working on the following projects making sure to deliver excellence...</p>
        </div>
        <hr />
        {/* hunza slider*/}
        <div id="carouselContainer" className="CarouselContainer">
          <h3>Serena Hotel - Hunza</h3>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />
        
        {/* hmr slider */}
        <div id="carouselContainer2" className="CarouselContainer">
          <h3>HMR WaterFront</h3>
          <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images2.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images2.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />

        {/* Serena peshawar 3 */}
        <div id="carouselContainer3" className="CarouselContainer">
          <h3>Serena Hotel - Peshawar</h3>
          <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images3.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators3"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images3.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        
        {/* indus hospital 4*/}
        <div id="carouselContainer4" className="CarouselContainer">
          <h3>Indus Hospital</h3>
          <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images4.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators4"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images4.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        {/* siut 5*/}
        <div id="carouselContainer5" className="CarouselContainer">
          <h3>SIUT</h3>
          <div id="carouselExampleIndicators5" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images5.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators5"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images5.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        {/* getz 6 */}
        <div id="carouselContainer6" className="CarouselContainer">
          <h3>Getz Pharma</h3>
          <div id="carouselExampleIndicators6" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images6.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators6"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images6.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        {/* gaddafi */}
        <div id="carouselContainer7" className="CarouselContainer">
          <h3>Gaddafi Stadium</h3>
          <div id="carouselExampleIndicators7" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images7.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators7"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images7.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        {/* salim habib */}
        <div id="carouselContainer8" className="CarouselContainer">
          <h3>Salim Habib</h3>
          <div id="carouselExampleIndicators8" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images8.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators8"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images8.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        {/* nicvd */}
        {/* <div id="carouselContainer9" className="CarouselContainer">
          <h3>NICVD</h3>
          <div id="carouselExampleIndicators9" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images9.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators9"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images9.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr /> */}
        {/* imtiaz Sahiwal*/}
        <div id="carouselContainer10" className="CarouselContainer">
          <h3>Imtiaz - Sahiwal</h3>
          <div id="carouselExampleIndicators10" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div className="carousel-indicators">
              {images10.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators10"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images10.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* sliders end */}

      </div>
    </>

  );
};
export default Ongoing;


