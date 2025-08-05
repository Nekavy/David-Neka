// src/components/BlobityCursor.jsx
import { useEffect } from "react";
import Blobity from "blobity";

export default function BlobityCursor() {
  useEffect(() => {
    const blobity = new Blobity({
      licenseKey: "opensource",          // uso gratuito
      color: "#e4ded7",                  // cor da bolha
      dotColor: "#0e1016",               // cor do ponto central
      invert: true,                      // bolha clara sobre fundo escuro
      magnetic: true,                    // efeito de atração a botões
      size: 40,                          // tamanho base da bolha
      fontColor: "#0e1016",              // cor do texto interno
      radius: 4,                         // borda arredondada
      zIndex: 1,   
      focusableElements:
        "[data-blobity], a, button, [data-blobity-tooltip]",
    });

    return () => {
      blobity.destroy(); // limpa ao desmontar
    };
  }, []);

  return null;
}
