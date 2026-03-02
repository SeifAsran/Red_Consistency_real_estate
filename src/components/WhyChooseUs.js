import React, { useState, useRef, useEffect } from 'react';
import { Heart, Calendar, Home, Headphones } from 'lucide-react';
import './WhyChooseUs.css';

const ACHIEVEMENTS = [
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    caption: 'Excellence verified by our community.',
    Icon: Heart,
  },
  {
    id: 'experience',
    value: 12,
    suffix: '+',
    label: 'Years of Experience',
    caption: 'Navigating the Egyptian market with precision.',
    Icon: Calendar,
  },
  {
    id: 'properties',
    value: 500,
    suffix: '+',
    label: 'Properties Sold',
    caption: 'A legacy of successful transitions.',
    Icon: Home,
  },
  {
    id: 'support',
    value: null,
    display: '24/7',
    label: 'Premium Support',
    caption: 'Consistent care for your investment.',
    Icon: Headphones,
  },
];

const useCountUp = (end, suffix = '', duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let rafId;
    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  return count + suffix;
};

const StatBlock = ({ achievement, isInView }) => {
  const count = useCountUp(
    achievement.value ?? 0,
    achievement.suffix ?? '',
    2000,
    isInView && achievement.value != null
  );
  const display = achievement.value != null ? count : achievement.display;
  const Icon = achievement.Icon;

  return (
    <div className="achievement-stat">
      <div className="achievement-icon-wrap">
        <Icon className="achievement-icon" size={28} strokeWidth={1.5} />
      </div>
      <div className="achievement-number">{display}</div>
      <div className="achievement-label">{achievement.label}</div>
      <p className="achievement-caption">{achievement.caption}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) setIsInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section ref={sectionRef} className="achievement-section">
      <div className="container">
        <h2 className="achievement-heading">Why Choose Us</h2>
        <div className="achievement-grid">
          {ACHIEVEMENTS.map((achievement) => (
            <div key={achievement.id} className="achievement-cell">
              <StatBlock achievement={achievement} isInView={isInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
