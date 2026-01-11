import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://t.me/zapret_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors group"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} className="text-white/60 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://vk.com/zapret_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors group"
              aria-label="VK"
            >
              <Icon name="MessageCircle" size={20} className="text-white/60 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://twitter.com/zapret_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors group"
              aria-label="Twitter"
            >
              <Icon name="Twitter" size={20} className="text-white/60 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:support@zapret.app"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors group"
              aria-label="Email"
            >
              <Icon name="Mail" size={20} className="text-white/60 group-hover:text-white transition-colors" />
            </a>
          </div>
          
          <p className="text-white/80 text-lg mb-2">Идея проекта</p>
          <p className="text-2xl font-bold text-gradient mb-1">Данил Денисович</p>
          <p className="text-white/60">ООО Strix Rp</p>
        </div>
        
        <div className="text-center text-white/60">
          <p className="mb-4">© 2026 Запрет. Все права защищены.</p>
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            <a href="#contact" className="hover:text-white transition-colors">Поддержка</a>
          </div>
        </div>
      </div>
    </footer>
  );
}