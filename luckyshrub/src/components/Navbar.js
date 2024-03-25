import { pageLinks } from "./datalist";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {pageLinks.map((links) => {
          return (
            <li key={links.id}>
              <a href={links.href}>{links.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
