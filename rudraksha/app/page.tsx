
import About from "./components/About";
import Services from "./components/Services";
import YouTubeShowcase from "./components/YouTubeShowcase";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative items-center justify-items-center min-h-screen p-8  ">
       <About/>
       <Services/>
       <YouTubeShowcase/>
       <Footer/>
       
    </div>
  );
}
