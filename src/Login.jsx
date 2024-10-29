import image from "./assets/DRIP_20.svg";
import logo from "./assets/Brand.svg";
import google from "./assets/google.svg";
import mobileLogo from "./assets/Mobile Logo.svg";

const Login = () => {
  return (
    <div className="p-6 gap-[90px] xl:gap-[132px] lg:pt-8 lg:px-10 w-full h-full lg:max-h-[800px] xl:max-h-[960px] max-w-[1440px] flex items-center justify-between relative">
      <img
        src={logo}
        alt=""
        className="absolute top-10 left-10 hidden lg:block"
      />
      <div className="mx-auto flex flex-col gap-14 items-center w-fit">
        <img
          src={mobileLogo}
          alt=""
          className="lg:hidden w-[110px] h-[68px] mx-auto"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[#262F3D] text-[32px] leading-[48px] lg:text-[40px] lg:leading-[60px]">
            ArtVista
          </p>
          <p className="text-[#A4A9B2] text-[14px] leading-[16.8px] lg:text-[16px] lg:leading-[19.2px]">
            Please fill your detail to access your account.
          </p>
        </div>
        <form action="" className="w-full max-w-[360px]">
          <div className="flex flex-col gap-5 mb-8">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-medium text-[#344054] text-sm"
              >
                Email
              </label>
              <div className="flex border border-[#A4A9B28C] rounded-[8px]">
                <input
                  type="email"
                  name=""
                  id="email"
                  className="bg-transparent w-full py-[10px] px-[14px] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-medium text-[#344054] text-sm"
              >
                Password
              </label>
              <div className="flex border border-[#A4A9B28C] rounded-[8px]">
                <input
                  type="password"
                  name=""
                  id="password"
                  className="bg-transparent w-full py-[10px] px-[14px] outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between font-medium text-[14px] leading-[16.8px]">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className=" checked:bg-[#A4A9B28C] cursor-pointer"
                />
                <p className="text-[#262F3D]">Remember me</p>
              </div>
              <p className="text-[#5429FF] cursor-pointer ">Forgot Password?</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <button
              type="submit"
              className="w-full h-11 border bg-[#5429FF] rounded-[8px] text-base font-medium text-white hover:bg-white hover:border-[#5429FF] hover:text-[#5429FF] duration-200"
            >
              Sign In
            </button>
            <button className="w-full h-11 border border-[#A4A9B28C] rounded-[8px]">
              <img src={google} alt="" className="mx-auto" />
            </button>
          </div>
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <span className="font-medium text-[#5429FF] cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>
      <div className="hidden lg:flex rounded-[40px] bg-[#E5DFFF] w-full h-full items-center justify-center max-w-[500px] xl:max-w-[768px]">
        <img
          src={image}
          alt=""
          className="object-contain animate-wiggle xl:max-h-[736px] xl:max-w-[865px]"
        />
      </div>
    </div>
  );
};

export default Login;
