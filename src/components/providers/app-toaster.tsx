"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "glass border border-border/50 shadow-soft",
        },
      }}
    />
  );
}
