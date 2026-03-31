"use client";
import { useEffect } from "react";

const playTone = (frequency: number, type: OscillatorType, duration: number, volume: number = 0.05) => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) { }
};

export const AudioController = () => {
  useEffect(() => {
    // We only attach sounds after the first user interaction to satisfy browser autoplay policies.
    let audioAllowed = false;
    
    const enableAudio = () => {
      audioAllowed = true;
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
    };
    
    document.addEventListener("click", enableAudio);
    document.addEventListener("keydown", enableAudio);

    const handleMouseOver = (e: MouseEvent) => {
      if (!audioAllowed) return;
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.brutal-card') || target.closest('.group')) {
        playTone(800, 'square', 0.05, 0.01);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!audioAllowed) return;
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.brutal-card') || target.closest('.group')) {
        playTone(150, 'sawtooth', 0.1, 0.05);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
    };
  }, []);

  return null;
};
