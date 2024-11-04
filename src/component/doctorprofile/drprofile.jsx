"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Biography from "./biography";
import Education from "./education";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { appointment } from "../validation/allformvalidation";
import HeadContent from "../headelements/headcontent";
import AOS from "aos";
import "aos/dist/aos.css";

//doctor profile img
import dr_pro_img from "../../../public/assets/image/specialDoctor/member2.jpg";
import head_img from "../../../public/assets/image/headImg/ns-head-img.png";

function DrProfile() {
  const [tabText, setTabText] = useState("biography");
  const [text, setText] = useState("");

  const handleTextClick = (e) => {
    setText(e.target.id);
  };

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
    <>
      <div className="ns-dr-profile">
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="ns-dr-pro-img"
                data-aos="flip-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <Image
                  src={dr_pro_img}
                  alt="doctor-profile-img"
                  className="img"
                  priority={true}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div
                className="ns-dr-details"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
              >
                <h3>Dr. Jeanette Hoff</h3>
                <span>Paediatric Surgeon</span>
                <div className="ns-dr-hospital-education">
                  <p>M.S, M.Ch (Paediatric Surgery)</p>
                  <p>Medic General Medical Hospital</p>
                  <p>North Houston, Taxas, USA</p>
                </div>
                <div className="ns-dr-speciality">
                  <div className="ns-speciality">
                    <div className="speciality">
                      <h3>Speciality:</h3>
                    </div>
                    <div className="special-item">
                      <p>Paediatric, Laparoscopy</p>
                    </div>
                  </div>
                  <div className="ns-speciality">
                    <div className="speciality">
                      <h3>Experience:</h3>
                    </div>
                    <div className="special-item">
                      <p>22 Years+</p>
                    </div>
                  </div>
                  <div className="ns-speciality">
                    <div className="speciality">
                      <h3>Languages:</h3>
                    </div>
                    <div className="special-item">
                      <p>English, Spanish</p>
                    </div>
                  </div>
                  <div className="ns-speciality">
                    <div className="speciality">
                      <h3>Types Of:</h3>
                    </div>
                    <div className="special-item">
                      <p>Full Time Physician</p>
                    </div>
                  </div>
                </div>
                <div className="ns-contact-working-info">
                  <div
                    className="ns-contacts-info"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000"
                  >
                    <div className="ns-contact-elements">
                      <h3>Contact Info</h3>
                      <p>
                        <span>Address :</span> 1223 Fulton Street San Diego CA
                        941-23 USA
                      </p>
                      <p>
                        <span>Email :</span> nischinto@gmail.com
                      </p>
                      <p>
                        <span>Phone :</span> (+01) - 234 567 890
                      </p>
                    </div>
                  </div>
                  <div
                    className="ns-contacts-info"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000"
                  >
                    <div className="ns-contact-elements">
                      <h3>Working hours</h3>
                      <ul>
                        <li>
                          <p>Sun-Thu</p>
                          <p>8:00am–7:00pm</p>
                        </li>
                        <li>
                          <p>Saturday</p>
                          <p>11:00am–6:00pm</p>
                        </li>
                        <li>
                          <p>Friday</p>
                          <p>Off Day</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ns-dr-bio-edu">
                  <div className="ns-bio-edu">
                    <div
                      className="ns-dr-bio"
                      onClick={() => setTabText("biography")}
                    >
                      <p
                        className={text === "1" ? "bio-tab-text" : "bio-text"}
                        id="1"
                        key={1}
                        onClick={handleTextClick}
                      >
                        Biography
                      </p>
                    </div>
                    <div
                      className="ns-dr-edu"
                      onClick={() => setTabText("education")}
                    >
                      <p
                        className={text === "2" ? "edu-tab-text" : "edu-text"}
                        id="2"
                        key={2}
                        onClick={handleTextClick}
                      >
                        Education
                      </p>
                    </div>
                  </div>
                  <div className="ns-bio-edu-tab">
                    {tabText === "biography" ? (
                      <Biography />
                    ) : tabText === "education" ? (
                      <Education />
                    ) : undefined}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ns-dr-appointment-form"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
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
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={formik.handleSubmit} className="ns-valid-form">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default DrProfile;
