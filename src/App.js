import "./App.css";
import busana1 from "./assets/busana1.jpeg";
import busana2 from "./assets/busana2.jpeg";
import busana3 from "./assets/busana3.jpeg";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "./components/slider/slider", title: "Tentang" },
    { url: "https://wa.me/6287878362281", title: "Hubungi" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={busana1} />
      <Slider
        imageSrc={busana2}
        title={"Berkualitas"}
        subtitle={
          "Sudah pasti kami selalu menjamin kepuasan pelanggan"
        }
      />
      <Slider
        imageSrc={busana3}
        title={"Harga Ekonomis"}
        subtitle={"Ekonomis bukan berarti tidak berkualitas"}
        flipped={true}
      />
      <Footer />
    </div>
  );
}

export default App;
