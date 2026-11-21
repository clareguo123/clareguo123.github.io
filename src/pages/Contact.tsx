import React, { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "contact@clareguo.com";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <div className="space-y-8 py-12 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Contact
      </p>
      <h1 className="text-fluid-h1 font-medium tracking-tight">
        Get in touch.
      </h1>
      <p className="max-w-xl text-fluid-lead text-muted-foreground">
        Open to conversations around product strategy, enterprise AI, and
        data-driven systems.
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild size="lg" className="rounded-full px-6">
          <a href={`mailto:${EMAIL}`}>
            <Mail className="mr-2 h-4 w-4" />
            {EMAIL}
          </a>
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleCopy}
          className="rounded-full px-5"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy email
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Contact;
