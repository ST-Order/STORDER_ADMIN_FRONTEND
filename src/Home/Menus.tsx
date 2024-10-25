interface Props {
  onClick: () => void;
  icon: any;
  title: string;
}

export default function Menus({ onClick, icon, title }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col justify-center items-center"
    >
      <img src={icon} className="w-28 h-32 lg:w-40 lg:h-40 " />
      <p className="text-2xl lg:text-4xl text-center text-black">{title}</p>
    </div>
  );
}
