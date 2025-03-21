interface Props {
  title: string;
  href: string;
}

const NavLink = ({title, href}: Props) => {
  return ( 
    <>
      <li>
        <a 
          href={href} 
          className="nav-link"
        >
          {title}
        </a>
      </li>
    </>
   );
}
 
export default NavLink;