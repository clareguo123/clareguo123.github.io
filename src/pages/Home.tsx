import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "../components/ui/button";
import TypewriterText from "../components/TypeWriterText";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const mainTextControls = useAnimation();
  const subTextControls = useAnimation();
  const buttonsControls = useAnimation();
  const navigate = useNavigate();

  const text =
    "Product Manager at the intersection of Data Science and Enterprise AI. I believe Technology, Data, and AI will unleash never-found value.";

  useEffect(() => {
    const animationSequence = async () => {
      await mainTextControls.start({ opacity: 1, y: 0 });
      await subTextControls.start({ opacity: 1 });
    };
    animationSequence();
  }, [mainTextControls, subTextControls]);

  useEffect(() => {
    if (typingComplete) {
      buttonsControls.start({ opacity: 1 });
    }
  }, [typingComplete, buttonsControls]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className="text-6xl font-bold mb-8 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={mainTextControls}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm Clare
        </motion.h1>
        <motion.div
          className="text-xl mb-12 text-muted-foreground text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={subTextControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative">
            <TypewriterText
              text={text}
              onTextUpdate={setCurrentText}
              onComplete={() => setTypingComplete(true)}
            />
            {!typingComplete && (
              <motion.span
                className="absolute top-0 w-0.5 h-6 bg-foreground"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ left: `${currentText.length * 0.61}em` }}
              />
            )}
          </div>
        </motion.div>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={buttonsControls}
          transition={{ duration: 0.5 }}
        >
          <Button size="lg" onClick={() => navigate("/resume")}>
            Resume
          </Button>
          <Button variant="outline" size="lg">
            Blog
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
