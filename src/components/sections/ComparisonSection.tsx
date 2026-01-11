import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const comparisons = [
  {
    feature: 'Стоимость',
    zapret: '100% Бесплатно',
    paid: 'От 500₽/мес',
    icon: 'DollarSign'
  },
  {
    feature: 'Лимит трафика',
    zapret: 'Безлимитно',
    paid: 'Ограничено',
    icon: 'Infinity'
  },
  {
    feature: 'Скорость',
    zapret: 'Максимальная',
    paid: 'Зависит от тарифа',
    icon: 'Zap'
  },
  {
    feature: 'Серверы',
    zapret: 'Без ограничений',
    paid: '5-10 серверов',
    icon: 'Server'
  },
  {
    feature: 'Реклама',
    zapret: 'Нет рекламы',
    paid: 'Есть реклама',
    icon: 'ShieldOff'
  },
  {
    feature: 'Техподдержка',
    zapret: '24/7 Поддержка',
    paid: 'По тарифу',
    icon: 'Headphones'
  }
];

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref as any} id="comparison" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
      
      <div className={`container mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-lg px-6 py-2 mb-6 inline-block">
            💎 Сравнение
          </Badge>
          <h2 className="text-5xl font-bold mb-4 text-gradient">Запрет vs Платные VPN</h2>
          <p className="text-xl text-white/70">Почему платить, если можно пользоваться бесплатно?</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            <div className="hidden md:grid grid-cols-3 gap-4 mb-2">
              <div className="text-white/60 text-sm font-semibold"></div>
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white text-lg px-6 py-2">
                  🚀 Запрет
                </Badge>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="border-white/20 text-white/60 text-lg px-6 py-2">
                  💸 Платные VPN
                </Badge>
              </div>
            </div>

            {comparisons.map((item, index) => (
              <Card key={index} className="glass p-6 hover-scale">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} className="text-primary" />
                    </div>
                    <span className="text-white font-semibold text-center md:text-left">{item.feature}</span>
                  </div>
                  <div className="text-center">
                    <div className="md:hidden text-xs text-white/40 mb-1">Запрет</div>
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 md:px-4 py-2 text-sm md:text-base">
                      ✓ {item.zapret}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="md:hidden text-xs text-white/40 mb-1">Платные VPN</div>
                    <Badge variant="outline" className="border-red-500/30 text-red-400 px-3 md:px-4 py-2 text-sm md:text-base">
                      ✗ {item.paid}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="glass p-6 md:p-8 border-2 border-green-500/30">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-3">Экономия более 6000₽ в год!</h3>
              <p className="text-white/80 text-base md:text-lg mb-6">Используй Запрет бесплатно и получай всё, за что другие платят</p>
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать бесплатно
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}