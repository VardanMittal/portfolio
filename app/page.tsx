import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
export default function Home() {
  const navItems = [
    { 
      name: "Home", 
      link: "/", 
    },
    { 
      name: "About", 
      link: "/About", 
    },
    { 
      name: "Projects", 
      link: "/Projects", 
    },
    { 
      name: "Skills", 
      link: "/Skills", 
    },
    { 
      name: "Contact", 
      link: "/Contact", 
    },
  ];
  return (
    <main className="relative bg-background text-text justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <br />
        <About />
        <Projects />
      </div>
    </main>
  );
}
