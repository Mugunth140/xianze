import Home from "../components/Home";
import About from "../components/About";
import EventIntro from "@/components/EventIntro";
import RegisterCounter from "@/components/RegisterCounter";
import "../sass/pages/index.scss";

export default function Main() {
  return (
   <>
   <main className="Container" >
    <Home />
    <About />
    <EventIntro />
    <RegisterCounter />
   </main>
   </>
  );
}
