const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div>
      <div>
        <div>Left Nav</div>
        <div>Centered Logo</div>
        <div>Right Nav</div>
      </div>
      <div>
        <div>Copyright © {Year}</div>
        <div>Social</div>
        <div>Powered by Finance & Consulting</div>
      </div>
    </div>
  );
};

export default Footer;
