import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  {
    icon: 'Users',
    target: 50000,
    suffix: '+',
    label: 'Активных пользователей',
    duration: 2000
  },
  {
    icon: 'Globe',
    target: 150,
    suffix: '+',
    label: 'Стран доступно',
    duration: 2000
  },
  {
    icon: 'Zap',
    target: 99,
    suffix: '%',
    label: 'Время работы',
    duration: 2000
  },
  {
    icon: 'Shield',
    target: 100,
    suffix: '%',
    label: 'Бесплатно навсегда',
    duration: 2000
  }
];

function AnimatedCounter({ target, duration, suffix }: { target: number; duration: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const startTime = Date.now();
          const endTime = startTime + duration;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * target);

            setCount(currentCount);

            if (now < endTime) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString('ru-RU')}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref as any} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
      
      <div className={`container mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Запрет в цифрах</h2>
          <p className="text-lg md:text-xl text-white/70">Нам доверяют тысячи пользователей</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass p-8 text-center hover-scale"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 animate-glow">
                <Icon name={stat.icon} size={32} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                <AnimatedCounter target={stat.target} duration={stat.duration} suffix={stat.suffix} />
              </div>
              <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
