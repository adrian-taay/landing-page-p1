import { Hero } from "./hero";
import { Contacts } from "./contacts";
import { About } from "./about";
import { Footer } from "./footer";

function Landing() {
  return (
    <section>
      <Hero />
      <article className="w-10/12 mx-auto">
        <Contacts />
        <About />
      </article>
      <Footer />
      {/* Footer */}
    </section>
  );
}

export default Landing;
