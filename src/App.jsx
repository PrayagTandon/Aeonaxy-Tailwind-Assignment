import { Hero, Footer, Faq, Cta, Categories, Card } from './sections';

import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="bg-slate-gray mb-24">
      <Hero />
    </section>
    <section className="padding">
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