import { FC } from "react";

interface MenuItemProps {
  imagePath: string;
  title: string;
  ingredients: string;
  weight: number;
  price: number;
}

export const MenuItem: FC<MenuItemProps> = ({
  imagePath,
  weight,
  title,
  ingredients,
  price,
}) => {
  return (
    <div className="w-96 shadow-xl rounded-2xl overflow-hidden ">
      <div className="relative">
        <img
          src={imagePath}
          alt="pizza"
          className="object-cover object-center w-full h-[15rem]"
        />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
          {weight} г
        </span>
      </div>
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold">{price} грн.</span>
      </div>
    </div>
  );
};
