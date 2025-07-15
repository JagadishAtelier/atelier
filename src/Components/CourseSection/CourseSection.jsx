import React, { useState, useEffect } from 'react';
import './CourseSection.css';

const features = [
  {
    icon: 'bi-easel2-fill',
    title: 'An Integrated virtual classroom',
    description: 'A virtual classroom is a learning environment in which students (customers, partners, or any third-party) engage with the lesson material online.',
  },
  {
    icon: 'bi-journal-text',
    title: 'Assessment Creation and Management',
    description: 'Ability to create new questions/assessments - including support for various question types, randomization of MCQs, and importing third-party question banks etc.',
  },
  {
    icon: 'bi bi-person-video',
    title: 'Video Conferencing',
    description: 'Connect, collaborate, and communicate - anywhere, anytime. High-quality video, clear audio, and real-time screen sharing. Stay productive, stay connected.',
  },
  {
    icon: 'bi bi-laptop',
    title: 'Flexible Course Delivery',
    description: 'Deliver self-paced or instructor-led courses with ease, supporting videos, PDFs, quizzes, and interactive content.',
  },
  {
    icon: 'bi bi-graph-up',
    title: 'Performance Analytics',
    description: 'Track learner progress, quiz performance, and overall engagement using detailed reports and dashboards.',
  },
];

function CourseSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = features.length;

  const getVisibleFeatures = () => {
    const endIndex = startIndex + visibleCards;
    if (endIndex <= totalCards) {
      return features.slice(startIndex, endIndex);
    } else {
      return [...features.slice(startIndex), ...features.slice(0, endIndex % totalCards)];
    }
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lms-section">
      <h2 className="lms-title">Comprehensive Learning Management System</h2>
      <p className="lms-subtitle">
        Nova LMS is a powerful and flexible platform designed to enhance online learning and training experiences.
        It enables seamless course management, learner engagement, performance tracking, and content delivery.
      </p>

      <div className="lms-features-wrapper">
        <button className="lms-arrow-button left" onClick={handlePrev}>
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="carousel-viewport">
          <div className="carousel-track" style={{ display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
            {getVisibleFeatures().map((feature, index) => (
              <div key={index} className="lms-feature-card">
                <div className="lms-feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h3 className="lms-feature-title">{feature.title}</h3>
                <p className="lms-feature-desc">{feature.description}</p>
                <button className="lms-learn-more">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        <button className="lms-arrow-button right" onClick={handleNext}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default CourseSection;
