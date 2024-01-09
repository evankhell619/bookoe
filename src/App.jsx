import Navbar from "./components/Layouts/Navbar";
import Hero from "./components/Layouts/Hero";
import CardBook from "./components/Fragments/CardBook";
import ListBooks from "./components/Layouts/ListBooks";
import Books from "./components/Elements/Books";
import FooterCTA from "./components/Fragments/FooterCTA";
import Footer from "./components/Fragments/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Books /> */}
      {/* <CardBook /> */}
      <ListBooks />
      <FooterCTA />
      <Footer />
    </>
  );
}

export default App;
