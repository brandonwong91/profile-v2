"use client"
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <main className="flex min-h-screen relative w-screen p-24" onMouseMove={handleMouseMove}>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
        <div
          className="spotlight"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      <div className="w-full text-center">Hi, I am Brandon.</div>
    </main>
  )
}
