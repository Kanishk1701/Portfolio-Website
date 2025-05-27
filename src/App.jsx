import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./components/sections/Home";
import "./index.css";
import "./app.css";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
export default function App() {
  // State to track if loading is complete
  const [isLoading, setIsLoading] = useState(true);

  // When loading screen completes, this function will be called
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Show loading screen only when isLoading is true */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Show the main content (including navbar) when loading is complete */}
      {!isLoading && (
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <Home />
          <About />
          <Projects />
           <main className="pt-16">
            {/* Your other page sections go here */}
            
            
            
            <section id="contact" className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">Contact Section</h1>
            </section>
          </main>
        </div>
      )}
    </>
  );
}