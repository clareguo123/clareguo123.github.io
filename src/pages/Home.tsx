import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FOCUS_AREAS = [
  {
    index: "01",
    title: "Enterprise AI & LLMs",
    description:
      "Turning unstructured customer signals and large-scale behavioral data into clear, actionable product workflows.",
  },
  {
    index: "02",
    title: "Data & BI Platforms",
    description:
      "Shipping analytics and campaign evaluation applications from zero to adoption across retail and enterprise partners.",
  },
  {
    index: "03",
    title: "Payments & Banking",
    description:
      "Designing resilient APIs, account workflows, and cross-system data pipelines rooted in financial domain rigor.",
  },
];

const Home = () => {
  return (
    <div className="space-y-20 py-4 sm:py-10">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Product Manager · Tokyo
        </p>

        <h1 className="text-fluid-display font-medium tracking-tight text-foreground">
          Hello, I&apos;m{" "}
          <span className="font-serif italic font-normal">Clare</span>.
        </h1>

        <p className="max-w-2xl text-fluid-lead text-muted-foreground">
          Working at the intersection of{" "}
          <span className="text-foreground">Data Science</span>,{" "}
          <span className="text-foreground">Economics</span>, and{" "}
          <span className="text-foreground">Enterprise AI</span>—building products
          that turn complex data into measurable value.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/resume">
              View Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6">
            <Link to="/blog">Read Writing</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full px-5 text-muted-foreground hover:text-foreground">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="border-t border-border/60 pt-12"
      >
        <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Focus Areas
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {FOCUS_AREAS.map((area) => (
            <div key={area.index} className="space-y-2.5">
              <span className="font-mono text-xs text-muted-foreground">
                {area.index}
              </span>
              <h3 className="text-base font-medium tracking-tight text-foreground">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
