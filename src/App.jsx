import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Mains from "./components/Mains";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
function App() {
  return (
    // understood the below
    <UserProgressContextProvider>
      {/* understood the below part */}
      <CartContextProvider>

        <Header />
        {/* Header is understood */}
        <Mains />
        {/* Mains Page me bas meals set hue hain and they are just getting showed here ;0 */}
        <Cart />
        <CheckOut />

      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
