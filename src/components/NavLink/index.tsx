interface Props {
  title: string;
  sectionId: string;
}

const NavLink = ({ 
  title, 
  sectionId, 
}: Props) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <button
        onClick={() => scrollToSection(sectionId)}
        className="nav-link cursor-pointer"
      >
        {title}
      </button>
    </li>
  );
};

export default NavLink;