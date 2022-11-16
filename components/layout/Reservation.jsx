import React from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "../../schema/ReservationSchema";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        reservationPerson: "",
        reservationDate: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "reservationPerson",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.reservationPerson,
      errorMessage: errors.reservationPerson,
      touched: touched.reservationPerson,
    },
    {
      id: 5,
      name: "reservationDate",
      type: "datetime-local",
      value: values.reservationDate,
      errorMessage: errors.reservationDate,
      touched: touched.reservationDate,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex-1 justify-center items-center">
        <Title addClass="text-[40px] mb-10 flex justify-center ">
          Reservation
        </Title>
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-secondary py-2 px-4 text-white font-boldfont rounded-md mt-5 "
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
