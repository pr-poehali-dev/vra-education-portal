import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vra-dark to-vra-deeper z-0"></div>
      
      {/* Animated glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vra-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vra-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cyber-border bg-background/10 backdrop-blur-xl rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Готовы к образованию будущего?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Запишитесь на ознакомительный VR-тур по нашей академии или подайте заявку на поступление прямо сейчас
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-vra-primary hover:bg-vra-secondary text-white">
                  <Link to="/register">
                    Подать заявку
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Записаться на VR-тур</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-vra-primary/30 vr-glow">
                <img 
                  src="/placeholder.svg" 
                  alt="VR-очки и студенты" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-36 h-36 p-4 bg-vra-primary rounded-2xl shadow-lg rotate-12 flex items-center justify-center animate-pulse-glow">
                <div className="text-white text-center">
                  <div className="text-xs">Запуск нового курса</div>
                  <div className="text-lg font-bold mt-1">AR-дизайн</div>
                  <div className="text-xs mt-1">Скоро открыт набор</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
