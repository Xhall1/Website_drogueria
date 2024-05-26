import React from "react";
import Slider from "react-slick";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Button from "../Shared/Button";

const AboutUsCarouselData = [
  {
    id: 1,
    img: "./assets/images/Entrega.png",
    subtitle: "Entrega rápida",
    title: "Donde",
    title2: "Te encuentres!",
  },
  {
    id: 2,
    img: "./assets/images/R.png",
    subtitle: "Compra segura",
    title: "Protegida",
    title2: "Con nosotros",
  },
  {
    id: 3,
    img: "./assets/images/atencion.png",
    subtitle: "Ten",
    title: "Atención",
    title2: "Al cliente",
  },
  {
    id: 4,
    img: "./assets/images/dinero.png",
    subtitle: "Descuentos Exclusivos",
    title: "Productos de Confianza",
    title2: "Mejor Salud",
  },
];

const AboutUs = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="container mb-16">
      <h1 className="text-5xl text-center font-semibold mb-12" style={{ color: "#3abeb9" }}>
        Drogueria Multiservicios
      </h1>
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center mb-16">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {AboutUsCarouselData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-4xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[100px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aps-duration="500"
                      data-aos-delay="300"
                    >
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <div className="image-container">
                        <img
                          src={data.img}
                          alt={data.title2}
                          className="w-full h-auto object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 transform hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Skills />
      <br />
      <br />
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <Footer className="full-height" />
    </div>
  );
};

export default AboutUs;
