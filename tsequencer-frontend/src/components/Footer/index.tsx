const Footer = () => {
  return (
    <footer className="mt-auto border-t-2 py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm text-stone-300 shadow-black text-shadow-sm">
          Built by{" "}
          <a
            href={"https://www.linkedin.com/in/dermot-bateman-7139971a2/"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            dermotbg
          </a>
          . The source code is available on{" "}
          <a
            href={"https://github.com/dermotbg/tsequencer"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
