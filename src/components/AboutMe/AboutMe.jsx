// import Picture from "../../img/picture.png";
import memoji from "../../img/memoji.png";
const AboutMe = () => {
  return (
    <div id="about-me" className="relative bg-[var(--background-color)]">
      <div className="relative mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-[var(--text-color)]">
        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
          <h2 className="text-center max-w-lg mx-auto  font-sans text-4xl font-bold leading-none tracking-tight text-[var(--text-color)] sm:text-5xl md:mx-auto transition duration-300">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[var(--text-color)] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">About</span>
            </span>{" "}
            Me
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-2 py-8 md:p-4 lg:order-2">
              <p className="text-base text-[var(--text-color)] md:text-lg">
                I am a Full Stack Developer with a passion for building
                beautiful and user- friendly website .I have a strong
                understanding of both front-end and back- end development , and
                I am excited to put my skills to use in a professional setting.
                I am a quick learner and a team player and I am confident that i
                can be a valuable asset to any web developement
              </p>
              <p className="mt-4 text-base text-[var(--text-color)] md:text-lg">
                As a developer, I am constantly learning and refining my skills
                to stay up-to-date with the latest trends and technologies. I am
                particularly passionate about JavaScript and the React
                ,Nodejs,mongoDB framework, and enjoy leveraging them to create
                robust and scalable web applications.
              </p>
            </div>
            <div className="flex justify-center lg:order-1 mt-8">
              <img
                src={memoji}
                alt="Aman"
                className="mx-auto rounded-lg border-2 border-solid border-[var(--text-color)] shadow-2xl transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
