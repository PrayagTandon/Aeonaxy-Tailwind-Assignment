import { Hero, Footer, Faq, Cta, Categories, Card } from './sections';

import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="bg-slate-gray">
      <Hero />
    </section>
    <section className="padding flex  justify-start items-start gap-10">
      <Categories />
      <Card />
    </section>
    <section className="padding bg-slate-gray">
      <Faq />
    </section>
    <section className="padding bg-dark-blue">
      <Cta />
    </section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;