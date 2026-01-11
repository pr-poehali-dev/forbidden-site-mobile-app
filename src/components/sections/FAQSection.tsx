import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Запрет действительно бесплатный?',
    answer: 'Да! Приложение полностью бесплатное, без скрытых платежей, подписок или рекламы. Вы получаете полный функционал без ограничений.'
  },
  {
    question: 'Как работает Запрет?',
    answer: 'Запрет использует современные технологии шифрования и маршрутизации трафика, чтобы обеспечить доступ к заблокированным ресурсам. Просто нажмите кнопку подключения и всё работает автоматически.'
  },
  {
    question: 'Безопасен ли Запрет?',
    answer: 'Абсолютно. Мы используем военное шифрование для защиты вашего трафика и не собираем логи активности. Ваша конфиденциальность — наш приоритет.'
  },
  {
    question: 'На каких устройствах работает?',
    answer: 'Запрет доступен для iOS (выход 31 декабря 2026) и Android (выход через 30 дней). Одно приложение работает на всех ваших устройствах.'
  },
  {
    question: 'Есть ли ограничения трафика?',
    answer: 'Нет! У нас безлимитный трафик. Смотрите видео, слушайте музыку, работайте — без ограничений по объёму данных.'
  },
  {
    question: 'Влияет ли Запрет на скорость интернета?',
    answer: 'Мы оптимизировали приложение для максимальной скорости. В большинстве случаев вы не заметите разницы в скорости по сравнению с обычным соединением.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref as any} id="faq" className="py-20 px-4 relative">
      <div className={`container mx-auto max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Частые вопросы</h2>
          <p className="text-lg md:text-xl text-white/70">Всё что нужно знать о Запрет</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">{faq.question}</h3>
                <Icon 
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                  size={24} 
                  className="text-primary flex-shrink-0 transition-transform"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-white/80 text-sm md:text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
