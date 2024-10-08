import projects from "../../utils/projectsList";

const Projects = () => {
  return (
    <div id="projects" className="bg-[var(--background-color)]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[var(--text-color)] sm:text-4xl md:mx-auto">
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
              <span className="relative">Projects</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden bg-[var(--card-bg-color)] rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105"
            >
              <img
                src={project.image}
                className="h-48 w-full object-cover rounded-t-lg"
                alt=""
              />
              <div className="p-5 flex flex-col flex-1">
                <h1 className="inline-block mb-3 text-2xl font-bold leading-5 text-[var(--text-color)]">
                  {project.title}
                </h1>
                <h2 className="inline-block text-[var(--text-color)] mb-3 text-xl font-bold leading-5">
                  {project.subTitle}
                </h2>
                <p className="mb-2 text-[var(--text-color)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap space-x-2 mt-5">
                  <h2 className="inline-block text-[var(--text-color)] mb-3 text-xl font-bold leading-5">
                    Technologies:
                  </h2>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-[var(--text-color)] bg-[var(--background-color)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex px-4 py-2 items-center transform font-semibold border text-[var(--text-color)] transition duration-300 hover:scale-105 shadow hover:shadow-lg rounded-full"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex px-4 py-2 items-center transform font-semibold border text-[var(--text-color)] transition duration-300 hover:scale-105 shadow hover:shadow-lg rounded-full"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
