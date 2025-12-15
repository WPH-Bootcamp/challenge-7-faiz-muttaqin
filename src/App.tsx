import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/molecules/Navbar';
import { HeroSection } from './components/organisms/HeroSection';
import { Statistics } from './components/organisms/Statistics';
import { Process } from './components/organisms/Process';
import { Services } from './components/organisms/Services';
import { Industry } from './components/organisms/Industry';
import { Portfolio } from './components/organisms/Portfolio';
import { Testimonials } from './components/organisms/Testimonials';
import { FAQ } from './components/organisms/FAQ';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <Statistics />
          <Process />
          <Services />
          <Industry />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
