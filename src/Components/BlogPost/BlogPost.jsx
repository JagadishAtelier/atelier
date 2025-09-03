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
    introHeading:"Why Gorala Matters in Marketing",
    introPara:`Gorala represents the importance of standing out in a crowded market. 
    A unique identity helps brands connect better with customers.`,
    listData:[
      { str:"Brand Recognition:", strPara:"Customers remember what is distinct." },
      { str:"Consistency:", strPara:"Strong marketing is built on consistency." },
      { str:"Engagement:", strPara:"Unique approaches capture attention." },
      { str:"Trust:", strPara:"Authenticity builds long-term loyalty." },
    ],
    secHeading : "Our Approach with Gorala",
    secPara:`We design strategies that emphasize originality, ensuring brands 
    remain memorable and relevant.`,
    thrHeading : "Why It Works",
    thrPara:`A balance of creativity and strategy makes campaigns effective.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Marketing is not only about visibility—it’s about making a lasting impression.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b539b9dd812adb6f4d6c2b_Frame%202147224714%20(4).png",
    name: "Discussions on quality",
    advice: "Get Client",
    category: "Technology",
    introHeading:"Why Quality Conversations Matter",
    introPara:`Open discussions about quality help teams align and raise the bar together.`,
    listData:[
      { str:"Transparency:", strPara:"Sharing insights openly improves processes." },
      { str:"Collaboration:", strPara:"Discussions encourage knowledge exchange." },
      { str:"Problem Solving:", strPara:"Quality issues are solved faster together." },
      { str:"Growth:", strPara:"Each discussion builds a culture of learning." },
    ],
    secHeading : "Creating Spaces for Quality Talks",
    secPara:`We use open forums, retrospectives, and feedback channels.`,
    thrHeading : "The Benefit",
    thrPara:`Such practices ensure quality is everyone’s responsibility.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Quality grows when it’s a shared conversation, not a checklist.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b539740b86116385ad7809_Frame%202147224714%20(3).png",
    name: "Quality Conversation",
    advice: "Get Client",
    category: "Technology",
    introHeading:"Conversations That Drive Quality",
    introPara:`Every meaningful change begins with the right conversation.`,
    listData:[
      { str:"Listening:", strPara:"Understanding others leads to better solutions." },
      { str:"Feedback:", strPara:"Feedback shapes stronger deliverables." },
      { str:"Clarity:", strPara:"Conversations align expectations." },
      { str:"Commitment:", strPara:"Talks translate into action when commitments are made." },
    ],
    secHeading : "Facilitating Meaningful Conversations",
    secPara:`Our approach is to encourage openness, respect, and curiosity.`,
    thrHeading : "Results",
    thrPara:`The outcome is stronger teams and higher-quality outcomes.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Quality conversations transform work environments into thriving cultures.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67d08b43c03942c0e6dc6d16_Modern%20Geometric%20Composition.png",
    name: "Talks about quality",
    advice: "Get Client",
    category: "Technology",
    introHeading:"Why Quality Matters in Everything We Do",
    introPara:`Quality isn’t just a standard—it’s a mindset. Whether it’s the products we 
    build, the services we deliver, or the relationships we nurture, quality 
    defines trust and long-term success.`,
    listData:[
      { str:"Attention to Detail:", strPara:"Quality begins with the small things." },
      { str:"Consistency:", strPara:"True quality is repeatable." },
      { str:"Continuous Improvement:", strPara:"It’s about learning, adapting, and raising the bar every day." },
      { str:"Customer-Centric Approach:", strPara:" High-quality work keeps customer satisfaction at the center." },
    ],
    secHeading : "How We Uphold Quality Standards",
    secPara:`Our team follows a culture of accountability and innovation through rigorous 
    testing, regular feedback, and industry best practices.`,
    thrHeading : "How We Uphold Quality Standards",
    thrPara:`Our team follows a culture of accountability and innovation through rigorous 
    testing, regular feedback, and industry best practices.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Ultimately, quality is more than a measure—it’s a promise to never compromise, 
    to keep evolving, and to deliver excellence that speaks for itself.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a597a28e6f1810a47a0_Frame%202147224714%20(7).png",
    name: "Conversation",
    advice: "Get Client",
    category: "Marketing",
    introHeading:"The Role of Conversations in Marketing",
    introPara:`Marketing thrives on meaningful conversations that build relationships.`,
    listData:[
      { str:"Connection:", strPara:"Real conversations build human bonds." },
      { str:"Trust:", strPara:"Conversations create authenticity." },
      { str:"Engagement:", strPara:"Customers respond to genuine dialogue." },
      { str:"Insights:", strPara:"Conversations uncover what customers value most." },
    ],
    secHeading : "Our Conversation-Driven Strategy",
    secPara:`We make conversations the core of our brand communication.`,
    thrHeading : "Impact",
    thrPara:`Better conversations lead to deeper connections.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Conversation is not small talk—it’s the bridge to customer loyalty.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6).png",
    name: "What brand iconic",
    advice: "Get Client",
    category: "Marketing",
    introHeading:"What Makes a Brand Iconic?",
    introPara:`Iconic brands stand out because they resonate deeply with people.`,
    listData:[
      { str:"Consistency:", strPara:"Iconic brands deliver the same experience every time." },
      { str:"Emotion:", strPara:"They connect with people emotionally." },
      { str:"Recognition:", strPara:"A clear identity makes them unforgettable." },
      { str:"Trust:", strPara:"They keep promises and earn loyalty." },
    ],
    secHeading : "Building an Iconic Brand",
    secPara:`We focus on authenticity, storytelling, and customer experience.`,
    thrHeading : "The Result",
    thrPara:`Brands evolve from known to iconic when they inspire trust and admiration.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Being iconic means being memorable for the right reasons.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53941cabe76fefc15c0f7_Frame%202147224714%20(2).png",
    name: "Getting freelance work",
    advice: "Get Client",
    category: "Technology",
    introHeading:"How to Get Freelance Work Effectively",
    introPara:`Freelancing is about skill, visibility, and building trust.`,
    listData:[
      { str:"Portfolio:", strPara:"Showcasing strong work attracts clients." },
      { str:"Networking:", strPara:"Connections bring new opportunities." },
      { str:"Consistency:", strPara:"Delivering quality builds referrals." },
      { str:"Growth:", strPara:"Continuous learning keeps freelancers competitive." },
    ],
    secHeading : "Freelancing Strategies",
    secPara:`From platforms to referrals, freelancers need multiple channels.`,
    thrHeading : "Why Freelancing Works",
    thrPara:`It gives independence while rewarding responsibility.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Freelance success comes from persistence, patience, and professionalism.`
  },
  {
    image: "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53911ea2895e19ce3ca49_Frame%202147224714%20(1).png",
    name: "How to get bigger projects",
    advice: "Get Client",
    category: "Technology",
    introHeading:"Landing Bigger Projects with Confidence",
    introPara:`Bigger projects require preparation, credibility, and the right mindset.`,
    listData:[
      { str:"Expertise:", strPara:"Show proven results in your niche." },
      { str:"Trust:", strPara:"Big clients look for reliable partners." },
      { str:"Value:", strPara:"Offer solutions that create measurable impact." },
      { str:"Pitching:", strPara:"Clear proposals close bigger deals." },
    ],
    secHeading : "Steps to Win Bigger Projects",
    secPara:`Focus on building case studies, strong networks, and tailored pitches.`,
    thrHeading : "Outcome",
    thrPara:`Winning big projects scales growth and credibility.`,
    midImg : "https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png",
    endPara : `Big opportunities come when preparation meets persistence.`
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
        }, 3000);
      
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
    <div className=" blog-container" >

      <div className="blog-tabs">
        <div className="blog-head-and-tabs" data-aos="fade-right">
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
      <div className="blog-collection-item" key={idx + post.name} data-aos={idx % 2 === 0 ? "fade-up" : "fade-down"}>
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