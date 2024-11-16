import XIcon from "./XIcon";
interface Props {
  title: string;
  image: string;
}

export function MenuItem({ title, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-[178px] h-[209px] relative px-2.5 py-[5px] rounded-[10px] border border-black gap-4">
      <div className="absolute top-1 right-1">
        <XIcon />
      </div>
      <img className="w-[120px] h-[120px]" src={image} />
      <p className="text-xl text-black">{title}</p>
    </div>
  );
}
