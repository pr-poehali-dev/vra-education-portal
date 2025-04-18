import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Cpu, GraduationCap, HeartHandshake, History, MapPin, Stars, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-vra-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-60 w-96 h-96 bg-vra-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              О <span className="gradient-text">Virtual Reality Academy</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Первое в России образовательное учреждение, где VR/AR технологии
              полностью заменяют традиционные учебники и методы обучения
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-vra-primary/30 vr-glow">
                <img 
                  src="/placeholder.svg" 
                  alt="Студенты VRA в VR-очках" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 p-2 bg-background/80 backdrop-blur-md rounded-xl border border-vra-primary/20 shadow-lg transform rotate-6">
                <div className="w-full h-full rounded-lg bg-gradient-to-r from-vra-secondary to-vra-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-xs">Основана</div>
                    <div className="text-xl font-bold">2031</div>
                    <div className="text-xs">году</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-muted-foreground mb-6">
                Virtual Reality Academy создана с целью радикально изменить подход к образованию, сделав его более эффективным, увлекательным и доступным благодаря интеграции передовых VR/AR технологий в учебный процесс.
              </p>
              <p className="text-muted-foreground mb-6">
                Мы верим, что визуализация сложных концепций в трехмерном пространстве с возможностью взаимодействия позволяет учащимся всех возрастов лучше понимать материал и дольше удерживать полученные знания.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="bg-vra-primary hover:bg-vra-secondary">
                  <Link to="/programs">Наши программы</Link>
                </Button>
                <Button asChild variant="outline" className="border-vra-primary hover:bg-vra-primary/10">
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-vra-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Наши <span className="gradient-text">ценности</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Эти принципы лежат в основе всего, что мы делаем в VRA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <div className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center mb-4">
                <Stars className="h-6 w-6 text-vra-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Инновации</h3>
              <p className="text-muted-foreground">
                Постоянно исследуем и внедряем самые передовые технологии и методики в образовательный процесс
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <div className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-vra-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доступность</h3>
              <p className="text-muted-foreground">
                Стремимся сделать современное образование доступным для всех вне зависимости от местоположения
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <div className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center mb-4">
                <HeartHandshake className="h-6 w-6 text-vra-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Партнерство</h3>
              <p className="text-muted-foreground">
                Тесно сотрудничаем с индустрией, научными институтами и образовательными учреждениями по всему миру
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              История <span className="gradient-text">развития</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Ключевые этапы становления Virtual Reality Academy
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-vra-primary/20"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vra-primary/20 border-2 border-vra-primary flex items-center justify-center">
                  <History className="h-3 w-3 text-vra-primary" />
                </div>
                <div className="ml-auto mr-8 md:ml-8 md:mr-auto w-full md:w-1/2 p-6 bg-background/70 backdrop-blur-sm rounded-xl border border-vra-primary/20 md:text-right">
                  <h3 className="font-semibold text-xl mb-2">2031 год</h3>
                  <p className="text-muted-foreground">
                    Основание Virtual Reality Academy группой технологических предпринимателей и педагогов-новаторов. Разработка первого VR-курса по биологии.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vra-primary/20 border-2 border-vra-primary flex items-center justify-center">
                  <History className="h-3 w-3 text-vra-primary" />
                </div>
                <div className="ml-8 w-full md:w-1/2 p-6 bg-background/70 backdrop-blur-sm rounded-xl border border-vra-primary/20 text-left">
                  <h3 className="font-semibold text-xl mb-2">2034 год</h3>
                  <p className="text-muted-foreground">
                    Получение лицензии на образовательную деятельность. Запуск первой программы высшего образования с использованием VR технологий.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vra-primary/20 border-2 border-vra-primary flex items-center justify-center">
                  <History className="h-3 w-3 text-vra-primary" />
                </div>
                <div className="ml-auto mr-8 md:ml-8 md:mr-auto w-full md:w-1/2 p-6 bg-background/70 backdrop-blur-sm rounded-xl border border-vra-primary/20 md:text-right">
                  <h3 className="font-semibold text-xl mb-2">2037 год</h3>
                  <p className="text-muted-foreground">
                    Открытие школьного отделения. Разработка собственной платформы VR-обучения. Первый выпуск студентов бакалавриата.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vra-primary/20 border-2 border-vra-primary flex items-center justify-center">
                  <History className="h-3 w-3 text-vra-primary" />
                </div>
                <div className="ml-8 w-full md:w-1/2 p-6 bg-background/70 backdrop-blur-sm rounded-xl border border-vra-primary/20 text-left">
                  <h3 className="font-semibold text-xl mb-2">2040 год</h3>
                  <p className="text-muted-foreground">
                    Запуск программ магистратуры. Международная аккредитация. Более 1000 студентов на всех образовательных программах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-vra-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Наша <span className="gradient-text">команда</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Профессионалы, стоящие за инновациями VRA
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-vra-primary/30">
                <img 
                  src="/placeholder.svg" 
                  alt="Барковский Кирилл" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Барковский Кирилл</h3>
              <p className="text-vra-primary mb-3">Основатель и CEO</p>
              <p className="text-muted-foreground text-sm">
                Технологический предприниматель с опытом работы в EdTech более 15 лет
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-vra-primary/30">
                <img 
                  src="/placeholder.svg" 
                  alt="Ветошкин Вячеслав" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Ветошкин Вячеслав</h3>
              <p className="text-vra-primary mb-3">Директор по образованию</p>
              <p className="text-muted-foreground text-sm">
                Доктор педагогических наук, автор методик VR-образования
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-vra-primary/30">
                <img 
                  src="/placeholder.svg" 
                  alt="Ламбин Степан" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Ламбин Степан</h3>
              <p className="text-vra-primary mb-3">CTO</p>
              <p className="text-muted-foreground text-sm">
                Ведущий разработчик VR/AR решений, ранее руководил R&D в Samsung
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-vra-deeper text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-vra-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-300">VR-курсов</p>
            </div>
            
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-vra-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">1200+</div>
              <p className="text-gray-300">Студентов</p>
            </div>
            
            <div className="text-center p-6">
              <GraduationCap className="h-12 w-12 text-vra-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">96%</div>
              <p className="text-gray-300">Трудоустройство выпускников</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-16 bg-vra-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Наше <span className="gradient-text">расположение</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Физический и виртуальный кампусы VRA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden h-96 border-2 border-vra-primary/30">
              <img 
                src="/placeholder.svg" 
                alt="Кампус VRA" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 bg-background/70 backdrop-blur-sm rounded-xl border border-vra-primary/20">
              <h3 className="text-2xl font-semibold mb-6">
                Главный кампус в Москве
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-vra-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Адрес:</p>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Технологическая, 42
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">
                    Наш кампус оборудован:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Cpu className="h-4 w-4 text-vra-primary mr-2" />
                      <span className="text-muted-foreground">VR лаборатории для занятий</span>
                    </li>
                    <li className="flex items-center">
                      <Cpu className="h-4 w-4 text-vra-primary mr-2" />
                      <span className="text-muted-foreground">Высокоскоростной интернет и оборудование</span>
                    </li>
                    <li className="flex items-center">
                      <Cpu className="h-4 w-4 text-vra-primary mr-2" />
                      <span className="text-muted-foreground">Коворкинг и зоны отдыха</span>
                    </li>
                    <li className="flex items-center">
                      <Cpu className="h-4 w-4 text-vra-primary mr-2" />
                      <span className="text-muted-foreground">Цифровая библиотека</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Button asChild className="bg-vra-primary hover:bg-vra-secondary">
                    <Link to="/contact">Записаться на экскурсию</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-vra-deeper to-vra-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-vra-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы присоединиться к образованию будущего?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Станьте частью VRA — места, где технологии и образование создают новое поколение профессионалов
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-vra-primary hover:bg-vra-secondary">
              <Link to="/register">Подать заявку</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;