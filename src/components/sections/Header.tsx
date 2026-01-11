import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
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
  );
}
