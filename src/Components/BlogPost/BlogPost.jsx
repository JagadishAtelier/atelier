import React, { useState,useEffect } from "react";
import "./BlogPost.css";
import { useNavigate } from "react-router-dom";
const categories = ["All Articles", "Marketing", "Technology"];
import { useRef } from "react";
const blogData = [
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b539de150af8f39e190f83_Frame%202147224714%20(5).png",
    name: "Gorala",
    advice: "Get Client",
    category: "Marketing",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b539b9dd812adb6f4d6c2b_Frame%202147224714%20(4).png",
    name: "Discussions on quality",
    advice: "Get Client",
    category: "Technology",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b539740b86116385ad7809_Frame%202147224714%20(3).png",
    name: "Quality Conversation",
    advice: "Get Client",
    category: "Technology",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67d08b43c03942c0e6dc6d16_Modern%20Geometric%20Composition.png",
    name: "Talks about quality",
    advice: "Get Client",
    category: "Technology",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a597a28e6f1810a47a0_Frame%202147224714%20(7).png",
    name: "Conversation",
    advice: "Get Client",
    category: "Marketing",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6).png",
    name: "What brand iconic",
    advice: "Get Client",
    category: "Marketing",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53941cabe76fefc15c0f7_Frame%202147224714%20(2).png",
    name: "Getting freelance work",
    advice: "Get Client",
    category: "Technology",
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53911ea2895e19ce3ca49_Frame%202147224714%20(1).png",
    name: "How to get bigger projects",
    advice: "Get Client",
    category: "Technology",
  },
];

function BlogPost() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
    const navigate = useNavigate()
    const sliderRef = useRef(null);
  
  const filteredData =
    selectedCategory === "All Articles"
      ? blogData
      : blogData.filter((item) => item.category === selectedCategory);
      useEffect(() => {
        const interval = setInterval(() => {
          if (sliderRef.current) {
            const scrollAmount = window.innerWidth <= 768 
              ? sliderRef.current.clientWidth 
              : 340; // fallback for desktop
      
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      
            if (scrollLeft + clientWidth >= scrollWidth) {
              sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
          }
        }, 300000000);
      
        return () => clearInterval(interval);
      }, [filteredData]);
      
      const scrollSlider = (direction) => {
        const scrollAmount = window.innerWidth <= 768 
          ? sliderRef.current.clientWidth 
          : 340;
      
        if (sliderRef.current) {
          sliderRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
          });
        }
      };
      
      
      
  return (
    <div className=" blog-container">

      <div className="blog-tabs">
        <div className="blog-head-and-tabs">
        <div className="blog-section-content">
            <h2 className="blog-main-heading">Featured Posts</h2>
        </div>
        <div className="blog-tabs-menu">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`singel-tab-link w-tab-link ${
                selectedCategory === cat ? "w--current" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        </div>
                {/* Slider Controls */}
                <div className="blog-slider-controls">
          <button onClick={() => scrollSlider("left")} className="slider-btn">‹</button>
          <button onClick={() => scrollSlider("right")} className="slider-btn">›</button>
        </div>
        <div className="blog-collection-list"ref={sliderRef}>
    {[...filteredData, ...filteredData].map((post, idx) => (
      <div className="blog-collection-item" key={idx + post.name}>
        <div className="blog-card" onClick={()=>navigate(`/blog/${post.name}`,{state:{post}})} style={{cursor:"pointer"}}>
          <div className="blog-image-wrapper">
            <img
              src={post.image}
              alt="Blog"
              className="blog-image"
            />
          </div>
          <div className="blog-content" style={{ backgroundColor: "#f9f4ff" }}>
            <div className="blog-content-flex">
              <p className="blog-titile" style={{ color: "#050505" }}>
                {post.name}
              </p>
              <div className="blog-category-text-wrapper">
                <p className="blog-category-text" style={{ color: "#727272" }}>
                  Advice
                </p>
                <p className="blog-category-text" style={{ color: "#727272" }}>
                  {post.advice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}

</div>

      </div>
    </div>
  );
}

export default BlogPost;