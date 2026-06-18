import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Lock, Play } from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";
import {
  ScrollProgress,
  Hero,
  StatsStrip,
  Marquee,
  ValueProp,
  Products,
  Testimonials,
  Process,
  FinalCTA,
  FAQ,
} from "./index";
import aboutVideo from "@/assets/about-us.mp4.asset.json";
import aboutPoster from "@/assets/about-us-poster.jpg.asset.json";

const PASSWORD = "sam14151";
const STORAGE_KEY = "v2-unlock";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "BrightFlow AI - About Us" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: V2Page,
});

function V2Page() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Marquee />
        <ValueProp />
        <AboutVideo />
        <Products />
        <Testimonials />
        <Process />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-display px-6">
      <form onSubmit={submit} className="w-full max-w-sm">
        <div className="flex items-center justify-center mb-6">
          <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
            <Lock className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-center tracking-tight">Protected page</h1>
        <p className="text-sm text-muted-foreground text-center mt-2 mb-8">
          Enter the password to continue.
        </p>
        <input
          type="password"
          value={value}
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-base"
        />
        {error && (
          <p className="text-sm text-red-500 mt-2">Incorrect password.</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full h-12 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section className="py-24 sm:py-32 border-t border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
            About Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            You didn't start your business to do admin work.
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            At Brightflow AI, we automate the low-leverage, repetitive tasks eating up your time — so you can focus on growing your business, or simply get your life back. Book a free 15-minute workflow audit and we'll show you exactly what AI can take off your plate.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden border border-border bg-black shadow-2xl"
        >
          <video
            ref={videoRef}
            src={aboutVideo.url}
            poster={aboutPoster.url}
            controls={playing}
            playsInline
            preload="metadata"
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            className="w-full h-auto block aspect-video object-cover"
          />
          {!playing && (
            <button
              type="button"
              onClick={play}
              aria-label="Play about us video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition group"
            >
              <span className="h-20 w-20 rounded-full bg-white/95 group-hover:bg-white flex items-center justify-center shadow-xl transition">
                <Play className="h-8 w-8 text-black ml-1" fill="currentColor" />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
