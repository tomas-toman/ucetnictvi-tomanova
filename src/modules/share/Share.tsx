import ShareButtons from "./ShareButtons";

export default function Share() {
  return (
    <section aria-labelledby="share-heading" className="pb-10 md:pb-16">
      <div className="max-w-300 mx-auto px-4">
        <div
          data-reveal="self"
          className="flex flex-col items-center gap-5 border-t border-dim-gray/20 pt-8 text-center md:flex-row md:items-center md:justify-between md:text-left"
        >
          <div className="flex flex-col gap-1">
            <h2 id="share-heading" className="text-xl font-medium text-charcoal">
              Znáte někoho, kdo hledá účetní?
            </h2>
            <p className="text-dim-gray">Pošlete mu odkaz na tyto stránky.</p>
          </div>
          <ShareButtons />
        </div>
      </div>
    </section>
  );
}
