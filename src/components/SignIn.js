import React from "react";
import Button from "./Button";
import { EmailUser, Password, Search } from "./Assets";
import Image from "next/image";
import { ButtonA } from "./ButtonA";

const SignUp = () => {
  return (
    <section
      className="h-screen bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/images/SignUpPage.png')" }}
    >
      <div className="bg-white px-12 py-10 w-[600px] h-[740px] rounded-xl">
        <div>
          <div className="text-secondary-darkest text-[26px] font-bold mb-6">
            Sign in
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border border-secondary-lightshade px-5 py-4 rounded-md">
              <input
                type="text"
                placeholder="Email address"
                className="outline-none"
              />
              <EmailUser />
            </div>

            <div className="flex justify-between items-center border border-secondary-lightshade px-5 py-4 rounded-md">
              <input
                type="text"
                placeholder="Password"
                className="outline-none"
              />
              <Password />
            </div>
          </div>

          <div className="mt-7">
            <Button intent={"primary"} size={"medium"}>
              Sign In
            </Button>
            <ButtonA intent={"primary"} size={"medium"} title="Sign in" />
          </div>

          <div className="border-t border-[#ECECEC] my-10">
            <div className="mt-10 mb-3">Or sign in with</div>

            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col gap-5 items-center bg-[#F8F8F8] px-12 py-6 rounded-xl">
                <Image
                  src="/images/google.svg"
                  alt="Google logo"
                  width={40}
                  height={40}
                />
                <span className="text-[#787878]">Google</span>
              </div>

              <div className="flex flex-col gap-5 items-center bg-[#F8F8F8] px-10 py-6 rounded-xl">
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook logo"
                  width={40}
                  height={40}
                />
                <span className="text-[#787878]">Facebook</span>
              </div>

              <div className="flex flex-col gap-5 items-center bg-[#F8F8F8] px-14 py-6 rounded-xl">
                <Image
                  src="/images/apple.svg"
                  alt="Apple logo"
                  width={40}
                  height={40}
                />
                <span className="text-[#787878]">Apple</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            Don't have an account yet?{" "}
            <span className="text-primary">Sign up</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
