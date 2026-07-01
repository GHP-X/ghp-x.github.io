"use client";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(183,153,255,0.1),rgba(183,153,255,0.01))]" />
      <div className="dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(183,153,255,0.05),rgba(183,153,255,0))]" />
    </div>
  );
}
