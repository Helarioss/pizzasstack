import { Header } from "./common/components/Header";
import { MenuList } from "./modules/Menu/components/MenuList";
import pizzaMenu from "./mocks/pizza.json";
import { Footer } from "./common/components/Footer";

export const App = () => {
  return (
    <div className="">
      <Header />
      <div className="px-12 pt-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
