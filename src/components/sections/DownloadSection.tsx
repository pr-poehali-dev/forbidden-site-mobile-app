import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DownloadSectionProps {
  timeLeftIOS: TimeLeft;
  timeLeftAndroid: TimeLeft;
  subscribeEmail: string;
  setSubscribeEmail: (value: string) => void;
  subscribeStatus: 'idle' | 'loading' | 'success' | 'error';
  subscribeMessage: string;
  handleSubscribe: () => void;
}

export default function DownloadSection({
  timeLeftIOS,
  timeLeftAndroid,
  subscribeEmail,
  setSubscribeEmail,
  subscribeStatus,
  subscribeMessage,
  handleSubscribe
}: DownloadSectionProps) {
  return (
    <section id="download" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-base md:text-xl px-6 md:px-8 py-2 md:py-3 mb-6 animate-glow inline-block">
          ✨ ПОЛНОСТЬЮ БЕСПЛАТНО ✨
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Скачать Запрет</h2>
        <p className="text-xl text-white/70 mb-2">Доступно для iOS и Android</p>
        <p className="text-lg text-green-400 font-semibold mb-12">Никаких скрытых платежей и ограничений</p>

        <div className="mb-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="glass p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="text-4xl">🤖</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Android релиз через:</h3>
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
            <div className="space-y-2 mt-6">
              <Badge className="bg-gradient-to-r from-secondary to-accent w-full justify-center py-2">Google Play</Badge>
              <Badge className="bg-green-500 text-white w-full justify-center py-2">Бесплатно навсегда</Badge>
            </div>
          </Card>

          <Card className="glass p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="text-4xl">🍎</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center">iOS релиз через:</h3>
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
            <div className="space-y-2 mt-6">
              <Badge className="bg-gradient-to-r from-primary to-secondary w-full justify-center py-2">App Store</Badge>
              <Badge className="bg-green-500 text-white w-full justify-center py-2">Бесплатно навсегда</Badge>
            </div>
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
  );
}