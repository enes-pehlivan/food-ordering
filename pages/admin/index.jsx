import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import { adminSchema } from "../../schema/AdminSchema";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Your Username",
      value: values.userName,
      errorMessage: errors.userName,
      touched: touched.userName,
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
      <div className="container mx-auto py-24">
        <div className="flex flex-col items-center gap-y-5 my-10 w-1/2 mx-auto">
          <h2 className="text-[40px] font-gochifont">Admin Login</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
