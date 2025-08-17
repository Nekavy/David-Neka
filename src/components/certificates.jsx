import { useEffect, useRef, useState } from "react";
import strings from "./strings";

const categories = ["All", "Certificates", "Awards"];

export default function Certificates() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalItem, setModalItem] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const [titles, setTitles] = useState({
    title1: strings.get("certificatetitle1"),
    title2: strings.get("certificatetitle2"),
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setTitles({
        title1: strings.get("certificatetitle1"),
        title2: strings.get("certificatetitle2"),
      });
      setHasAnimated(false);
    };
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const items = [
    {
      type: "Award",
      title: strings.get("item1_title"),
      issuer: strings.get("item1_issuer"),
      typeText: strings.get("item1_typeText"),
      images: ["/assets/certificates/MençãoHonrosaGondomar.png"],
    },
    {
      type: "Award",
      title: strings.get("item2_title"),
      issuer: strings.get("item2_issuer"),
      typeText: strings.get("item2_typeText"),
      images: [
        "/assets/certificates/costaincode.png",
        "/assets/certificates/incode2030.png",
      ],
    },
    {
      type: "Certificate",
      title: strings.get("item3_title"),
      issuer: strings.get("item3_issuer"),
      typeText: strings.get("item3_typeText"),
            images: [
        "/assets/certificates/Certificadosescolahonra.png",
        "/assets/certificates/Certificadosescolahonra2.png",
      ],
    },
    {
      type: "Award",
      title: strings.get("item4_title"),
      issuer: strings.get("item4_issuer"),
      typeText: strings.get("item4_typeText"),
      images: ["/assets/certificates/papticepremio.png",
        "/assets/certificates/papticephoto.png",
      ],
    },
    {
      type: "Certificate",
      title: strings.get("item5_title"),
      issuer: strings.get("item5_issuer"),
      typeText: strings.get("item5_typeText"),
      images: ["/assets/certificates/Certificadonivel4.png"],
    },
    {
      type: "Award",
      title: strings.get("item6_title"),
      issuer: strings.get("item6_issuer"),
      typeText: strings.get("item6_typeText"),
      images: ["/assets/certificates/cinelnivel5.png"],
    },
    {
      type: "Certificate",
      title: strings.get("item7_title"),
      issuer: strings.get("item7_issuer"),
      typeText: strings.get("item7_typeText"),
      images: ["/assets/certificates/ispgayalincenciatura.png"],
    },
    {
      type: "Certificate",
      title: strings.get("item8_title"),
      issuer: strings.get("item8_issuer"),
      typeText: strings.get("item8_typeText"),
      images: ["/assets/certificates/lodz.png"],
    },
    {
      type: "Certificate",
      title: strings.get("item9_title"),
      issuer: strings.get("item9_issuer"),
      typeText: strings.get("item9_typeText"),
      images: ["/assets/certificates/antwer.png"],
    },
    {
      type: "Certificate",
      title: strings.get("item10_title"),
      issuer: strings.get("item10_issuer"),
      typeText: strings.get("item10_typeText"),
      images: [""],
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.type === selectedCategory.slice(0, -1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (modalItem) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      setModalImageIndex(0);
    }
  }, [modalItem]);

  const handlePrevImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? modalItem.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setModalImageIndex((prev) =>
      prev === modalItem.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0E1016] text-[#e4ded7]"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-white">
          <span className={`opacity-0 ${hasAnimated ? "fade-up" : ""}`}>
            {titles.title1}
          </span>
          <p></p>
          <span className={`opacity-0 ${hasAnimated ? "fade-up-delay" : ""}`}>
            {titles.title2}
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-400 mb-12 text-center max-w-3xl">
          {strings.get("certificatedescript")}
        </p>

        <nav className="mb-12 flex justify-center gap-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
                selectedCategory === cat
                  ? "bg-white/80 text-gray-900"
                  : "bg-white/10 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredItems.length === 0 ? (
            <p className="text-gray-400">No items found in this category.</p>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-[#1f1f23] bg-[#1a1b22] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
                onClick={() => setModalItem(item)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-40 object-cover transition group-hover:opacity-90"
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-white/70">
                    {item.typeText}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.issuer}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {modalItem && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-5 p-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setModalItem(null)}
            >
              &times;
            </button>

            {modalItem.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300"
                >
                  &#10094;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300"
                >
                  &#10095;
                </button>
              </>
            )}

            <img
              src={modalItem.images[modalImageIndex]}
              alt="certificate"
              className="max-h-[70%] max-w-[90%] rounded-lg shadow-lg mb-6"
            />
            <div className="text-center text-white">
              <span className="text-sm uppercase tracking-wider text-white/70">
                {modalItem.typeText}
              </span>
              <h3 className="text-xl font-bold mt-2">{modalItem.title}</h3>
              <p className="text-base text-gray-300">{modalItem.issuer}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
