import contactMe from "../../utils/constactme";
const ContextMe = () => {
  return (
    <div
      id="contact-me"
      className="px-4 py-16  mb-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[var(--background-color)] rounded-2xl transition duration-300 hover:shadow-2xl hover:scale-105 dark:bg-[var(--dark-background-color)]"
    >
      <div className="max-w-xl  md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-[var(--text-color)] sm:text-4xl md:mx-auto dark:text-[var(--dark-text-color)]">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-[var(--text-color)] dark:text-[var(--dark-text-color)] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
            <span className="relative ">Contact Me</span>
          </span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        {contactMe.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label=""
            key={item.title}
            className="flex flex-col items-center justify-center p-6 transition duration-300 transform border rounded-lg hover:shadow-2xl hover:scale-105 group dark:bg-[var(--dark-card-background-color)] dark:text-[var(--dark-text-color)]"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[var(--card-bg-color)] dark:bg-[var(--dark-card-background-color)] lg:mb-0">
              <i
                className={`${item.icon} text-3xl text-[var(--text-color)] dark:text-[var(--dark-text-color)]`}
              ></i>
            </div>
            <h6 className="font-semibold leading-5 text-[var(--text-color)] dark:text-[var(--dark-text-color)] text-center lg:text-start">
              {item.title}
            </h6>
            <p className="text-sm text-[var(--text-color)] dark:text-[var(--dark-text-color)] text-center lg:text-start">
              {item.description}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default ContextMe;
