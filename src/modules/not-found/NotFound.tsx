import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import Mail from "@/components/icons/Mail";
import StatusPage from "@/modules/status-page/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      eyebrow="Stránka nenalezena"
      title={<>Tuto stránku jsem v&nbsp;evidenci nenašla</>}
      description="Odkaz je možná zastaralý, nebo se do adresy vloudil překlep. Vraťte se na úvodní stránku, nebo mi rovnou napište – ráda vám pomohu."
      actions={
        <>
          <Button href="/" className="w-full justify-center sm:w-fit">
            <ArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            Zpět na úvod
          </Button>
          <Button
            href="/#kontakt"
            variant="secondary"
            className="w-full justify-center sm:w-fit"
          >
            <Mail />
            Kontaktujte mě
          </Button>
        </>
      }
    />
  );
}
