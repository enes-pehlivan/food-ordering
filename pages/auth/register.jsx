import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import { registerSchema } from "../../schema/RegisterSchema";

const Register = () => {
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
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
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
      name: "password",
      type: "password",
      placeholder: "Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Your Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <div className="bg-primary py-14">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-5 my-10 w-1/2 mx-auto">
          <h2 className="text-[40px] font-gochifont">Register</h2>
          <div className="flex flex-col gap-y-3 w-full">
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
                  REGISTER
                </button>
              </div>
            </form>
            <Link href="/auth/login" className="flex justify-end">
              <span className="text-[14px] underline cursor-pointer text-black">
                Do you have a account?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
