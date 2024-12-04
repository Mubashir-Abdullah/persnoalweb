import "../style/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{currentYear} All Rights Reserved. Ojjomedia</p>
    </footer>
  );
}

export default Footer;
