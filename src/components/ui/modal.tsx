"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  onExited: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ open, onExited, children, className }: Props) => {
  const [mounted, setMounted] = useState(open);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const dialog = dialogRef.current;

      if (!overlay || !dialog) return;

      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: "power2.out" },
      });

      if (open) {
        tl.fromTo(overlay, { opacity: 0 }, { opacity: 1 });
        tl.fromTo(
          dialog,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1 },
          "<",
        );
      } else {
        tl.to(dialog, {
          y: 40,
          opacity: 0,
          scale: 0.95,
        });
        tl.to(
          overlay,
          {
            opacity: 0,
            onComplete: () => {
              setMounted(false);
              onExited();
            },
          },
          "<",
        );
      }
    },
    { dependencies: [open] },
  );

  if (!mounted) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="bg-primary-50 fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-primary border-accent relative mx-4 w-full max-w-xl rounded-2xl border p-8 md:p-10",
          className,
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
