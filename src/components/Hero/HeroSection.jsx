import portfolio from "../../img/aman5.png";

const HeroSection = () => {
  return (
    <div className="overflow-hidden bg-[var(--background-color)] rounded-2xl shadow-2xl">
      <div className="relative px-4 mr-3 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mt-20 items-center justify-between w-full lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6 lg:text-start">
              <h2 className="font-sans font-bold text-5xl lg:text-6xl text-[var(--text-color)] tracking-tight leading-tight sm:leading-none max-w-lg mb-6">
                Hi there, I'm{" "}
                <span className="inline-block text-[var(--text-color)]">
                  Aman
                </span>
              </h2>
              <p className="text-[var(--text-color)]  text-lg md:text-xl lg:pr-5">
                I'm a Web Developer based in Delhi, India. I have a passion for
                building responsive and accessible websites using modern
                technologies such as HTML5, CSS3, JavaScript (ES6+), and
                Node.js.
              </p>
            </div>
            <div className="flex items-center  gap-2 justify-start lg:justify-end">
              <a
                href="https://drive.google.com/file/d/18fKVgOHEStLZVmHEgr565NDK7QkqyA7x/view?usp=drive_link"
                className="items-center h-12 px-6 py-3 font-medium tracking-wide text-[var(--text-color)] transition duration-200 rounded-lg shadow-2xl bg-[var(--card-background-color)] hover:bg-[var(--card-background-color)] hover:shadow-2xl"
              >
                My Resume
              </a>
            </div>
          </div>
          <div className="flex items-center  lg:w-1/2">
            <div className="flex w-full  items-center   ml-8 relative">
              <img
                className="w-[350px] h-[350px] rounded-2xl shadow-2xl"
                src={portfolio}
                alt=""
                style={{ boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
