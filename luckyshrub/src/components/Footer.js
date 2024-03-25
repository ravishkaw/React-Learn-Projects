import logo from '../assests/images/logo.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="footer-logo" />
      </div>
      <div>
        <hr />
        <p>© {new Date().getFullYear()} Ravishka Wijerathne. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer