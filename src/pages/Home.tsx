import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypewriterText from "../components/TypeWriterText";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentTextLine1, setCurrentTextLine1] = useState("");
  const [currentTextLine2, setCurrentTextLine2] = useState("");
  const mainTextControls = useAnimation();
  const subTextLine1Controls = useAnimation();
  const subTextLine2Controls = useAnimation();
  const buttonsControls = useAnimation();
  const navigate = useNavigate();

  const text1 = "Product Manager at the intersection of Data Science, Economics and Enterprise AI.";
  const text2 = "I believe Technology, Data, and AI will unleash never-found value.";

  useEffect(() => {
    const animationSequence = async () => {
      await mainTextControls.start({ opacity: 1, y: 0 });
      await subTextLine1Controls.start({ opacity: 1 });
    };
    animationSequence();
  }, [mainTextControls, subTextLine1Controls]);

  useEffect(() => {
    if (currentTextLine1 === text1) {
      subTextLine2Controls.start({ opacity: 1 });
    }
  }, [currentTextLine1, subTextLine2Controls]);

  useEffect(() => {
    if (typingComplete && (currentTextLine2 === text2)) {
      buttonsControls.start({ opacity: 1, y: 0 });
    }
  }, [typingComplete, buttonsControls]);

  return (
    <div className="flex min-h-screen items-start pt-20">
      <div className="flex justify-center items-start w-full pt-20">
        <div className="container mx-auto lg:px-16 xl:px-24 shadow-none flex flex-col">
          <motion.h1
            className="text-6xl font-bold mb-12 text-left text-muted-background"
            initial={{ opacity: 0, y: -20 }}
            animate={mainTextControls}
            transition={{ duration: 1 }}
          >
            Hello, I'm Clare
          </motion.h1>
          <div className="text-xl mb-10 text-muted-foreground max-w-4xl">
            <motion.div
              className="mb-4 min-h-[1rem]"
              initial={{ opacity: 0 }}
              animate={subTextLine1Controls}
              transition={{ duration: 1 }}
            >
              <TypewriterText
                text={text1}
                onTextUpdate={setCurrentTextLine1}
              />
            </motion.div>
            <motion.div
              // className="min-h-[3rem]"
              initial={{ opacity: 0 }}
              animate={subTextLine2Controls}
              transition={{ duration: 1 }}
            >
              <TypewriterText
                text={text2}
                onTextUpdate={setCurrentTextLine2}
                onComplete={() => setTypingComplete(true)}
              />
            </motion.div>
          </div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={buttonsControls}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="lg"
              className="flex-1 px-6 py-3"
              onClick={() => navigate("/resume")}
            >
              Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 px-6 py-3"
              onClick={() => navigate("/blog")}
            >
              Blog
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;