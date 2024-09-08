const Footer = () => (
  <footer className="bg-[var(--background-color)] text-[var(--color)] border-t border-gray-300 text-sm sm:text-base md:text-lg lg:text-xl flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between py-4 px-4 sm:px-8 sm:py-6 md:px-24 md:py-8 lg:px-32 lg:py-10">
    <p>&copy; {new Date().getFullYear()} AmanWebDev. All rights reserved.</p>
    <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
      <a
        href="https://github.com/AMANSINGHSTM"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        GitHub
      </a>
      <a
        href="https://x.com/AmanSin73213855"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Twitter
      </a>
    </div>
  </footer>
);

export default Footer;
