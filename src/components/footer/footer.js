import "./footer.scss";
const Footer = () => {
  return (
    <div className="container_footer">
        <div className="first_part_footer">
            <img src="/images/icon.png"></img>
            <p className="info">NFT is a marketplace 
                to collect and trade unique,<br/> 
                single-edition digital artworks.
            </p>
        </div>

        <div className="second_part_footer">
        <p className="info"> Explore</p>
          <div><a className="info" href="#">Art</a></div>
          <div><a className="info"  href="#">Community</a></div>
          <div><a  className="info" href="#">Features</a></div>
          <div><a  className="info" href="#">Collection</a></div>
        </div>
        <div className="second_part_footer">
        <p className="info"> Legal</p>
          <div><a className="info" href="#">Community Guidelines</a></div>
          <div><a className="info"  href="#">Treams of Service</a></div>
          <div><a  className="info" href="#">Privacy Police</a></div>
          <div><a  className="info" href="#">Report content</a></div>
        </div>
    </div>
  );
};
export default Footer;
