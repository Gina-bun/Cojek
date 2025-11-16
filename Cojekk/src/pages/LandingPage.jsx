import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function LandingPage() {
  return (
    <div className="">
      <Navbar />

      {/* Hero section */}
      <div className="hero-section my-[9em] text-center relative">
        <div>
          <h1 className="font-['Rubik-bubbles'] text-7xl">Cojek</h1>
          <p className="py-5">sip, think, create</p>
        </div>
        <img
          className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform opacity-[0.1] size-99"
          src="/images/mug.png"
          alt="mug"
        />
      </div>



      {/* Get started section */}
      <div className="getStarted my-25 text-center">
        <h1 className="stroke-text text-6xl text-transparent font-['Raleway-black']">
          Let's create something fun
        </h1>
        <Link to="/project-gen">
          <button className="border-2 text-xl rounded-[14px] py-1 mt-9 px-4  border-(--button-stroke-color)">
            Get Started Here &#8594;
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-(--footer-background)  py-2 pb-4 text-(--text-footer)">
        <div className="grid grid-cols-3">
          <div className="col-span-3 ml-[2em] flex flex-col justify-center place-items-center">
            <img
              className="size-45 m-auto  h-22"
              src="/images/logo2.png"
              alt="Cojek logo"
            />
            <p className="pb-3 text-center">
              A cozy place to generate ideas, explore projects & keep yor
              creative streak akive
            </p>
            <div className="flex justify-between search-input  bg-(--card-light) rounded-[20px] py-1 px-2">
            
              <p className="outline-none px-4 text-(--footer-input) my-auto">Want to know more about cojek?</p>
              <button className="bg-(--login-button) rounded-[20px] px-3 py-1">
                Click here
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 flex">
          <p className="border-t-[0.1px] w-[90%] m-auto pt-4">
            Made with love for CS Girlies Hackathon 2025
          </p>
        </div>
      </footer>
    </div>
  );
}