export default function Hero() {
  return (
    <section id="home" className="relative flex h-[85vh] w-full items-center justify-center bg-cover bg-center sm:h-[90vh] md:h-[100vh]">
      <div className="absolute inset-0 bg-[#0E1016] mix-blend-color"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center">
        <div className="social-links absolute top-10 right-0 flex gap-10 text-lg sm:gap-12 md:gap-14">
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="flex flex-col text-center text-[96px] font-extrabold leading-[0.8em] sm:text-[120px] sm:leading-[0.85em] md:text-[155px] lg:text-[215px]">
            <span>DAVID</span>
            <span>BORGES</span>
          </h1>
          <img src="/assets/profile.png" alt="Profile" className="mt-[-150px] w-[150px] rounded-2xl grayscale hover:grayscale-0 md:w-[200px] lg:w-[245px]"/>
        </div>
        <div className="absolute bottom-10 left-0 right-0 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4">
          <p className="max-w-[350px] text-center text-base font-medium md:text-left md:text-xl lg:max-w-[400px]">
            Frontend Engineer and Web Designer, currently available for work.
          </p>
          <p className="hidden max-w-[420px] text-right text-base font-semibold lg:block md:text-xl">
            Focused on interfaces and experiences.
          </p>
        </div>
      </div>
    </section>
  );
}