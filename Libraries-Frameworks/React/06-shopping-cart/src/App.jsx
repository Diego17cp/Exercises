import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";

function App() {
  const { filterProducts } = useFilters();
	const filteredProducts = filterProducts({ initialProducts });

	return (
		<>
      <Header></Header>
			<Products products={filteredProducts} />
      <Footer></Footer>
		</>
	);
}

export default App;
