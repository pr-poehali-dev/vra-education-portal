import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, LibraryBig, School } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-vra-deeper to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-vra-primary/20 blur-3xl transform transition-all duration-1000 ${loaded ? 'opacity-50' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-vra-secondary/20 blur-3xl transform transition-all duration-1000 delay-300 ${loaded ? 'opacity-50' : 'opacity-0'}`}></div>
        <div className={`absolute top-2/3 right-1/4 w-48 h-48 rounded-full bg-vra-accent/20 blur-3xl transform transition-all duration-1000 delay-500 ${loaded ? 'opacity-50' : 'opacity-0'}`}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Виртуальная реальность</span>
              <br />
              <span className="text-foreground">для образования будущего</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              VRA — первое в России образовательное учреждение, где VR/AR технологии
              полностью заменяют традиционные учебники. От начальной школы до высшего образования.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-vra-primary hover:bg-vra-secondary">
                <Link to="/programs">
                  Программы обучения
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-vra-primary hover:bg-vra-primary/10">
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-vra-primary/20">
                <School className="h-6 w-6 text-vra-primary mb-2" />
                <span className="text-center text-sm">Школьное образование</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-vra-primary/20">
                <GraduationCap className="h-6 w-6 text-vra-primary mb-2" />
                <span className="text-center text-sm">Высшее образование</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-vra-primary/20">
                <LibraryBig className="h-6 w-6 text-vra-primary mb-2" />
                <span className="text-center text-sm">Цифровая библиотека</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-[450px] rounded-2xl overflow-hidden border-2 border-vra-primary/30 vr-glow">
                <img 
                  src="/placeholder.svg" 
                  alt="Студенты в VR очках изучают материал" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 p-2 bg-background/80 backdrop-blur-md rounded-xl border border-vra-primary/20 shadow-lg animate-float">
                <div className="w-full h-full rounded-lg bg-gradient-to-r from-vra-secondary to-vra-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-xs">С нами уже</div>
                    <div className="text-xl font-bold">1200+</div>
                    <div className="text-xs">студентов</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-40 p-3 bg-background/80 backdrop-blur-md rounded-xl border border-vra-primary/20 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-vra-primary to-vra-accent flex items-center justify-center text-white text-xl">
                    VR
                  </div>
                  <div className="ml-3">
                    <div className="text-xs text-muted-foreground">Технология</div>
                    <div className="text-sm font-medium">Погружение 100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
