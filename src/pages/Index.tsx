import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import StatsSection from '@/components/sections/StatsSection';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Index() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');
  const [timeLeftIOS, setTimeLeftIOS] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timeLeftAndroid, setTimeLeftAndroid] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const iosTargetDate = new Date('2026-12-31T23:59:59').getTime();
    const now = new Date();
    const androidTargetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).getTime();

    let rafId: number;
    let lastUpdate = 0;

    const updateCountdown = (timestamp: number) => {
      if (timestamp - lastUpdate < 1000) {
        rafId = requestAnimationFrame(updateCountdown);
        return;
      }
      
      lastUpdate = timestamp;
      const now = Date.now();
      
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
      
      rafId = requestAnimationFrame(updateCountdown);
    };

    rafId = requestAnimationFrame(updateCountdown);

    return () => cancelAnimationFrame(rafId);
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

  const handleContactSubmit = async () => {
    if (!email.trim()) {
      setContactStatus('error');
      setContactMessage('Введите email');
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setContactStatus('error');
      setContactMessage('Сообщение должно содержать минимум 10 символов');
      return;
    }

    setContactStatus('loading');

    try {
      const response = await fetch('https://functions.poehali.dev/2fa2034b-50ec-499c-bb46-47af2b7b35c6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setContactStatus('success');
        setContactMessage(data.message);
        setEmail('');
        setMessage('');
      } else {
        setContactStatus('error');
        setContactMessage(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      setContactStatus('error');
      setContactMessage('Ошибка соединения');
    }

    setTimeout(() => {
      setContactStatus('idle');
      setContactMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/39461615-d33a-4888-8018-fdae0e0e5640/files/178f0df4-048c-467c-aa0a-18ff864eccae.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px)',
            willChange: 'transform'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>
      <div className="relative z-10">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <StatsSection />
        <DownloadSection 
          timeLeftIOS={timeLeftIOS}
          timeLeftAndroid={timeLeftAndroid}
          subscribeEmail={subscribeEmail}
          setSubscribeEmail={setSubscribeEmail}
          subscribeStatus={subscribeStatus}
          subscribeMessage={subscribeMessage}
          handleSubscribe={handleSubscribe}
        />
        <ReviewsSection />
        <FAQSection />
        <ContactSection 
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          contactStatus={contactStatus}
          contactMessage={contactMessage}
          handleContactSubmit={handleContactSubmit}
        />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}