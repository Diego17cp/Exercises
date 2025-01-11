import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filterProducts } = useFilters();
	const filteredProducts = filterProducts({ products: initialProducts });

	return (
		<CartProvider>
      <Header></Header>
      <Cart></Cart>
			<Products products={filteredProducts} />
      <Footer></Footer>
		</CartProvider>
	);
}

export default App;
