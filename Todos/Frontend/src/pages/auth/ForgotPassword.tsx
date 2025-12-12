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

const ForgotPasswordStepper = () => {
  const [step, setStep] = useState(1);

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
    stepDetails[0].status = "Complete";
    setStep(2);
  };

  const handleOtp = (data: any) => {
    console.log("OTP submitted:", data);
    stepDetails[1].status = "Complete";
    setStep(3);
  };

  const handlePassword = (data: any) => {
    console.log("Password changed:", data);
    alert("Password updated successfully!");
  };

  const [stepDetails, setStepDetails] = useState([
    {
      number: 1,
      title: "Email Verification",
      status: "Pending",
    },
    {
      number: 2,
      title: "OTP Verification",
      status: "Pending",
    },
    {
      number: 3,
      title: "Password Update",
      status: "Pending",
    },
  ]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border">
      {/* --- Step Indicator --- */}
      <div className="flex justify-between mb-6">
        {stepDetails.map((value) => (
          <div className={`${value.number === 3 ? "" : "w-full"}`}>
            <div
              className={`flex items-center ${
                value.number === 3 ? "" : "w-full"
              }`}
            >
              <div className="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
                <span className="text-sm text-white font-semibold">
                  {value.number}
                </span>
              </div>
              {value.number === 3 ? (
                ""
              ) : (
                <div className="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
              )}
            </div>
            <div className="mt-2 mr-4">
              <h6 className="text-sm font-semibold text-blue-600">
                {value.title}
              </h6>
              <p className="text-xs font-bold text-gray-500">{value.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Step 1 email verification and send OTP */}
      {step === 1 && (
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
      {step === 2 && (
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
                setStep(1);
              }}
            />

            <PrimaryButton type="submit" text="Verify" />
          </div>
        </form>
      )}

      {/* Step 3 where we taking password and update it  */}
      {step === 3 && (
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
                setStep(2);
              }}
            />

            <PrimaryButton type="submit" text="Update Password" />
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordStepper;
