import React from 'react'
import './BlogDetails.css'
import { useParams, useLocation } from "react-router-dom";
function BlogDetails() {
  const { name } = useParams();
  const location = useLocation();

  const post = location.state?.post;
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
              src="https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6).png"
              loading="lazy"
              data-w-id="3f229605-1329-4587-7c9a-1cc98d30ffc3"
              alt="Blog Details Image"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              srcset="
                https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6)-p-500.png 500w,
                https://cdn.prod.website-files.com/67a39d8671f8e918b2289409/67b53a073db066565406c335_Frame%202147224714%20(6).png       698w
              "
              className="blog-details-image"
            />
            <div
              data-w-id="466bea10-1368-0095-c11c-07e357202371"
              className="blog-details-content w-richtext"
            >
              <h3>Introducing Our Project Management Solution</h3>
              <p>
                In today’s fast-paced business world, investing in
                Software-as-a-Service (SaaS) can provide your company with
                unmatched flexibility, scalability, and efficiency. However,
                simply adopting SaaS solutions isn&#x27;t enough. To truly
                unlock the potential of your investment, you need to maximize
                your ROI. In this blog, we&#x27;ll explore seven proven
                strategies that can help you get the most value from your SaaS
                tools.
              </p>
              <ul role="list">
                <li>
                  <strong>Task Management :</strong> Easily create, assign, and
                  track tasks in one centralized platform. With customizable
                  task lists, deadlines, and priorities, you can stay organized
                  and ensure nothing falls through the cracks.
                </li>
                <li>
                  <strong>Team Collaboration:</strong> Foster collaboration
                  among team members with real-time communication tools. Share
                  updates, files, and feedback seamlessly, keeping everyone
                  aligned and informed throughout the project lifecycle.
                </li>
                <li>
                  <strong>Time Tracking :</strong> Foster collaboration among
                  team members with real-time communication tools. Share
                  updates, files, and feedback seamlessly, keeping everyone
                  aligned and informed throughout the project lifecycle.
                </li>
                <li>
                  <strong>Resource Management :</strong> Foster collaboration
                  among team members with real-time communication tools. Share
                  updates, files, and feedback seamlessly, keeping everyone
                  aligned and informed throughout the project lifecycle.
                </li>
              </ul>
              <h4>Integrate with What You’ve Already Got</h4>
              <p>
                There’s nothing worse than software that doesn’t play nice with
                your other tools. Integrating your SaaS platforms with your
                existing systems (CRM, email marketing, project management
                tools) makes data sharing seamless, reduces friction, and
                streamlines operations.
              </p>
              <p>
                <strong>Why It Matters :</strong> An integrated SaaS solution
                means less manual data entry and more time for what really
                matters. It&#x27;s tempting to sign up for every shiny new SaaS
                tool you come across. But the reality is, if you don’t clearly
                define your needs, you could end up with a bunch of tools that
                don’t work together or aren’t needed at all.
              </p>
              <p>
                <strong>Pro tip :</strong> An integrated SaaS solution means
                less manual data entry and more time for what really matters. No
                matter how powerful your SaaS tool is, it’s only effective if
                your team knows how to use it. A common mistake is assuming that
                everyone will “figure it out” on their own. Spoiler alert: They
                won’t.
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
              <p>
                SaaS tools are packed with automation features. Think of it as
                your personal assistant, handling repetitive tasks like sending
                emails, generating reports, or scheduling meetings. By
                automating, you free up your team to focus on higher-value
                tasks.
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
