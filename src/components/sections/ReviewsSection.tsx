import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function ReviewsSection() {
  return (
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
  );
}
