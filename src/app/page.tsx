"use client";

import { useState, useEffect} from "react";
import { useInView } from "./useInView"; // or inline it
import { PowerGlitch } from "powerglitch";

export default function Home() {
  const [scrambledTexts, setScrambledTexts] = useState({
    name: "",
    software: "XK9#M@P2$Q7&N4*V8!",
    philosopher: "H5@J2#K9$L7&M4*",
    mathematician: "R8#T3$Y6@U1*I9&O5",
    learner: "P2#M7$K4@N9*",
    year: "X7#",
    school: "B9#R2$O8@W5*",
    location: "L4#O9$S2@A8*N3&G6",
  });

  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typedTechText, setTypedTechText] = useState("");
  const [showTechCursor, setShowTechCursor] = useState(false);
  //const imageRef = useRef<HTMLDivElement>(null);
  const fullName = "JO JOJO";
  const techText = "[0x274C] | LAT 34.05° N\n[2025.06.20] | LIVE";

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Typewriter effect for "JO JOJO"
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        if (currentIndex === 2) {
          // Add a pause after "JO"
          setTimeout(() => {
            setTypedText(fullName.slice(0, currentIndex + 1));
            currentIndex++;
          }, 800);
        } else {
          setTypedText(fullName.slice(0, currentIndex + 1));
          currentIndex++;
        }
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          clearInterval(cursorInterval);
          setShowCursor(false);

          // Start technical text typewriter after 2 seconds
          setTimeout(() => {
            setShowTechCursor(true);
            let techIndex = 0;
            const techTypeInterval = setInterval(() => {
              if (techIndex < techText.length) {
                setTypedTechText(techText.slice(0, techIndex + 1));
                techIndex++;
              } else {
                clearInterval(techTypeInterval);
                setTimeout(() => {
                  setShowTechCursor(false);
                }, 1000);
              }
            }, 50); // Faster typing for technical text
          }, 2000);
        }, 1000);
      }
    }, 200);

    // Function to animate scramble letter-by-letter
    const animateScramble = (
      key: keyof typeof scrambledTexts,
      targetText: string,
      delayPerChar = 80
    ) => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      let index = 0;

      const scrambleInterval = setInterval(() => {
        setScrambledTexts((prev) => {
          const newText = targetText
            .split("")
            .map((char, i) => {
              if (i < index) return char;
              if (char === " ") return " ";
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");

          return { ...prev, [key]: newText };
        });

        index++;
        if (index > targetText.length) {
          clearInterval(scrambleInterval);
        }
      }, delayPerChar);
    };

    const textMap: Record<keyof typeof scrambledTexts, string> = {
      software: "SOFTWARE ENGINEER",
      philosopher: "PHILOSOPHER",
      mathematician: "MATHEMATICIAN",
      learner: "LEARNER",
      year: "2005",
      school: "BROWN",
      location: "LOS ANGELES, CA",
      name: "", // unused
    };

    // Stagger the animations slightly
    const keys = Object.keys(textMap) as (keyof typeof scrambledTexts)[];
    keys.forEach((key, i) => {
      setTimeout(() => {
        animateScramble(key, textMap[key]);
      }, 1000 + i * 300);
    });

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Initialize PowerGlitch for the button
  useEffect(() => {
    const glitchInstance = PowerGlitch.glitch(".glitch-image", {
      playMode: "always",
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 10000,
        //easing: "ease-in-out",
      },
      glitchTimeSpan: {
        start: 0.97,
        end: 1.0,
      },
      shake: {
        velocity: 15,
        amplitudeX: 0.1,
        amplitudeY: 0.1,
      },
      slice: {
        count: 8,
        velocity: 20,
        minHeight: 0.02,
        maxHeight: 0.2,
        hueRotate: true,
      },
    });

    return () => {
      glitchInstance.stopGlitch();
    };
  }, []);

  useEffect(() => {
    const glitchInstance = PowerGlitch.glitch(".glitch-name", {
      playMode: "always",
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 10000,
        //easing: "ease-in-out",
      },
      glitchTimeSpan: {
        start: 0.94,
        end: 0.97,
      },
      shake: {
        velocity: 15,
        amplitudeX: 0.1,
        amplitudeY: 0.1,
      },
      slice: {
        count: 8,
        velocity: 20,
        minHeight: 0.02,
        maxHeight: 0.2,
        hueRotate: true,
      },
    });

    return () => {
      glitchInstance.stopGlitch();
    };
  }, []);

  const [quoteRef, isInView] = useInView();
  const [beautyFlicker, setBeautyFlicker] = useState(false);
  const [loveFlicker, setLoveFlicker] = useState(false);
  const [dangerFlicker, setDangerFlicker] = useState(false);
  const [attributionText, setAttributionText] = useState("");
  const attributionFull = "— ALBERT CAMUS";
  const [attributionDone, setAttributionDone] = useState(false);

  useEffect(() => {
    if (isInView && !attributionDone) {
      setBeautyFlicker(false);
      setLoveFlicker(false);
      setDangerFlicker(false);
      setAttributionText("");
      setTimeout(() => {
        setBeautyFlicker(true);
        setTimeout(() => {
          setLoveFlicker(true);
          setTimeout(() => {
            setDangerFlicker(true);
            setTimeout(() => {
              // Typewriter effect for attribution
              let i = 0;
              const interval = setInterval(() => {
                setAttributionText(attributionFull.slice(0, i + 1));
                i++;
                if (i === attributionFull.length) {
                  clearInterval(interval);
                  setAttributionDone(true);
                }
              }, 60);
            }, 2000); // 2s after last flicker
          }, 4000); // delay after LOVE flicker (4s)
        }, 4000); // delay after BEAUTY flicker (4s)
      }, 3000); // initial delay (3s for reading)
    }
  }, [isInView, attributionDone]);

  // Initialize PowerGlitch for the image
  /*useEffect(() => {
    if (imageRef.current) {
      const imageGlitchInstance = PowerGlitch.glitch(imageRef.current, {
        playMode: "always",
        createContainers: true,
        hideOverflow: false,
        timing: {
          duration: 2000,
          easing: "ease-in-out",
        },
        glitchTimeSpan: {
          start: 0.5,
          end: 0.7,
        },
        shake: {
          velocity: 20,
          amplitudeX: 0.3,
          amplitudeY: 0.3,
        },
        slice: {
          count: 8,
          velocity: 20,
          minHeight: 0.02,
          maxHeight: 0.2,
          hueRotate: true,
        },
      });

      return () => {
        imageGlitchInstance.stopGlitch();
      };
    }
  }, []);*/

  useEffect(() => {
    const glitchInstance = PowerGlitch.glitch(".glitch-projects", {
      playMode: "always",
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 9000,
      },
      glitchTimeSpan: {
        start: 0.88,
        end: 0.93,
      },
      shake: {
        velocity: 12,
        amplitudeX: 0.08,
        amplitudeY: 0.08,
      },
      slice: {
        count: 7,
        velocity: 18,
        minHeight: 0.02,
        maxHeight: 0.18,
        hueRotate: true,
      },
    });

    return () => {
      glitchInstance.stopGlitch();
    };
  }, []);

  const [showMediumModal, setShowMediumModal] = useState(false);
  // Modal state for Weenix link
  const [showWeenixModal, setShowWeenixModal] = useState(false);

  return (
    <main className="relative bg-black text-white font-mono overflow-x-hidden">
      {/* Optional grainy background overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/grain8.png')] bg-repeat "></div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex">
        {/* Big Name Text - Bottom Left */}
        <div className="absolute bottom-0 left-0 z-20 glitch-name">
          <h1
            className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold text-red-600 font-['Alte_Haas_Grotesk'] leading-none"
            style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}
          >
            {typedText}
            {showCursor && <span className="font-thin">|</span>}
          </h1>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full">
          <div className="absolute top-8 left-8 space-y-2">
            <p
              className="text-red-600 font-bold text-lg tracking-wide"
              style={{
                fontFamily: "neue-haas-grotesk-display, sans-serif",
                fontWeight: 500,
                textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
              }}
            >
              {scrambledTexts.software}
            </p>
            <p
              className="text-red-600 font-bold text-lg tracking-wide"
              style={{
                fontFamily: "neue-haas-grotesk-display, sans-serif",
                fontWeight: 500,
                textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
              }}
            >
              {scrambledTexts.philosopher}
            </p>
            <p
              className="text-red-600 font-bold text-lg tracking-wide"
              style={{
                fontFamily: "neue-haas-grotesk-display, sans-serif",
                fontWeight: 500,
                textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
              }}
            >
              {scrambledTexts.mathematician}
            </p>
            <p
              className="text-red-600 font-bold text-lg tracking-wide"
              style={{
                fontFamily: "neue-haas-grotesk-display, sans-serif",
                fontWeight: 500,
                textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
              }}
            >
              {scrambledTexts.learner}
            </p>
          </div>
        </div>
        <div className="absolute top-100 left-20 text-zinc-400 text-sm leading-relaxed tracking-widest font-mono opacity-60">
          {typedTechText.split("\n").map((line, index, arr) => (
            <span key={index}>
              {line}
              {index < arr.length - 1 && <br />}
            </span>
          ))}
          {showTechCursor && <span className="font-thin">|</span>}
        </div>

        {/* Halftone Image - Positioned over the big text */}
        <div className="absolute right-0 top-0 z-5 w-3/4 h-full flex items-center justify-center">
          <div className="glitch-image w-full h-full relative">
            <img
              src="/halftone_2.png"
              alt="Halftone Face"
              className="w-full h-full object-contain grayscale-[60%]"
            />

            {/* Corner brackets - thick and large */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-6 border-t-6 border-red-600"></div>
            <div className="absolute bottom-2 right-4 w-16 h-16 border-r-6 border-b-6 border-red-600"></div>

            {/* Sideways text overlay on image */}
            <div className="absolute left-[90%] top-15 bottom-10 h-full flex flex-col justify-between py-8 z-10">
              {/* Top text - 2005 */}
              <div className="transform -rotate-90 origin-left">
                <p
                  className="text-red-600 font-bold text-3xl tracking-widest"
                  style={{
                    fontFamily: "neue-haas-grotesk-display, sans-serif",
                    fontWeight: 500,
                    textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
                  }}
                >
                  {scrambledTexts.year}
                </p>
              </div>

              {/* Middle text - BROWN */}
              <div className="transform -rotate-90 origin-left">
                <p
                  className="text-red-600 font-bold text-3xl tracking-widest"
                  style={{
                    fontFamily: "neue-haas-grotesk-display, sans-serif",
                    fontWeight: 500,
                    textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
                  }}
                >
                  {scrambledTexts.school}
                </p>
              </div>

              {/* Bottom text - LOS ANGELES, CA */}
              <div className="transform -rotate-90 origin-left">
                <p
                  className="text-red-600 font-bold text-3xl tracking-widest"
                  style={{
                    fontFamily: "neue-haas-grotesk-display, sans-serif",
                    fontWeight: 500,
                    textShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
                  }}
                >
                  {scrambledTexts.location.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        ref={quoteRef}
        className="relative h-[100vh] w-full flex items-center justify-center mt-[30vh]"
      >
        <p className="text-7xl text-zinc-400 text-justify z-10 font-['Alte_Haas_Grotesk'] font-bold max-w-2xl mx-auto text-balance">
          Life can be magnificent and overwhelming — that is the whole tragedy.
          Without{" "}
          <span
            className={`text-red-600${
              beautyFlicker ? " animate-flicker" : " opacity-0"
            }`}
            style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}
          >
            BEAUTY
          </span>
          ,{" "}
          <span
            className={`text-red-600${
              loveFlicker ? " animate-flicker" : " opacity-0"
            }`}
            style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}
          >
            LOVE
          </span>
          , or{" "}
          <span
            className={`text-red-600${
              dangerFlicker ? " animate-flicker" : " opacity-0"
            }`}
            style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}
          >
            DANGER
          </span>{" "}
          it would almost be easy to live.
        </p>
        {/* Attribution Typewriter (only on quote section) */}
        <div className="absolute bottom-8 right-8 z-20">
          <span
            className="text-lg text-zinc-200 tracking-widest font-[neue-haas-grotesk-display]"
            style={{
              fontFamily: "neue-haas-grotesk-display, sans-serif",
              fontWeight: 500,
            }}
          >
            {attributionDone ? attributionFull : attributionText}
          </span>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section className="relative w-full flex-col items-center justify-center py-32">
        {/* Section Title */}
        <h2
          className="glitch-projects text-6xl md:text-8xl lg:text-[10rem] font-bold text-red-600 font-['Alte_Haas_Grotesk'] leading-none mb-16 w-full text-left max-w-full overflow-x-hidden pl-8"
          style={{ textShadow: "0 0 30px rgba(220, 38, 38, 0.8)" }}
        >
          PROJECTS
        </h2>
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8">
          {/* WEENIX OS */}
          <div
            className="relative bg-zinc-900 overflow-hidden shadow-lg group aspect-square flex items-center justify-center cursor-pointer"
            onClick={() => setShowWeenixModal(true)}
          >
            <img
              src="/Weenix.png"
              alt="Weenix OS"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 blur-sm"
            />
            <div className="relative z-10 text-left bg-transparent px-1 py-8 aspect-square flex flex-col items-start justify-center rounded">
              <h3 className="text-sm font-bold text-red-600 font-['Alte_Haas_Grotesk'] mb-1">
                WEENIX OS
              </h3>
              <p className="text-sm font-bold text-red-600 font-['Alte_Haas_Grotesk'] tracking-widest">
                JAN -<br />
                MAY 25
              </p>
            </div>
          </div>

          {/* PNEUMONIA DETECTOR */}
          <a
            href="https://github.com/JoJojo1256/pneumonia-detector"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-zinc-900 overflow-hidden shadow-lg group aspect-square flex items-center justify-center cursor-pointer"
          >
            <img
              src="/PneumoniaDetector.png"
              alt="Pneumonia Detector"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 blur-sm"
            />
            <div className="relative z-10 text-left bg-transparent px-1 py-8 aspect-square flex flex-col items-start justify-center rounded">
              <h3 className="text-sm font-bold text-red-600 font-['Alte_Haas_Grotesk'] mb-1">
                PNEUMONIA
                <br />
                DETECTOR
              </h3>
              <p className="text-sm font-bold text-red-600 font-['Alte_Haas_Grotesk'] tracking-widest">
                DEC 24
              </p>
            </div>
          </a>

          {/* GRAPH THEORY VISUALIZER */}
          <a
            href="https://github.com/JoJojo1256/GraphVisualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-zinc-900 overflow-hidden shadow-lg group aspect-square flex items-center justify-center cursor-pointer"
          >
            <img
              src="/GraphTheory.png"
              alt="Graph Theory Visualizer"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 blur-sm"
            />
            <div className="relative z-10 text-left bg-transparent px-1 py-8 aspect-square flex flex-col items-start justify-center rounded">
              <h3 className="text-sm font-bold text-red-600 font-['Alte_Haas_Grotesk'] mb-1">
                GRAPH
                <br />
                THEORY
                <br />
                VISUA-
                <br />
                LIZER
              </h3>
              <p className="text-sm font-bold text-red-600 font-['Alte_Haas_Grotesk'] tracking-widest">
                JUN 25
              </p>
            </div>
          </a>
        </div>
        {/* Weenix Modal */}
        {showWeenixModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-zinc-900 p-12 rounded-lg shadow-lg text-center max-w-md">
              <p className="text-lg text-zinc-200 mb-8">
                Since this was a classroom project, I cannot share the repo for
                academic integrity, but I can take you to the assignment page.
              </p>
              <a
                href="https://github.com/brown-cs1690/handout/wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition mb-4"
              >
                View Assignment Page
              </a>
              <br />
              <button
                className="mt-2 px-6 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-800 transition"
                onClick={() => setShowWeenixModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Links Section */}
      <section className="relative w-full flex items-center justify-center py-48">
        <div className="grid grid-cols-2 gap-x-48 w-full max-w-full mx-auto ">
          <a
            href="https://github.com/JoJojo1256"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9.5rem] text-zinc-400 hover:text-red-600 transition-colors duration-300 text-left"
            style={{
              fontFamily: "neue-haas-grotesk-display, sans-serif",
              fontWeight: 500,
              textShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
            }}
          >
            GITHUB
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9.5rem] text-zinc-400 hover:text-red-600 transition-colors duration-300 text-right"
            style={{
              fontFamily: "neue-haas-grotesk-display, sans-serif",
              fontWeight: 500,
              textShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
            }}
          >
            RÉSUMÉ
          </a>
          <a
            href="https://linkedin.com/in/jo-jojo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9.5rem] text-zinc-400 hover:text-red-600 transition-colors duration-300 text-left"
            style={{
              fontFamily: "neue-haas-grotesk-display, sans-serif",
              fontWeight: 500,
              textShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
            }}
          >
            LINKEDIN
          </a>
          <a
            onClick={() => setShowMediumModal(true)}
            //href="#"
            className="text-[9.5rem] text-zinc-400 hover:text-red-600 transition-colors duration-300 text-right"
            style={{
              fontFamily: "neue-haas-grotesk-display, sans-serif",
              fontWeight: 500,
              textShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
            }}
          >
            MEDIUM
          </a>
        </div>
        {/* Medium Modal */}
        {showMediumModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-zinc-900 p-12 rounded-lg shadow-lg text-center">
              <p className="text-3xl text-zinc-200 mb-8">Coming soon</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={() => setShowMediumModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
