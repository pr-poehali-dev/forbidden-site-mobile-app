import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto text-center relative z-20">
        <div className="animate-fade-in">
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-base md:text-lg px-4 md:px-6 py-2 mb-6 animate-glow">
            🎉 100% БЕСПЛАТНО
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight px-4">
            Интернет<br />без границ
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto px-4">
            Свободный доступ к любым сайтам. Быстро, безопасно, анонимно.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-12 px-4">
            Бесплатно навсегда. Без подписок.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 hover-scale w-full sm:w-auto">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto">
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="mt-20 animate-float">
          <div className="w-full max-w-4xl mx-auto glass rounded-3xl p-4 md:p-8 shadow-2xl">
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
  );
}