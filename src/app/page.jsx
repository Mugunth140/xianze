import Home from "../components/Home";
import About from "../components/About";

import "../sass/pages/index.scss";
import EventIntro from "@/components/EventIntro";

export default function Main() {
  return (
   <>
   <main className="Container" >
    <Home />
    <About />
    <EventIntro />
   </main>
   </>
  );
}
