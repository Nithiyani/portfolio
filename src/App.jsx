import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Works from './components/sections/Works';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <Layout>
      <CustomCursor />
      <Hero />
      <div className="p-4 md:p-12">
        <About />
        <Education />
        <Experience />
        <Works />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
