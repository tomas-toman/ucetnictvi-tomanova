import Calculator from "@/components/icons/Calculator";
import Item from "./Item";
import File from "@/components/icons/File";
import Percentage from "@/components/icons/Percentage";
import Bitcoin from "@/components/icons/Bitcoin";
import People from "@/components/icons/People";

export default function Services() {
  return (
    <section className="py-10" id="sluzby">
      <div className="max-w-300 mx-auto px-4">
        <h2 data-reveal="self" className="text-teal text-3xl font-medium mb-8">
          Moje služby
        </h2>
        <ul
          data-reveal="children"
          className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4"
        >
          <Item
            Icon={Calculator}
            title="Účetnictví"
            description="Komplexní vedení účetnictví pro firmy i OSVČ. Zajistím průběžné účtování, roční závěrku i přiznání k dani z příjmů."
          />
          <Item
            Icon={File}
            title="Daňová evidence"
            description="Přehledné zpracování daňové evidence a evidence příjmů a výdajů. Na konci roku z ní připravím daňové přiznání."
          />
          <Item
            Icon={Percentage}
            title="DPH"
            description="Příprava a podání daňových přiznání, kontrolní hlášení, souhrnné hlášení. Pohlídám všechny termíny, abyste se vyhnuli pokutám a penále."
          />
          <Item
            Icon={Bitcoin}
            title="Kryptoměny"
            description="Zpracování a účtování transakcí z kryptoměnových burz a peněženek. Pomohu i se správným zdaněním příjmů z prodeje kryptoměn."
          />
          <Item
            Icon={People}
            title="Neziskové organizace"
            description="Účetnictví spolků, nadací a dalších neziskových organizací včetně roční závěrky a vyúčtování dotací. Zkušenosti mám i s účetnictvím veřejného sektoru."
          />
        </ul>
      </div>
    </section>
  );
}
