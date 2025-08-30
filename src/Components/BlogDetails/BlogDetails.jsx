import React,{useEffect} from 'react'
import './BlogDetails.css'
import { useParams, useLocation } from "react-router-dom";
function BlogDetails() {
  const { name } = useParams();
  const location = useLocation();

  const post = location.state?.post;
  useEffect(() => {
    console.log("Post object:", post);
    console.log("Data structure:", JSON.stringify(post, null, 2)); 
  }, [post]);
  
  return (
    <div className='blog-details-container'>
        <section className="blog-detailss">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-content-wrapper about">
            <div className="hero-inner primary">
              <p
                data-w-id="7e231d23-1926-f201-2f97-ce9ecb2049a9"
                className="blog-category"
              >
                Article
              </p>
              <h1
                data-w-id="ce98636e-5135-7d16-95f6-7ac9c520e22a"
                className="post-title align-center"
              >
                {post?.name}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section blog-detail">
        <div className="w-layout-blockcontainer container-blog-details w-container">
          <div className="blog-details-content-flex">
            <img
              src={post?.image}
              loading="lazy"
              data-w-id="3f229605-1329-4587-7c9a-1cc98d30ffc3"
              alt="Blog Details Image"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              // srcset="
              //   https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6)-p-500.png 500w,
              //   https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6).png       698w
              // "
              className="blog-details-image"
            />
            <div
              data-w-id="466bea10-1368-0095-c11c-07e357202371"
              className="blog-details-content w-richtext"
            >
              <h3>{post?.introHeading}</h3>
              <p>{post?.introPara}
              </p>
              <ul role="list">
    {post?.listData?.map((item, index) => (
      <li key={index}>
        <strong>{item.str}</strong> {item.strPara}
      </li>
    ))}
  </ul>
              <h4>{post?.secHeading}</h4>
              <p>{post?.secPara}
              </p>
              <h4>{post?.thrHeading}</h4>
              <p>{post?.thrPara}
              </p>
              <figure
                style={{maxWidth: '1796px'}}
                className="w-richtext-align-fullwidth w-richtext-figure-type-image"
              >
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b4c3e2eeff90813b57cae9_Frame%202147224664%20(1).png"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </figure>
              <p>{post?.endPara}
              </p>
              <h3>‍</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetails
