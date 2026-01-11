import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  email: string;
  setEmail: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
}

export default function ContactSection({ email, setEmail, message, setMessage }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
      
      <div className="container mx-auto max-w-2xl relative z-10">
        <Card className="glass p-6 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">Поддержка</h2>
          <p className="text-white/70 mb-8 text-center text-sm md:text-base">Нужна помощь? Напишите нам!</p>

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
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg py-5 md:py-6">
              <Icon name="Send" className="mr-2" size={18} />
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
  );
}