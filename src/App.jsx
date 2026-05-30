import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Search,
  ShieldAlert,
  Terminal,
  Heart,
  Sparkles,
  ShieldCheck,
  MoonStar,
  Lock,
  BadgeCheck
} from 'lucide-react';

// ---------------- LOADER ----------------

const Loader = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Initializing love protocol...",
    "Scanning cutest person in Gotham...",
    "Analyzing Batman energy...",
    "Heart vulnerability detected...",
    "Preparing date request..."
  ];

  useEffect(() => {
    if (textIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setTextIndex((curr) => curr + 1);
      }, 1800);

      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 2000);
    }
  }, [textIndex, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex flex-col items-center justify-center fixed inset-0 z-50 bg-[#120812] text-pink-200 font-mono"
    >
      <Terminal size={48} className="mb-6 animate-pulse" />

      <motion.p
        key={textIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg md:text-xl tracking-widest text-center px-4"
      >
        {texts[textIndex]}
      </motion.p>
    </motion.div>
  );
};

// ---------------- HERO ----------------

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center relative px-6 text-center overflow-hidden">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="max-w-4xl z-10"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-6"
      >
        <p
          className="text-2xl md:text-4xl text-pink-200 tracking-widest"
          style={{
            fontFamily: "'Amiri', serif"
          }}
        >
          إلى أسماء
        </p>

        <p className="text-pink-100/50 text-sm mt-2 tracking-[0.3em] uppercase">
          To Asma
        </p>
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-pink-200 via-rose-100 to-pink-300 bg-clip-text text-transparent">
        In a world full of ordinary people...
        <br />

        <span className="text-pink-300">
          you became my favorite plot twist.
        </span>
      </h1>

      <p className="mt-6 text-pink-100/60 uppercase tracking-[0.3em] text-sm">
        Wayne Enterprises • Confidential Feelings File
      </p>

      <p
        className="mt-8 text-pink-100/80 text-2xl"
        style={{
          fontFamily: "'Amiri', serif"
        }}
      >
        أنتِ أجمل صدفة حصلت لي
      </p>

      <p className="text-pink-100/40 text-sm mt-2">
        “You are the most beautiful coincidence that happened to me.”
      </p>

    </motion.div>

  </section>
);

// ---------------- EVIDENCE ----------------

const EvidenceBoard = () => {


  const cards = [
    { icon: <Search className="text-pink-300 mb-4" />, title: "Suspiciously Pretty Behavior", desc: "You really expect me to act normal when you look like THAT?" },
    {
      icon: <Lock className="text-pink-300 mb-4" />,
      title: "Emotional Damage Report",
      desc: "I was mentally stable before you started looking this pretty."
    },
    {
      icon: <MoonStar className="text-pink-300 mb-4" />,
      title: "Batman Behavior Detected",
      desc: "Acts mysterious. Disappears randomly. Probably emotionally expensive."
    },
    {
      icon: <ShieldAlert className="text-pink-300 mb-4" />,
      title: "Security Breach",
      desc: "My emotional firewall collapsed after one smile. Embarrassing honestly."
    },
    {
      icon: <Heart className="text-pink-300 mb-4 fill-pink-300" />,
      title: "Criminal Levels of Cute",
      desc: "Pretty sure Gotham has laws against being this attractive."
    },
    {
      icon: <Sparkles className="text-pink-300 mb-4" />,
      title: "Main Character Syndrome",
      desc: "You walk into college like the soundtrack automatically starts playing."
    },
    {
      icon: <ShieldCheck className="text-green-300 mb-4" />,
      title: "Free Palestine Protocol",
      desc: "Certified supporter of humanity, justice, and people who deserve freedom."
    },
    {
      icon: <Heart className="text-red-300 mb-4 fill-red-300" />,
      title: "Green Flag Confirmed",
      desc: "Cares about people across the world AND somehow still looks this pretty."
    },
    {
      icon: <Sparkles className="text-white mb-4" />,
      title: "Keffiyeh Energy",
      desc: "Soft heart. Strong opinions. Elite combination honestly."
    }
  ];


  return (
    <section className="min-h-screen py-20 px-8 max-w-6xl mx-auto flex flex-col justify-center">

      <div className="flex items-center gap-3 mb-12">
        <Search className="text-pink-300" />

        <h2 className="text-3xl font-bold text-pink-100">
          Reasons why you're dangerously lovable
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {cards.map((card, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-pink-200/10 hover:border-pink-300/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(255,105,180,0.08)]"
          >

            {card.icon}

            <h3 className="text-2xl font-bold mb-4 text-pink-100">
              {card.title}
            </h3>

            <p className="text-pink-100/70 leading-relaxed">
              {card.desc}
            </p>

          </motion.div>

        ))}
      </div>
    </section>
  );
};

// ---------------- SCANNER ----------------

const Scanner = () => {

  const stats = [
    { label: "Kindness", value: 99 },
    { label: "Pretty Eyes", value: 100 },
    { label: "Batman Energy", value: 100 },
    { label: "Chance I Like You", value: 999 }
  ];

  return (
    <section className="min-h-screen py-20 px-8 max-w-4xl mx-auto flex flex-col justify-center">

      <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-pink-200/10 shadow-[0_0_40px_rgba(255,105,180,0.08)]">

        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-pink-200">
          <ShieldAlert />
          Batcomputer Relationship Analysis
        </h2>

        <div className="space-y-8">

          {stats.map((stat, i) => (

            <div key={i}>

              <div className="flex justify-between mb-2 text-pink-100">
                <span>{stat.label}</span>
                <span>{stat.value}%</span>
              </div>

              <div className="h-3 bg-black/20 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2
                  }}
                  className="h-full bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500"
                />

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 text-center text-pink-200 font-mono flex items-center justify-center gap-2">
          <BadgeCheck size={18} />
          Result: catastrophically perfect
        </div>

      </div>
    </section>
  );
};

// ---------------- PROPOSAL ----------------

const Proposal = ({ onSuccess }) => {

  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const [noTextIndex, setNoTextIndex] = useState(0);

  const noPhrases = [
    "NO",
    "Nice try Batman",
    "Access denied",
    "You can't reject destiny",
    "This option was deleted by Alfred",
    "Try pressing yes",
    "You're stuck with me now"
  ];

  const handleNoHover = () => {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    setNoPosition({ x, y });

    setNoTextIndex((prev) => (prev + 1) % noPhrases.length);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">

      <h2 className="text-5xl md:text-7xl font-black text-center leading-tight mb-16 bg-gradient-to-r from-pink-200 to-rose-300 bg-clip-text text-transparent">

        So Batman...

        <br />

        <div className="flex items-center justify-center gap-3 flex-wrap mt-4">

          <MoonStar size={40} className="text-pink-300" />

          <span>should we make this canon?</span>

          <Heart size={40} className="text-pink-300 fill-pink-300" />

        </div>

      </h2>

      <div className="flex items-center gap-8 relative h-32">

        <button
          onClick={onSuccess}
          className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold rounded-2xl shadow-[0_0_35px_rgba(255,105,180,0.5)] hover:scale-110 transition-all duration-300 flex items-center gap-2"
        >
          YES
          <Heart size={18} fill="currentColor" />
        </button>

        <motion.button
          animate={{
            x: noPosition.x,
            y: noPosition.y
          }}
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20
          }}
          className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-pink-200/10 text-pink-100 rounded-2xl absolute left-full whitespace-nowrap"
        >
          {noPhrases[noTextIndex]}
        </motion.button>

      </div>

    </section>
  );
};

// ---------------- SUCCESS ----------------

const SuccessModal = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-50 bg-[#120812] flex flex-col justify-center items-center text-center p-8"
  >

    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        bounce: 0.5
      }}
      className="space-y-6"
    >

      <Heart
        size={70}
        className="text-pink-400 mx-auto animate-pulse fill-pink-400"
      />

      <h1 className="text-6xl font-black bg-gradient-to-r from-pink-200 to-rose-300 bg-clip-text text-transparent flex items-center justify-center gap-4">

        <ShieldCheck size={48} className="text-pink-300" />

        <span>Mission accomplished</span>

      </h1>

      <p className="text-xl text-pink-200">
        Plot twist: you just became my favorite person.
      </p>

    </motion.div>
  </motion.div>
);

// ---------------- APP ----------------

export default function App() {

  const [stage, setStage] = useState("loading");

  return (

    <div className="min-h-screen text-white selection:bg-pink-400 selection:text-black font-sans relative overflow-hidden bg-gradient-to-b from-[#140814] via-[#1a0b1f] to-[#0d0610]">

      {/* Floating Hearts */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        {[...Array(25)].map((_, i) => (

          <motion.div
            key={i}
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              opacity: 0
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            className="absolute text-pink-300"
            style={{
              fontSize: `${10 + Math.random() * 24}px`
            }}
          >
            <Heart fill="currentColor" />
          </motion.div>

        ))}

      </div>

      <AnimatePresence>

        {stage === "loading" && (
          <Loader onComplete={() => setStage("main")} />
        )}

      </AnimatePresence>

      {stage === "main" && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <Hero />

          <EvidenceBoard />

          <Scanner />

          <Proposal onSuccess={() => setStage("success")} />

        </motion.div>

      )}

      {stage === "success" && <SuccessModal />}

      {/* Glow Background */}

      <div className="fixed inset-0 pointer-events-none z-[-1]">

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full blur-[120px]" />

      </div>

    </div>
  );
}
