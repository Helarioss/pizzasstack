import { FooterLink } from "../FooterLink";

export const Footer = () => {
  return (
    <div className="bg-gray-900 pt-12 px-12 pb-8 relative">
      <div className="mb-8">
        <span className="uppercase mb-4 block font-bold text-sm text-zinc-500">
          Контакти
        </span>
        <ul>
          <li>
            <FooterLink href="tel:+380441234567">044 123 45 67</FooterLink>
          </li>
          <li>
            <FooterLink href="mailto:info@pizzastack.app">
              info@pizzastack.app
            </FooterLink>
          </li>
        </ul>
      </div>
      <div className=" w-[calc(100%_+_6rem)] h-px ml-[-3rem] bg-zinc-500 mb-8"></div>
      <span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
    </div>
  );
};
