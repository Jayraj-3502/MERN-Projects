import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailSchema,
  otpSchema,
  passwordSchema,
} from "../../Schema/allInOneSchema";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "react-router";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const ForgotPasswordStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  // Email form
  const {
    register: registerEmail,
    handleSubmit: submitEmail,
    formState: { errors: emailErrors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  // OTP form
  const {
    register: registerOtp,
    handleSubmit: submitOtp,
    formState: { errors: otpErrors },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });

  // Password change form
  const {
    register: registerPass,
    handleSubmit: submitPass,
    formState: { errors: passErrors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  // -------------------- HANDLERS --------------------
  const handleEmail = (data: any) => {
    console.log("Email submitted:", data);
    setActiveStep(1);
  };

  const handleOtp = (data: any) => {
    console.log("OTP submitted:", data);
    setActiveStep(2);
  };

  const handlePassword = (data: any) => {
    console.log("Password changed:", data);
    alert("Password updated successfully!");
  };

  const stepDetails = [
    "Email Verification",
    "OTP Verification",
    "Password Update",
  ];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border">
      {/* --- Step Indicator --- */}
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {stepDetails.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Step 1 email verification and send OTP */}
      {activeStep === 0 && (
        <form onSubmit={submitEmail(handleEmail)} className="space-y-4">
          <InputField
            type="email"
            id="email"
            label="Email*"
            placeholder="example@gmail.com"
            errors={emailErrors}
            register={registerEmail("email")}
          />

          <PrimaryButton type="submit" text="Send OTP" />
        </form>
      )}

      {/* Step 2 where we are taking otp are matching it with the one we have in DB  */}
      {activeStep === 1 && (
        <form onSubmit={submitOtp(handleOtp)} className="space-y-4">
          <InputField
            type="text"
            id="otp"
            label="OTP"
            placeholder="123456"
            errors={otpErrors}
            register={registerOtp("otp")}
          />

          <div className="flex justify-between">
            <PrimaryButton
              type="button"
              text="Back"
              onClick={() => {
                setActiveStep(0);
              }}
            />

            <PrimaryButton type="submit" text="Verify" />
          </div>
        </form>
      )}

      {/* Step 3 where we taking password and update it  */}
      {activeStep === 2 && (
        <form onSubmit={submitPass(handlePassword)} className="space-y-4">
          <InputField
            type="password"
            id="password"
            label="Password*"
            placeholder="********"
            errors={passErrors}
            register={registerPass("password")}
          />

          <InputField
            type="password"
            id="confirmPassword"
            label="Confirm Password*"
            placeholder="********"
            errors={passErrors}
            register={registerPass("confirmPassword")}
          />

          <div className="flex justify-between">
            <PrimaryButton
              type="button"
              text="Back"
              onClick={() => {
                setActiveStep(1);
              }}
            />

            <PrimaryButton type="submit" text="Update Password" />
          </div>
        </form>
      )}

      <div className="flex flex-col items-center mt-5">
        Already have account or want to create?
        <div className="flex flex-row gap-10">
          <Link to={"/signup"} className="text-blue-500 font-bold">
            Signup
          </Link>
          <Link to={"/login"} className="text-blue-500 font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordStepper;
