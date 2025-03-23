interface Props {
  title: string;
  fileUrl: string;
}

const CVButton = ({
  title, 
  fileUrl,
}: Props) => {
  return (
    <button 
      className="relative py-2 px-6 overflow-hidden z-20 text-white hover:text-preto cursor-pointer transition-all duration-500 group"
    >
      <a 
        href={fileUrl} 
        download
      >
        {title}
        <span className="absolute h-1 w-full bg-azul rounded-t-full bottom-0 left-0 transition-all duration-500 group-hover:h-[200%] z-[-1]"></span>
      </a>
    </button>
  );
};

export default CVButton;