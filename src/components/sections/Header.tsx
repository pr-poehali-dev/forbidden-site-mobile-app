import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">Запрет</div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">{t('nav.features')}</a>
          <a href="#download" className="text-white/80 hover:text-white transition-colors">{t('nav.download')}</a>
          <a href="#reviews" className="text-white/80 hover:text-white transition-colors">{t('nav.reviews')}</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">{t('nav.contact')}</a>
          
          <button
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="text-white/80 hover:text-white transition-colors font-medium text-sm px-3 py-1 rounded-lg glass"
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </button>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            {t('nav.login')}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="text-white/80 hover:text-white transition-colors font-medium text-sm px-3 py-1 rounded-lg glass"
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </button>
          
          <button 
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.features')}
            </a>
            <a 
              href="#download" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.download')}
            </a>
            <a 
              href="#reviews" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.reviews')}
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full">
              {t('nav.login')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}