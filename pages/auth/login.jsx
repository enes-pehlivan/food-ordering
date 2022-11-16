import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import { loginSchema } from "../../schema/LoginSchema";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="bg-primary py-14">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-5 my-10 w-1/2 mx-auto">
          <h2 className="text-[40px] font-gochifont">LOGIN</h2>
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
                  Login
                </button>
              </div>
            </form>
            <Link href="/auth/register" className="flex justify-end">
              <span className="text-[14px] underline cursor-pointer text-black">
                Register Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
