"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "sava-visited";

export function LoadingScreen() {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(KEY);
    if (seen) {
      setVisible(false);
      return;
    }
    setVisible(true);
    sessionStorage.setItem(KEY, "1");
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-paper dark:bg-cocoa-950"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-cocoa-800 dark:text-cream-50"
          >
            SAVA <span className="text-amber-500">Select</span>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 h-px w-48 origin-left bg-cocoa-800/30 dark:bg-cream-100/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
