import Home from "../components/Home";
import About from "../components/About";
import "../sass/pages/index.scss";

export default function Main() {
  return (
   <>
   <main className="Container">
    <Home />
    <About />
   </main>
   </>
  );
}
