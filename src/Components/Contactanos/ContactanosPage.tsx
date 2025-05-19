import RedesSociales from "../RedesSociales";

const Data = {
  title: "¿Listo para contactanos?",
  text: "Estamos aquí para ayudarte a mantener tu hogar seguro y en buen estado. Contáctanos y recibe asesoría personalizada para el mantenimiento de tu terma, reparaciones urgentes o trabajos en tanques elevados. ¡Confía en nuestra experiencia y atención rápida para cuidar lo más importante: tu tranquilidad!",
};

const ContactanosPage: React.FC = () => {
  return (
    <div>
      <div>
        <div className="bg-third w-full h-96"></div>
        <div className="text-center text-theme text-4xl font-serif mt-8">
          {Data.title}
        </div>
        <div className="text-center py-4 mx-72 text-second">{Data.text}</div>
        <div className="bg-main mx-40 rounded-2xl py-10 px-16 mt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="text-xl font-serif font-semibold text-theme">Nombre:</div>
              <input className="bg-theme rounded-2xl mt-2 mb-4 w-4/5 h-7 p-2" placeholder="Ingrese su nombre aqui"></input>
              <div className="text-xl font-serif font-semibold text-theme">E-mail:</div>
              <input className="bg-theme rounded-2xl mt-2 mb-4 w-4/5 h-7 p-2" placeholder="Ingrese su E-mail aqui"></input>
              <div className="text-xl font-serif font-semibold text-theme">Celular:</div>
              <input className="bg-theme rounded-2xl mt-2 mb-4 w-4/5 h-7 p-2" placeholder="Ingrese su celular aqui"></input>
            </div>
            <div className="flex-1">
              <div className="text-xl font-serif font-semibold text-theme">Mensaje:</div>
              <textarea className="w-full h-48 bg-theme rounded-2xl p-2 mt-2" placeholder="Ingrese su mensaje aqui"></textarea>
            </div>
          </div>
          <div className="bg-second p-1 mt-4 font-serif font-semibold w-1/9 text-center mx-auto rounded-2xl text-theme">Enviar</div>
        </div>
        <div className="mt-10 ml-48 text-[#73FC49] text-2xl font-serif">Tenemos redes sociales</div>
        <div className="ml-48 mt-1 font-serif text-second">Visita y revisa el contenido de nuestras redes sociales</div>
        <div className="mx-auto w-1/5 mb-8"><RedesSociales /></div>
      </div>
    </div>
  );
};

export default ContactanosPage;
