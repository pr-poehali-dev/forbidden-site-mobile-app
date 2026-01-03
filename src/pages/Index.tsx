import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export default function Index() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [timeLeftIOS, setTimeLeftIOS] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timeLeftAndroid, setTimeLeftAndroid] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const iosTargetDate = new Date('2026-12-31T23:59:59').getTime();
    const now = new Date();
    const androidTargetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      
      const iosDifference = iosTargetDate - now;
      if (iosDifference > 0) {
        setTimeLeftIOS({
          days: Math.floor(iosDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((iosDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((iosDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((iosDifference % (1000 * 60)) / 1000)
        });
      }

      const androidDifference = androidTargetDate - now;
      if (androidDifference > 0) {
        setTimeLeftAndroid({
          days: Math.floor(androidDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((androidDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((androidDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((androidDifference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = async () => {
    if (!subscribeEmail.trim()) {
      setSubscribeStatus('error');
      setSubscribeMessage('Введите email');
      return;
    }

    setSubscribeStatus('loading');

    try {
      const response = await fetch('https://functions.poehali.dev/0272791d-8293-450f-a122-442c6e77bb40', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: subscribeEmail })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubscribeStatus('success');
        setSubscribeMessage(data.message);
        setSubscribeEmail('');
      } else {
        setSubscribeStatus('error');
        setSubscribeMessage(data.error || 'Ошибка подписки');
      }
    } catch (error) {
      setSubscribeStatus('error');
      setSubscribeMessage('Ошибка соединения');
    }

    setTimeout(() => {
      setSubscribeStatus('idle');
      setSubscribeMessage('');
    }, 5000);
  };

  const features = [
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
      icon: 'Wifi',
      title: 'Безопасный Wi-Fi',
      description: 'Защита при подключении к публичным сетям Wi-Fi'
    },
    {
      icon: 'Smartphone',
      title: 'Простота использования',
      description: 'Подключение одной кнопкой, никаких сложных настроек'
    }
  ];

  const reviews = [
    {
      name: 'Дмитрий С.',
      rating: 5,
      text: 'Наконец-то могу смотреть YouTube без тормозов! Работает стабильно.',
      avatar: '👨🏻'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Лучший VPN из всех, что пробовала. Быстрый и надёжный!',
      avatar: '👩🏻'
    },
    {
      name: 'Алексей В.',
      rating: 5,
      text: 'Простое подключение, высокая скорость. Рекомендую всем!',
      avatar: '👨🏼'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Запрет</div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Возможности</a>
            <a href="#download" className="text-white/80 hover:text-white transition-colors">Скачать</a>
            <a href="#reviews" className="text-white/80 hover:text-white transition-colors">Отзывы</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Войти
            </Button>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/10 animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Возможности
              </a>
              <a 
                href="#download" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Скачать
              </a>
              <a 
                href="#reviews" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </a>
              <a 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full">
                Войти
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
              Интернет<br />без границ
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Свободный доступ к любым сайтам. Быстро, безопасно, анонимно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 hover-scale">
                <Icon name="Download" className="mr-2" size={24} />
                Скачать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-20 animate-float">
            <div className="w-full max-w-4xl mx-auto glass rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/39461615-d33a-4888-8018-fdae0e0e5640/files/38f7f719-4d3e-4270-8e66-5b6345ce73fb.jpg" 
                  alt="Запрет VPN App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
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

      <section id="download" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Скачать Запрет</h2>
          <p className="text-xl text-white/70 mb-12">Доступно для iOS и Android</p>

          <div className="mb-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="glass p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="text-4xl">🤖</div>
                <h3 className="text-2xl font-bold text-white">Android релиз через:</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftAndroid.days}</div>
                  <div className="text-white/60 text-sm">Дней</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftAndroid.hours}</div>
                  <div className="text-white/60 text-sm">Часов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftAndroid.minutes}</div>
                  <div className="text-white/60 text-sm">Минут</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftAndroid.seconds}</div>
                  <div className="text-white/60 text-sm">Секунд</div>
                </div>
              </div>
              <Badge className="bg-gradient-to-r from-secondary to-accent mt-6 w-full justify-center py-2">Google Play</Badge>
            </Card>

            <Card className="glass p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="text-4xl">🍎</div>
                <h3 className="text-2xl font-bold text-white">iOS релиз через:</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftIOS.days}</div>
                  <div className="text-white/60 text-sm">Дней</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftIOS.hours}</div>
                  <div className="text-white/60 text-sm">Часов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftIOS.minutes}</div>
                  <div className="text-white/60 text-sm">Минут</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{timeLeftIOS.seconds}</div>
                  <div className="text-white/60 text-sm">Секунд</div>
                </div>
              </div>
              <Badge className="bg-gradient-to-r from-primary to-secondary mt-6 w-full justify-center py-2">App Store</Badge>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-white/70 text-lg">Подпишись на уведомления о релизе</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Ваш email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                disabled={subscribeStatus === 'loading'}
                className="glass border-white/20 text-white placeholder:text-white/40"
              />
              <Button 
                onClick={handleSubscribe}
                disabled={subscribeStatus === 'loading'}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto"
              >
                <Icon name="Bell" className="mr-2" size={20} />
                {subscribeStatus === 'loading' ? 'Подписка...' : 'Уведомить'}
              </Button>
            </div>
            {subscribeMessage && (
              <p className={`mt-4 text-sm ${subscribeStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {subscribeMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gradient">Отзывы пользователей</h2>
            <p className="text-xl text-white/70">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="glass p-6 hover-scale">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <Card className="glass p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Поддержка</h2>
            <p className="text-white/70 mb-8 text-center">Нужна помощь? Напишите нам!</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass border-white/20 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите, чем мы можем помочь..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="glass border-white/20 text-white placeholder:text-white/40 min-h-32"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить
              </Button>
            </div>

            <div className="mt-8 flex justify-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="MessageSquare" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg mb-2">Идея проекта</p>
            <p className="text-2xl font-bold text-gradient mb-1">Данил Денисович</p>
            <p className="text-white/60">ООО Strix Rp</p>
          </div>
          
          <div className="text-center text-white/60">
            <p className="mb-4">© 2026 Запрет. Все права защищены.</p>
            <div className="flex justify-center gap-6 text-sm flex-wrap">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}