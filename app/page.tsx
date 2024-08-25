import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
export default function Home() {
  const navItems = [
    { 
      name: "Home", 
      link: "/", 
    },
    { 
      name: "About", 
      link: "/about", 
    },
    { 
      name: "Projects", 
      link: "/projects", 
    },
    { 
      name: "Skills", 
      link: "/skills", 
    },
    { 
      name: "Contact", 
      link: "/contact", 
    },
  ];
  return (
    <main className="relative bg-background text-text justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={navItems}/>
        <Hero/>
      </div>
    </main>
  );
}
