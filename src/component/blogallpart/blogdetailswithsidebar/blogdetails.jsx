"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from 'react-player'
import dynamic from "next/dynamic";
import { CommentsData } from "@/alldata/commentsdata";
import { useFormik } from "formik";
import { blog_comments } from "@/component/validation/allformvalidation";

//blog details img
import blog_img1 from "../../../../public/assets/image/paginationimg/pagi_1.jpg";

function BlogDetails() {
  const initialState = {
    name: "",
    email: "",
    comment: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: blog_comments,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const { errors, touched } = formik;
  return (
    <div className="blg-details">
      <div className="blg-dtls-elements">
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring.
          <br />
          <br />
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps.
        </p>
        <div className="ns-blg-dtls-img">
          <Image
            src={blog_img1}
            alt="blog-details-img"
            className="img"
            priority={true}
          />
        </div>
        <h3>Collaboratively administrate empowered.</h3>
        <p>
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximise the long tail. Keeping your eye on the ball while
          performing a deep dive on the start-up mentality to derive convergence
          on cross-platform integration.
          <br />
          <br />
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI.
          <br />
          <br />
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximise the long tail.
        </p>
        <h3>Blog video post can also added.</h3>

        <div className="ns-blg-dtls-video">
          <ReactPlayer
            url="https://youtu.be/vGOL7ZvuGMc"
            controls={true}
            className="ns-blg-dtls-vdo"
          />
        </div>
        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
        <div className="ns-blg-dtls-dr-qoutes">
          <h4>Integer accumsan arcu ligula, eget dictum augue egestas sed. Curabitur bibendum, lorem ac dapibus pellentesque, justo lectus bibendum enim.</h4>
          <p className="ns-dr-name">by:<span>Mark Parker</span></p>
        </div>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use passage of Lorem Ipsum.</p>
        <h3>Phosfluorescently engage worldwide?</h3>
        <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p>
        <div className="ns-blg-dtls-img2"></div>
        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
      </div>
      <div className="ns-blg-dtls-tags">
          <h3>Tags:</h3>
          <button>Apps</button>
          <button>php</button>
          <button>web</button>
          <button>business</button>
          <button>Development</button>
      </div>
      <div className="ns-blg-dtls-comments">
        <h3>Coments (3)</h3>
        {
          CommentsData.map((item, i)=>(
            <div className="ns-blg-cmnts" key={i}>
                <div className="ns-cmnts-img">
                  <Image src={item.img} alt="blog-comment-img" className="blg-cmnts-img" priority={true}/>
                </div>
                <div className="ns-cmnts-text">
                  <h4>{item.name}</h4>
                  <span>{item.date}</span>
                  <p>{item.commnet}</p>
                </div>
              </div>
          ))
        }
      </div>
      <div className="ns-comment-box">
        <h3>Add your comment</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="ns-comments">
            <div className="ns-comments-input">
              <label>Name</label>
              <input type="text" placeholder="Type your name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
              {errors.name && touched.name && (
                <p className="cmnt-errors">{errors.name}</p>
              )}
            </div>
            <div className="ns-comments-input">
              <label>Email</label>
              <input type="email" placeholder="Type your email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
              {errors.email && touched.email && (
                <p className="cmnt-errors">{errors.email}</p>
              )}
            </div>
          </div>
            <div className="ns-comments-textarea">
              <label>Comments</label>
              <textarea type="text" name="comment" placeholder="Comments here.." value={formik.values.comment} onChange={formik.handleChange}></textarea>
              {errors.comment && touched.comment && (
                  <p className="cmnt-errors">{errors.comment}</p>
                )}
            </div>
            <div className="ns-cmnts-btn">
              <button type="submit">Send Message</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default dynamic (() => Promise.resolve(BlogDetails), {ssr: false})
