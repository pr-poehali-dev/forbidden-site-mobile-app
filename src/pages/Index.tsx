import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: 'Users',
      title: 'Живое сообщество',
      description: 'Встречайте людей со схожими интересами и создавайте новые связи'
    },
    {
      icon: 'MessageCircle',
      title: 'Мгновенные чаты',
      description: 'Общайтесь в реальном времени с друзьями и группами'
    },
    {
      icon: 'Zap',
      title: 'Умные рекомендации',
      description: 'Алгоритм подбирает контент специально для вас'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Защита данных и приватность на первом месте'
    },
    {
      icon: 'Heart',
      title: 'Лайки и реакции',
      description: 'Выражайте эмоции с помощью богатой системы реакций'
    },
    {
      icon: 'TrendingUp',
      title: 'Тренды',
      description: 'Следите за актуальными темами и будьте в курсе событий'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Лучшее приложение для общения! Нашла столько единомышленников!',
      avatar: '👩🏻'
    },
    {
      name: 'Максим Козлов',
      rating: 5,
      text: 'Интерфейс просто огонь, все интуитивно понятно',
      avatar: '👨🏻'
    },
    {
      name: 'Елена Смирнова',
      rating: 4,
      text: 'Отличная альтернатива другим социальным сетям. Рекомендую!',
      avatar: '👱🏻‍♀️'
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
              Новый уровень<br />социального общения
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Присоединяйся к Запрет — самому яркому и динамичному сообществу для настоящих друзей
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
                  src="https://cdn.poehali.dev/projects/39461615-d33a-4888-8018-fdae0e0e5640/files/734fd92b-9195-4f30-b112-8352de70cb53.jpg" 
                  alt="Запрет App Interface"
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
            <h2 className="text-5xl font-bold mb-4 text-gradient">Возможности приложения</h2>
            <p className="text-xl text-white/70">Всё, что нужно для комфортного общения</p>
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
          <h2 className="text-5xl font-bold mb-4 text-gradient">Скачать приложение</h2>
          <p className="text-xl text-white/70 mb-12">Доступно на всех платформах</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Card className="glass p-8 flex-1 w-full hover-scale cursor-pointer group">
              <div className="text-6xl mb-4">🍎</div>
              <h3 className="text-2xl font-bold mb-2 text-white">App Store</h3>
              <p className="text-white/60 mb-4">для iPhone и iPad</p>
              <Badge className="bg-gradient-to-r from-primary to-secondary">iOS 14.0+</Badge>
            </Card>

            <Card className="glass p-8 flex-1 w-full hover-scale cursor-pointer group">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Google Play</h3>
              <p className="text-white/60 mb-4">для Android</p>
              <Badge className="bg-gradient-to-r from-secondary to-accent">Android 8.0+</Badge>
            </Card>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
            <Icon name="Star" size={20} className="text-yellow-400" />
            <span className="text-lg">4.8 из 5 звёзд</span>
            <span>•</span>
            <span className="text-lg">2.5M+ загрузок</span>
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
            <h2 className="text-4xl font-bold mb-4 text-gradient text-center">Свяжитесь с нами</h2>
            <p className="text-white/70 mb-8 text-center">Есть вопросы? Мы всегда на связи!</p>

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

      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center text-white/60">
          <p className="mb-4">© 2026 Запрет. Все права защищены.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            <a href="#" className="hover:text-white transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}