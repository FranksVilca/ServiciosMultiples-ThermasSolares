
const Data = {
  direccion: "Arequipá - Arequipa",
  numero:"+51 959107196",
  correo:"javieredgardvilcamayta@gmail.com"  
};

const Headerh: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="w-full flex flex-wrap bg-theme py-4">
        <div className="w-full md:w-1/2 p-4 pl-28 pt-2">
          <span className="text-[#868686] text-xl">{Data.correo} | {Data.direccion}</span>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <span className="text-[#5BB543] text-4xl">{Data.numero}</span>
        </div>
      </div>
    </div>
  );
};

export default Headerh;
