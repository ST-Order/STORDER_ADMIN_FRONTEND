import XIcon from "./XIcon";

interface Props {
  title: string;
  image: string;
}

export function MenuItem({ title, image }: Props) {
  return (
    <div className="relative flex flex-col justify-center items-center w-44 h-52 px-4 py-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all">
      {/* Close Icon */}
      <button
        aria-label="Remove item"
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <XIcon />
      </button>

      {/* Menu Image */}
      <img
        className="w-28 h-28 object-contain rounded-md"
        src={image}
        alt={`${title} 이미지`}
      />

      {/* Menu Title */}
      <p className="mt-3 text-center text-lg font-semibold text-gray-800">
        {title}
      </p>
    </div>
  );
}
