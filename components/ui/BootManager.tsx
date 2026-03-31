"use client";
import React, { useState, useEffect } from "react";
import BootSequence from "./BootSequence";
import { AnimatePresence } from "framer-motion";

export const BootManager = () => {
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    // Check session storage to only show boot sequence once per session
    const hasBooted = sessionStorage.getItem("hasBooted_shatira_v2");
    if (!hasBooted) {
      setShowBoot(true);
      sessionStorage.setItem("hasBooted_shatira_v2", "true");
    }
  }, []);

  return (
    <AnimatePresence>
      {showBoot && <BootSequence onComplete={() => setShowBoot(false)} />}
    </AnimatePresence>
  );
};
