import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Landing from '@/pages/Landing';
import About from '@/pages/About';
import Creations from '@/pages/Creations';
import Learn from '@/pages/Learn';
import Contact from '@/pages/Contact';

type Page = 'home' | 'about' | 'creations' | 'learn' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navbar current={page} onNavigate={setPage} />
      <main className="flex-1">
        {page === 'home' && <Landing onNavigate={setPage} />}
        {page === 'about' && <About onNavigate={setPage} />}
        {page === 'creations' && <Creations onNavigate={setPage} />}
        {page === 'learn' && <Learn onNavigate={setPage} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={setPage} />
    </div>
  );
}
