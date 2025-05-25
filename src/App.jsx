import React, { useState, useEffect, useCallback } from "react";

// Expanded and translated word lists
const nouns = [
  "A dragon",
  "An astronaut",
  "A robot",
  "A fairy",
  "A pirate",
  "A detective",
  "A mad scientist",
  "A ninja cat",
  "A talking dog",
  "A wise owl",
  "A wizard",
  "A mermaid",
  "A superhero",
  "A friendly alien",
  "A clumsy chef",
  "An ancient tree",
  "A playful ghost",
  "A knight",
  "A queen",
  "An explorer",
  "A street musician",
  "A ballerina",
  "An olympic athlete",
  "A fluffy monster",
  "A scarecrow",
  "A time traveler",
  "A sleepy bear",
  "A curious fox",
  "A brave mouse",
  "A singing flower",
  "A grumpy gnome",
  "A giant insect",
  "A steampunk inventor",
  "A space cowboy",
  "A shadow creature",
  "A crystal golem",
  "A forest spirit",
  "A desert nomad",
  "An arctic wolf",
  "A lava monster",
];

const actionsAdjectivesPlaces = [
  "dancing in the rain",
  "flying on a broomstick",
  "in a futuristic city",
  "eating giant pizza",
  "extremely happy",
  "a bit spooky",
  "in an enchanted forest",
  "exploring a mysterious cave",
  "building a sandcastle",
  "singing opera",
  "painting an abstract picture",
  "reading an ancient book",
  "underwater with dolphins",
  "very sleepy",
  "on a roller coaster",
  "discovering a treasure",
  "having a picnic",
  "in a secret laboratory",
  "traveling through time",
  "with stylish sunglasses",
  "meditating deeply",
  "on a spaceship",
  "on a deserted island",
  "very curious",
  "writing a letter",
  "glowing mysteriously",
  "in a crystal cave",
  "on a floating island",
  "whispering secrets",
  "covered in stars",
  "frozen in time",
  "in a tiny village",
  "on top of a volcano",
  "laughing uncontrollably",
  "made of clouds",
  "wearing a funny hat",
  "in a candy land",
  "solving a puzzle",
  "lost in a library",
  "surrounded by fireflies",
];

// Componente principal da aplicação
function App() {
  // Estados para armazenar as palavras geradas
  const [word1, setWord1] = useState("Click the button to start!");
  const [word2, setWord2] = useState("...");
  const [isAnimating, setIsAnimating] = useState(false);

  // Efeito para carregar as fontes do Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Inter:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link); // Cleanup
    };
  }, []);

  // Função para obter um item aleatório de um array
  const getRandomItem = useCallback((array) => {
    return array[Math.floor(Math.random() * array.length)];
  }, []);

  // Função para gerar e definir as novas palavras, com animação
  const generateWordsWithAnimation = () => {
    if (isAnimating) return; // Evita múltiplos cliques durante a animação

    setIsAnimating(true);
    let animationInterval;
    const animationDuration = 1500; // Duração da animação em milissegundos (1.5 segundos)
    const animationStep = 100; // Intervalo entre mudanças de palavras na animação

    // Inicia a animação da roleta
    animationInterval = setInterval(() => {
      setWord1(getRandomItem(nouns));
      setWord2(getRandomItem(actionsAdjectivesPlaces));
    }, animationStep);

    // Para a animação e define as palavras finais
    setTimeout(() => {
      clearInterval(animationInterval);
      const finalNoun = getRandomItem(nouns);
      const finalAction = getRandomItem(actionsAdjectivesPlaces);
      setWord1(finalNoun);
      setWord2(finalAction);
      setIsAnimating(false);
    }, animationDuration);
  };

  // Estilos inline para o body (textura de papel)
  const bodyStyle = {
    fontFamily: "'Patrick Hand', cursive",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#fdfbf7",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d2c9bc' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
    margin: 0,
    padding: "16px",
  };

  // Aplicando o estilo ao body diretamente
  useEffect(() => {
    const originalBodyStyles = {};
    Object.keys(bodyStyle).forEach((key) => {
      originalBodyStyles[key] = document.body.style[key];
      document.body.style[key] = bodyStyle[key];
    });

    // Cleanup function para restaurar estilos originais ao desmontar o componente
    return () => {
      Object.keys(bodyStyle).forEach((key) => {
        document.body.style[key] = originalBodyStyles[key] || null;
      });
    };
  }, []); // Array de dependências vazio garante que isso rode apenas uma vez

  return (
    <div
      style={{ fontFamily: "'Patrick Hand', cursive" }}
      className="flex justify-center items-center min-h-screen w-full"
    >
      <div
        className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl text-center w-full max-w-md lg:max-w-lg border"
        style={{ border: "1px solid #e0d9cf" }}
      >
        {/* Título da aplicação */}
        <h1
          className="text-4xl sm:text-5xl font-normal text-purple-700 mb-8 sm:mb-10"
          style={{ color: "#6d28d9" }}
        >
          What To Draw
        </h1>

        {/* Campo para exibir a primeira palavra */}
        <div
          className={`p-4 rounded-lg mb-6 text-xl sm:text-2xl min-h-[3.5rem] sm:min-h-[4rem] flex items-center justify-center w-full transition-all duration-100 ease-in-out ${
            isAnimating ? "opacity-75" : "opacity-100"
          }`}
          style={{
            backgroundColor: "#f3e8ff",
            borderColor: "#c084fc",
            border: "1px solid",
            color: "#581c87",
            lineHeight: 1.4,
          }}
        >
          {word1}
        </div>

        {/* Campo para exibir a segunda palavra */}
        <div
          className={`p-4 rounded-lg mb-6 text-xl sm:text-2xl min-h-[3.5rem] sm:min-h-[4rem] flex items-center justify-center w-full transition-all duration-100 ease-in-out ${
            isAnimating ? "opacity-75" : "opacity-100"
          }`}
          style={{
            backgroundColor: "#f3e8ff",
            borderColor: "#c084fc",
            border: "1px solid",
            color: "#581c87",
            lineHeight: 1.4,
          }}
        >
          {word2}
        </div>

        {/* Botão para gerar as palavras */}
        <button
          onClick={generateWordsWithAnimation}
          disabled={isAnimating} // Desabilita o botão durante a animação
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg w-full mt-6 uppercase tracking-wider transition-all duration-300 ease-in-out active:transform active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: "'Inter', sans-serif",
            backgroundColor: "#f97316",
          }}
        >
          {isAnimating ? "Generating..." : "Generate Idea!"}
        </button>

        {/* Texto de rodapé */}
        <p
          className="mt-8 sm:mt-10 text-sm sm:text-base text-purple-600"
          style={{ fontFamily: "'Inter', sans-serif", color: "#7c3aed" }}
        >
          Use the words as inspiration for your next drawing!
        </p>
      </div>
    </div>
  );
}

export default App;
