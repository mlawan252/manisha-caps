import Button from "./Button";

function Hero() {
  return (
    // <section className="flex items-center justify-center h-screen bg-yellow-400 bg-[url('/caps/hero.jpg')]">
    //   <h1>The new Caps and Incense Sensation</h1>
    // </section>

    <section className="bg-[url('/caps/hero.jpg')] bg-cover bg-center h-dvh flex flex-col items-center justify-center">
      <h1 className="text-stone-200 text-3xl md:text-4xl font-bold text-center uppercase">
        The new caps and incense sensation.
      </h1>
      <Button styles="cta" >
        EXPLORE
      </Button>
    </section>
  );
}

export default Hero;
