import Calculator from "@/components/icons/Calculator";
import Item from "./Item";
import File from "@/components/icons/File";
import Percentage from "@/components/icons/Percentage";
import Bitcoin from "@/components/icons/Bitcoin";
import People from "@/components/icons/People";

export default function Services() {
  return (
    <section className="h-80 py-10" id="sluzby">
      <div className="max-w-300 mx-auto px-4">
        <h2 className="text-teal text-3xl font-medium mb-8">Moje služby</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
          <Item
            Icon={Calculator}
            title="Učetnictví"
            description="Komplexní vedení účetnictví pro firmy i OSVČ."
          />
          <Item
            Icon={File}
            title="Daňová evidence"
            description="Přehledné zpracování daňové evidence a evidence příjmů a výdajů."
          />
          <Item
            Icon={Percentage}
            title="DPH"
            description="Příprava a podání daňových přiznání, kontrolní hlášení, souhrnné hlášení."
          />
          <Item
            Icon={Bitcoin}
            title="Kryptoměny"
            description="Zpracování a účtování transakcí na kryptoměnových burzách."
          />
          <Item
            Icon={People}
            title="Neziskové organizace"
            description="Zkušenosti s účetnictvím veřejného sektoru."
          />
        </div>
      </div>
    </section>
  );
}
