import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrail((prev) => {
        const filtered = prev.filter((point) => Date.now() - point.timestamp < 500);
        return [...filtered, newPoint].slice(-20);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 500);
        const size = Math.max(2, 8 - (age / 500) * 6);

        return (
          <div
            key={`${point.x}-${point.y}-${point.timestamp}`}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity,
              transform: `scale(${1 - age / 1000})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;