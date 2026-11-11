export default function About() {
  return (
    <section className="py-10 md:py-16" id="o-mne">
      <div className="max-w-300 mx-auto px-4 grid gap-8 md:grid-cols-2 md:gap-16 md:items-start">
        <div data-reveal="children">
          <span className="block uppercase text-teal text-sm font-bold tracking-widest mb-4">
            O mně
          </span>
          <h2 className="text-charcoal text-4xl md:text-5xl font-medium leading-tight">
            Účetnictví je součástí mého pracovního života už více než{" "}
            <strong className="text-lapis font-bold">30 let.</strong>
          </h2>
        </div>

        <div data-reveal="children" className="flex flex-col gap-4 md:pt-9">
          <p className="text-dim-gray">
            Za tu dobu jsem měla možnost poznat řadu různých firem, podnikatelů
            i organizací a získat zkušenosti z mnoha oblastí účetnictví.
          </p>
          <p className="text-dim-gray">
            Na své práci mám ráda především její pestrost. Každá firma je jiná,
            každá řeší něco jiného a právě to mě na účetnictví stále baví. Ráda
            se učím nové věci a hledám řešení i tam, kde to na první pohled
            nemusí být úplně jednoduché.
          </p>
          <p className="text-dim-gray">
            Jsem zvyklá pracovat samostatně, pečlivě a zodpovědně. Zároveň ale
            vím, že dobré účetnictví není jen o správně zaúčtovaných dokladech.
            Důležitá je také komunikace, vzájemná důvěra a to, aby spolupráce
            fungovala i po lidské stránce.
          </p>
          <blockquote className="mt-4 border-l-2 border-lapis pl-6 text-charcoal text-2xl font-medium italic">
            A právě takovou spolupráci bych chtěla nabídnout i Vám.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
