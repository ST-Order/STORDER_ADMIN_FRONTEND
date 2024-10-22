interface Props {
  onClick: () => void;
  icon: any;
  title: string;
}

export default function Menus({ onClick, icon, title }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col justify-center h-[353px] items-center relative"
    >
      <img src={icon} className="w-40 h-40 object-cover" />
      <p className="text-[40px] text-center text-black">{title}</p>
    </div>
  );
}
