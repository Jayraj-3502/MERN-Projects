import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../Schema/signup.schema";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data: object) {
    console.log("Form Submited Data: ", data);
  }

  return (
    <div className="min:h-screen min:w-screen flex flex-col justify-center items-center py-10">
      <div className="p-5 flex flex-col gap-3 border border-gray-300 rounded-md shadow-2xl">
        <form
          action=""
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <h1 className="text-3xl font-bold text-center mb-3">Signup</h1>

          <div className="flex flex-col gap-3 lg:flex-row">
            <InputField
              type="text"
              id="fullname"
              label="Full Name*"
              placeholder="john doe"
              errors={errors}
              register={register("fullname", {
                required: {
                  value: true,
                  message: "Fullname is required",
                },
              })}
            />

            <InputField
              type="email"
              id="email"
              label="Email*"
              placeholder="johndoe@gmail.com"
              errors={errors}
              register={register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <InputField
              type="password"
              id="password"
              label="Password*"
              placeholder="********"
              errors={errors}
              register={register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Minimum password length is 8",
                },
              })}
            />

            <InputField
              type="password"
              id="confirmPassword"
              label="Confirm Password*"
              placeholder="********"
              errors={errors}
              register={register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is required",
                },
              })}
            />
          </div>

          <PrimaryButton text="Submit" />
        </form>
        <hr className="my-3 w-full" />
        <div className="text-center">Have an accoung Login</div>
      </div>
    </div>
  );
}

export default Signup;
