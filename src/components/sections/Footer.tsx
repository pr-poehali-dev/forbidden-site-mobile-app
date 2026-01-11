export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative">
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
  );
}
