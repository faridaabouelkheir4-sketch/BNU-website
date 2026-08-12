import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;