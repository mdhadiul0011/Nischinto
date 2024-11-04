"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { contact } from "../validation/allformvalidation";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadContent from "../headelements/headcontent";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

function Contact() {
  const initialState = {
    fname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: contact,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const { errors, touched } = formik;
  return (
    <section id="ns-contact">
      <HeadContent>
        <div
          className="ns-hd-content"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>Stay connect with us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={formik.handleSubmit} className="ns-valid-form">
              <div
                className="ns-contact-form"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <div className="ns-form-item">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Type Your Name"
                    value={formik.values.fname}
                    name="fname"
                    onChange={formik.handleChange}
                  />
                  {errors.fname && touched.fname && (
                    <p className="cmnt-errors">{errors.fname}</p>
                  )}
                </div>

                <div className="ns-form-item">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Type Your Email Address"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                  />
                  {errors.email && touched.email && (
                    <p className="cmnt-errors">{errors.email}</p>
                  )}
                </div>

                <div className="ns-form-item">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Type Your Subject"
                    value={formik.values.subject}
                    name="subject"
                    onChange={formik.handleChange}
                  />

                  {errors.subject && touched.subject && (
                    <p className="cmnt-errors">{errors.subject}</p>
                  )}
                </div>

                <div className="ns-form-item">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Type Your Phone"
                    value={formik.values.phone}
                    name="phone"
                    onChange={formik.handleChange}
                  />
                  {errors.phone && touched.phone && (
                    <p className="cmnt-errors">{errors.phone}</p>
                  )}
                </div>

                <div className="ns-form-textarea">
                  <label>Your Message</label>
                  <textarea
                    type="text"
                    placeholder="Type Your Message"
                    value={formik.values.message}
                    name="message"
                    onChange={formik.handleChange}
                  />
                  {errors.message && touched.message && (
                    <p className="cmnt-errors">{errors.message}</p>
                  )}
                </div>

                <div className="ns-submit-btn">
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="ns-contact-btn"
                    type="submit"
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
