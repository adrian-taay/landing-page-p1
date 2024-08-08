import { Hero } from '@/components/hero';
import { Contacts } from '@/components/contacts';
import { About } from '@/components/about';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <article className="w-10/12 mx-auto">
        <Contacts />
        <About />
      </article>
      <Footer />
    </main>
  );
}
