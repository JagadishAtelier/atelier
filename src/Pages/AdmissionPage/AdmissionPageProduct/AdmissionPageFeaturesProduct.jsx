import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function AdmissionPageFeaturesProduct() {
  const slides = [
    {
      img: 'https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683060e285adcdb24eb10956_thumb-19.webp',
      title: 'Seamless Online Admissions',
      text: 'Provide applicants with an easy, fully digital admission process – from application submission and document verification to fee payment and offer letters.',
    },
    {
      img: 'https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683060e285adcdb24eb10956_thumb-19-p-1080.webp',
      title: 'Smart Academic Management',
      text: 'Manage courses, faculty assignments, student attendance, and performance tracking in one centralized platform built for scalability.',
    },
    {
      img: 'https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/683060e285adcdb24eb10956_thumb-19-p-800.webp',
      title: 'Analytics & Insights',
      text: 'Generate real-time reports on admissions, academic progress, and student engagement to make data-driven academic decisions.',
    },
  ];

  return (
    <div className="pro-product-section">
      <div className="pro-section-spacing">
        <div className="pro-container">
          <div className="pro-section-heading product-heading">
            <div className="pro-c-sub-title-wrap-2">
              <div className="pro-c-sub-title-2">Atelier Demo</div>
            </div>
            <div className="pro-common-title-wrap">
              <h1 className="pro-common-title white">
              Experience streamlined admissions and academic excellence
              </h1>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="pro-product-layout">
                  <div className="pro-product-thumb-wrap">
                    <img
                      src={item.img}
                      alt={`thumb-${index}`}
                      className="pro-product-thumb"
                      loading="lazy"
                    />
                  </div>
                  <div className="pro-product-content">
                    <div className="pro-product-title-wrap">
                      <h2 className="pro-product-title">{item.title}</h2>
                    </div>
                    <div className="pro-product-text-wrap">
                      <p className="pro-product-text">{item.text}</p>
                    </div>
                    <div className="pro-product-btn-wrap">
                      <a href="/contact" className="pro-btn-wrap pro-product-btn w-inline-block">
                        <div className="pro-btn-inner">
                          <div>Book a demo</div>
                          <div className="pro-btn-icon-wrap">
                            <div className="pro-btn-icon w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 14 14">
                                <path
                                  d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div className="pro-btn-icon w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 14 14">
                                <path
                                  d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="pro-c-shape-wrap">
        <img
          src="https://cdn.prod.website-files.com/681e379395f5c7d43dcb3760/6825afd604c55a8038261f5b_f-shape.webp"
          alt="f-shape"
          className="pro-c-shape"
        />
      </div>
    </div>
  );
}

export default AdmissionPageFeaturesProduct;
