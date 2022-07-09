function Footer({ name, version }) {
  return (
    <footer className="text-monospace bg-primary text-white fixed-bottom p-1">
      {name} v{version}
    </footer>
  );
}

export default Footer;
