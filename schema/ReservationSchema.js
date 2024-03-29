import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().required("Email is required.").email("Email is invalid"),
});
