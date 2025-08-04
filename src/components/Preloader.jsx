export default function Preloader() {
  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-[#0E1016]">
      <div className="texts-container flex items-center gap-2 text-2xl font-extrabold sm:text-3xl md:text-4xl">
        <span className="inline-block">Welcome</span>
        <span className="inline-block">.</span>
      </div>
    </div>
  );
}
