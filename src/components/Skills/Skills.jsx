import skills from "../../utils/skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[var(--background-color)] rounded-lg shadow-lg transition duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-[var(--primary-color)] sm:text-5xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-[var(--primary-color)] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-[var(--text-color)]">My Skills</span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center p-6 rounded-lg shadow-lg transition duration-500 hover:shadow-2xl"
            style={{ backgroundColor: "rgba(0,0,0,0.1)", color: skill.title }}
          >
            <div className="flex items-center justify-center mb-4">
              <i
                className={`${skill.icon} text-5xl text-[${skill.title}]`}
                aria-hidden="true"
              />
            </div>
            <h6 className="mb-2 font-sans text-3xl font-bold leading-5 text-[${skill.title}]">
              <span style={{ color: skill.title }}>{skill.title}</span>
            </h6>
            <ul className="flex flex-wrap mt-4">
              {skill.skills.map((item, index) => (
                <li
                  key={index}
                  className="items-center h-12 px-6 py-3 font-medium tracking-wide text-[var(--text-color)] transition duration-200 rounded-lg shadow-lg bg-[var(--card-background-color)] hover:bg-[var(--card-background-color)] hover:shadow-lg mr-2 mb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
