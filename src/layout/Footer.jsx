const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/le_studio_de_caroline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/caroline.duteurtre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="https://x.com/Caro_Dute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="https://github.com/CaroDute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          <span className="sr-only">GitHub</span>
        </a>
      </div>
      <p>© Caroline Duteurtre | Tous droits réservés</p>
    </div>
  );
};

export default Footer;
