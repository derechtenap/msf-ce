function Footer({ name, version }) {
  return (
    <footer className="fixed-bottom bg-primary p-1 text-monospace text-uppercase text-white small">
      {`${name + ` ` + version}`}
    </footer>
  );
}

export default Footer;
