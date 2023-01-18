import { MenuItem } from "@app/modules/Menu/components/MenuItem";
import { IPizza } from "@app/modules/Menu/types/pizza";
import { FC } from "react";

interface MenuListProps {
  items: IPizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map(({ image, id, ...rest }) => (
        <MenuItem imagePath={`assets/pizza/${image}`} {...rest} key={id} />
      ))}
    </div>
  );
};
