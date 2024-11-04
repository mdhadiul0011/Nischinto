import * as Yup from "yup";

export const appointment = Yup.object({
  fname: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  phone: Yup.string().nullable().required("Please Enter Your Phone Number"),
  bookingdate: Yup.string()
    .nullable()
    .required("Please Enter Your Booking Date"),
  department: Yup.string().nullable().required("Please Choose Your Department"),
  doctor: Yup.string().nullable().required("Please choose Your Doctor"),
  comment: Yup.string().required("Please write your comment"),
});

export const contact = Yup.object({
  fname: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  phone: Yup.string().nullable().required("Please Enter Your Phone Number"),
  subject: Yup.string().nullable().required("Please Enter Your Subject"),
  message: Yup.string().required("Please write your Message"),
});

export const blog_comments = Yup.object({
  name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  comment: Yup.string().required("Please write your comment"),
});
