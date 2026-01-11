import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'DollarSign',
    title: '100% Бесплатно',
    description: 'Навсегда бесплатно. Без подписок, без скрытых платежей, без ограничений'
  },
  {
    icon: 'Globe',
    title: 'Открытый интернет',
    description: 'Доступ к любым заблокированным сайтам и сервисам без ограничений'
  },
  {
    icon: 'Shield',
    title: 'Анонимность',
    description: 'Полная конфиденциальность и защита ваших данных от слежки'
  },
  {
    icon: 'Zap',
    title: 'Высокая скорость',
    description: 'Быстрое соединение без потери качества и скорости интернета'
  },
  {
    icon: 'Lock',
    title: 'Шифрование',
    description: 'Военное шифрование трафика для максимальной безопасности'
  },
  {
    icon: 'Smartphone',
    title: 'Простота использования',
    description: 'Подключение одной кнопкой, никаких сложных настроек'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Почему Запрет?</h2>
          <p className="text-xl text-white/70">Надёжная защита и свобода в сети</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass p-6 hover-scale cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:animate-glow">
                <Icon name={feature.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
