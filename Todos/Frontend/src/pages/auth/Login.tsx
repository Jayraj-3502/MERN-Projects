import { minLength } from "zod";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import InputField from "../../components/InputField";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit(data: any) {
    console.log("Form Data: ", data);
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="p-5 h-fit border border-gray-300 shadow-2xl rounded-sm">
        <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <InputField
            type="email"
            id="email"
            label="Email*"
            placeholder="example@gmail.com"
            errors={errors}
            register={register("email", {
              required: "Email is required",
            })}
          />

          <InputField
            type="password"
            id="password"
            label="Password*"
            placeholder="********"
            errors={errors}
            register={register("password", {
              required: "Password is required",
            })}
          />

          <PrimaryButton text="Submit" />
        </form>
        <div className="mt-3 text-right">
          <Link to={"/forgot-password"} className="text-blue-500">
            Forgot Password?
          </Link>
        </div>
        <hr className="w-full my-5" />
        <div className="text-center">
          Don't have an accoung?{" "}
          <Link to={"/signup"} className="text-blue-500 font-bold">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
