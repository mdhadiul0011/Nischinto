"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import Image from "next/image";
import { appointment } from "../validation/allformvalidation";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadContent from "../headelements/headcontent";

// img elements
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

function Appointment() {
  const initialState = {
    fname: "",
    email: "",
    phone: "",
    bookingdate: "",
    department: "",
    doctor: "",
    comment: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: appointment,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const { errors, touched } = formik;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="ns-appointment-part">
      <HeadContent>
        <div className="ns-hd-content">
          <div className="ns-hd-img">
            <Image src={head_img} alt="ns-head-img" className="ns-head-img" />
          </div>
          <h3>Make an Appointment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem dolorem enim accusamus voluptate esse voluptatum!
          </p>
        </div>
      </HeadContent>
      <div className="container-sm">
        <form
          onSubmit={formik.handleSubmit}
          className="ns-valid-form"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="ns-form">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formik.values.fname}
                    name="fname"
                    onChange={formik.handleChange}
                  />
                  {errors.fname && touched.fname && (
                    <p className="cmnt-errors">{errors.fname}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ns-form">
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email.."
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                  />
                  {errors.email && touched.email && (
                    <p className="cmnt-errors">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ns-form">
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={formik.values.phone}
                    name="phone"
                    onChange={formik.handleChange}
                  />
                  {errors.phone && touched.phone && (
                    <p className="cmnt-errors">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ns-form">
                <div>
                  <label>Booking Date</label>
                  <input
                    type="date"
                    placeholder="Booking Date"
                    value={formik.values.bookingdate}
                    name="bookingdate"
                    onChange={formik.handleChange}
                  />
                  {errors.bookingdate && touched.bookingdate && (
                    <p className="cmnt-errors">{errors.bookingdate}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ns-form">
                <div>
                  <label>Department</label>
                  <select
                    placeholder="Department"
                    value={formik.values.department}
                    name="department"
                    onChange={formik.handleChange}
                  >
                    <option value="d1">Select Your Department</option>
                    <option value="d2">Dental Care</option>
                    <option value="d3">Cruthes</option>
                    <option value="d4">X-ray</option>
                    <option value="d5">Pulmonary</option>
                    <option value="d6">Neurology</option>
                    <option value="d7">Cardiology</option>
                  </select>
                  {errors.department && touched.department && (
                    <p className="cmnt-errors">{errors.department}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ns-form">
                <label>Doctor</label>
                <select
                  placeholder="Doctor"
                  value={formik.values.doctor}
                  name="doctor"
                  onChange={formik.handleChange}
                >
                  <option value="1">Select Your Doctor</option>
                  <option value="2">Dr. John Doe</option>
                  <option value="3">Dr. Mark Roshi</option>
                  <option value="4">Dr. Mohosin Kabir</option>
                  <option value="5">Dr. Noyan Barua</option>
                  <option value="6">Dr. Sumit Saha</option>
                  <option value="7">Dr. Hadiul Islam</option>
                </select>
                {errors.doctor && touched.doctor && (
                  <p className="cmnt-errors">{errors.doctor}</p>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ns-form">
                <label>Message</label>
                <textarea
                  type="text"
                  placeholder="Write somthing here.."
                  value={formik.values.comment}
                  name="comment"
                  onChange={formik.handleChange}
                />
                {errors.comment && touched.comment && (
                  <p className="cmnt-errors">{errors.comment}</p>
                )}
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            type="submit"
            className="ns-appointment-btn"
          >
            Appointment
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
