function Hero() {
  return (
    // <section className="flex items-center justify-center h-screen bg-yellow-400 bg-[url('/caps/hero.jpg')]">
    //   <h1>The new Caps and Incense Sensation</h1>
    // </section>

    <section className="bg-[url('/caps/hero.jpg')] bg-cover bg-center h-dvh flex flex-col items-center justify-center">
      <h1 className="text-stone-200 text-3xl md:text-4xl font-bold text-center uppercase">
        The new caps and incense sensation.
      </h1>
      <button className="bg-yellow-300 text-lg hover:bg-yellow-600 transition-all duration-300 tracking-wider text-slate-600 hover:text-stone-100 cursor-pointer font-semibold rounded-md mt-6 px-4 py-2">
        EXPLORE
      </button>
    </section>
  );
}

export default Hero;
