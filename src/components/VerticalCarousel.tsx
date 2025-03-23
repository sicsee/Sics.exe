import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/img1.svg",
  "/img2.svg",
  "/img3.svg",
  "/img4.svg",
  "/img5.svg",
];

const VerticalCarousel = () => {
  const [index, setIndex] = useState(2); // Começa no meio

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[450px] h-[480px] flex flex-col items-center overflow-hidden pt-20">
      {images.map((src, i) => {
        // Calcula a opacidade e a posição vertical das imagens com base no índice
        const opacity = i === index ? 1 : 0.4; // Imagem central com opacidade total, as outras com opacidade reduzida

        // Ajusta a posição das imagens para criar o efeito de carrossel
        const positionOffset = (i - index) * 100; // Ajuste para um gap de 100px entre as imagens

        return (
          <motion.img
            key={i}
            src={src}
            alt={`Imagem ${i}`}
            className="absolute left-1/2 -translate-x-1/2 w-auto h-auto object-contain"
            animate={{ opacity }}
            transition={{ duration: 0.5 }}
            style={{
              top: `${positionOffset + 120}px`, // Ajuste para garantir que o carrossel se encaixe no espaço de 480px
            }}
          />
        );
      })}
    </div>
  );
};

export default VerticalCarousel;
