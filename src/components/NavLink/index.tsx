interface Props {
  title: string;
}

const NavLink = ({title}: Props) => {
  return ( 
    <>
      <li>
        <a 
          href="#" 
          className="nav-link"
        >
          {title}
        </a>
      </li>
    </>
   );
}
 
export default NavLink;