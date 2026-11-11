import ChevronDown from "@/components/icons/ChevronDown";
import { QUESTIONS } from "./questions";

export default function Faq() {
  return (
    <section className="py-10 md:py-16" id="caste-dotazy">
      <div className="max-w-300 mx-auto px-4">
        <h2 data-reveal="self" className="text-teal text-3xl font-medium mb-8">
          Časté dotazy
        </h2>

        <div data-reveal="children" className="flex flex-col gap-3">
          {QUESTIONS.map(({ question, answer }) => (
            <details
              key={question}
              name="faq"
              className="group rounded-md border border-dim-gray/20 bg-white shadow-sm transition-shadow duration-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md p-5 text-lg font-medium text-charcoal transition-colors hover:text-teal md:p-6 [&::-webkit-details-marker]:hidden">
                <h3>{question}</h3>
                <ChevronDown className="size-6 shrink-0 text-teal transition-transform duration-400 ease-out-quart group-open:rotate-180" />
              </summary>
              <div data-details-panel>
                <div>
                  <p className="px-5 pb-5 text-dim-gray leading-relaxed md:px-6 md:pb-6">
                    {answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
