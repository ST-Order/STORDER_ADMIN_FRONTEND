import XIcon from "./XIcon";
interface Props {
  title: string;
  image: string;
}

export function NoticeItem({ title, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-[178px] h-[189px] relative px-2.5 py-[5px] rounded-[10px] border border-black gap-4">
      <img className=" w-[100px] h-[100px]" src={image} />
      <p className=" text-xl text-black">{title}</p>
      <XIcon />
    </div>
  );
}
