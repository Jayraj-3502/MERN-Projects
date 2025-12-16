import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../Schema/signup.schema";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authApi";
import type { registerUserInterface } from "../../features/auth/authTypes";
import { useState } from "react";
import { Link } from "react-router";
import { otpSchema } from "../../Schema/allInOneSchema";
import { maxLength, minLength } from "zod";

function Signup() {
  const dispatch: any = useDispatch();
  const steps = ["Details Validation", "Otp Verification"];
  const [activeStep, setActiveStep] = useState(0);
  const {
    register: detailsRegister,
    handleSubmit: detailsHandleSubmit,
    formState: { errors: detailsErrors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const {
    register: otpRegister,
    handleSubmit: otpHandleSubmit,
    formState: { errors: otpErrors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(otpSchema),
  });

  function onDetailsSubmit(data: registerUserInterface) {
    console.log("Form Submited Data: ", data);
    setActiveStep(1);
    dispatch(registerUser(data));
  }

  function onSubmitOtp(data: any) {
    console.log("Form Submited Data: ", data);
  }

  return (
    <div className="min:h-screen min:w-screen flex flex-col justify-center items-center py-10">
      <div className="p-5 flex flex-col gap-3 border border-gray-300 rounded-md shadow-2xl">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {activeStep === 0 ? (
          <RegistrationForm
            handleSubmit={detailsHandleSubmit}
            onSubmit={onDetailsSubmit}
            errors={detailsErrors}
            register={detailsRegister}
          />
        ) : (
          <OtpVerificationForm
            otpHandleSubmit={otpHandleSubmit}
            onSubmitOtp={onSubmitOtp}
            otpErrors={otpErrors}
            otpRegister={otpRegister}
          />
        )}
      </div>
    </div>
  );
}

export default Signup;

function RegistrationForm({ handleSubmit, onSubmit, errors, register }: any) {
  return (
    <>
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
      <div className="text-center">
        Have an account?{" "}
        <Link to={"/login"} className="text-blue-500 font-bold">
          Login
        </Link>
      </div>
    </>
  );
}

function OtpVerificationForm({
  otpHandleSubmit,
  onSubmitOtp,
  otpErrors,
  otpRegister,
}: any) {
  return (
    <form onSubmit={otpHandleSubmit(onSubmitOtp)} className="space-y-4">
      <InputField
        type="text"
        id="otp"
        label="OTP"
        placeholder="123456"
        errors={otpErrors}
        register={otpRegister("otp", {
          required: "This is required field!",
          minLength: [6, "OTP have 6 digits"],
          maxLength: [6, "OTP have 6 digits"],
        })}
        labelClassName="text-center font-bold mb-2 text-2xl"
      />

      <div className="flex justify-center">
        <PrimaryButton type="submit" text="Verify" />
      </div>
    </form>
  );
}
