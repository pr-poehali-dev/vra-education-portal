import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, ChevronRight, Clock, GraduationCap, School, Search, Tag, Users } from "lucide-react";

type ProgramCategory = "school" | "university" | "courses";

type Program = {
  id: string;
  title: string;
  description: string;
  category: ProgramCategory;
  level: string;
  duration: string;
  students: number;
  tags: string[];
  featured?: boolean;
  img: string;
};

const programs: Program[] = [
  // Школьные программы
  {
    id: "elementary",
    title: "Начальное образование",
    description: "VR-программа начального образования с игровыми элементами и визуализацией всех предметов в трехмерном пространстве.",
    category: "school",
    level: "1-4 классы",
    duration: "4 года",
    students: 215,
    tags: ["Математика", "Русский язык", "Окружающий мир", "Английский язык"],
    featured: true,
    img: "/placeholder.svg"
  },
  {
    id: "secondary",
    title: "Основное общее образование",
    description: "Углубленное изучение предметов с визуализацией сложных концепций через VR-модели и симуляции.",
    category: "school",
    level: "5-9 классы",
    duration: "5 лет",
    students: 320,
    tags: ["Физика", "Химия", "История", "Биология", "Программирование"],
    img: "/placeholder.svg"
  },
  {
    id: "high-school",
    title: "Среднее общее образование",
    description: "Профильное обучение с индивидуальной траекторией и расширенным VR-практикумом по выбранным предметам.",
    category: "school",
    level: "10-11 классы",
    duration: "2 года",
    students: 180,
    tags: ["Профильная математика", "Информатика", "Подготовка к ЕГЭ", "3D-моделирование"],
    img: "/placeholder.svg"
  },
  {
    id: "school-it",
    title: "ИТ-класс",
    description: "Специализированная программа для школьников с углубленным изучением информационных технологий и программирования.",
    category: "school",
    level: "8-11 классы",
    duration: "от 1 года",
    students: 120,
    tags: ["Программирование", "VR/AR разработка", "Робототехника", "Искусственный интеллект"],
    img: "/placeholder.svg"
  },
  
  // Университетские программы
  {
    id: "bachelor-cs",
    title: "Бакалавриат: Компьютерные науки",
    description: "Программа высшего образования с фокусом на разработку VR/AR приложений, машинное обучение и искусственный интеллект.",
    category: "university",
    level: "Бакалавриат",
    duration: "4 года",
    students: 85,
    tags: ["Программирование", "VR/AR разработка", "Алгоритмы", "Машинное обучение"],
    featured: true,
    img: "/placeholder.svg"
  },
  {
    id: "bachelor-design",
    title: "Бакалавриат: Цифровой дизайн",
    description: "Программа для подготовки специалистов в области цифрового дизайна, 3D-моделирования и создания VR/AR опыта.",
    category: "university",
    level: "Бакалавриат",
    duration: "4 года",
    students: 65,
    tags: ["UX/UI", "3D-моделирование", "VR/AR дизайн", "Анимация"],
    img: "/placeholder.svg"
  },
  {
    id: "master-vr",
    title: "Магистратура: VR/AR технологии",
    description: "Углубленное изучение технологий виртуальной и дополненной реальности для образования, медицины и промышленности.",
    category: "university",
    level: "Магистратура",
    duration: "2 года",
    students: 40,
    tags: ["VR/AR разработка", "Алгоритмы машинного зрения", "Игровые движки", "Проектирование систем"],
    img: "/placeholder.svg"
  },
  {
    id: "master-ai",
    title: "Магистратура: Искусственный интеллект",
    description: "Программа для подготовки специалистов в области искусственного интеллекта, глубокого обучения и нейросетей.",
    category: "university",
    level: "Магистратура",
    duration: "2 года",
    students: 35,
    tags: ["Нейронные сети", "Компьютерное зрение", "Обработка естественного языка", "Большие данные"],
    img: "/placeholder.svg"
  },
  
  // Курсы
  {
    id: "course-vr-dev",
    title: "Разработка VR-приложений",
    description: "Интенсивный курс по созданию VR-приложений с использованием Unity и Unreal Engine. От основ до продвинутых техник.",
    category: "courses",
    level: "Начальный/Средний",
    duration: "3 месяца",
    students: 150,
    tags: ["Unity", "Unreal Engine", "C#", "3D-моделирование"],
    featured: true,
    img: "/placeholder.svg"
  },
  {
    id: "course-ar-design",
    title: "Дизайн AR-интерфейсов",
    description: "Курс по созданию интерфейсов и взаимодействий для дополненной реальности с учетом пользовательского опыта.",
    category: "courses",
    level: "Средний",
    duration: "2 месяца",
    students: 90,
    tags: ["UX/UI", "Прототипирование", "3D", "Взаимодействие"],
    img: "/placeholder.svg"
  },
  {
    id: "course-3d",
    title: "3D-моделирование для VR",
    description: "Создание оптимизированных 3D-моделей для виртуальной реальности с учетом технических ограничений.",
    category: "courses",
    level: "Начальный",
    duration: "1,5 месяца",
    students: 120,
    tags: ["Blender", "Maya", "Текстурирование", "Оптимизация"],
    img: "/placeholder.svg"
  },
  {
    id: "course-game-dev",
    title: "Разработка VR-игр",
    description: "Полный цикл создания игровых проектов для виртуальной реальности — от концепции до публикации.",
    category: "courses",
    level: "Средний/Продвинутый",
    duration: "4 месяца",
    students: 75,
    tags: ["Unity", "Игровая механика", "VR-взаимодействие", "Оптимизация"],
    img: "/placeholder.svg"
  }
];

const ProgramsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<ProgramCategory>("school");
  
  const filteredPrograms = programs.filter(program => 
    program.category === activeTab && 
    (searchTerm === "" || 
     program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     program.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const getCategoryIcon = (category: ProgramCategory) => {
    switch (category) {
      case "school": return <School className="h-10 w-10 text-vra-primary" />;
      case "university": return <GraduationCap className="h-10 w-10 text-vra-primary" />;
      case "courses": return <BookOpen className="h-10 w-10 text-vra-primary" />;
    }
  };

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
              Образовательные <span className="gradient-text">программы VRA</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Выберите подходящую программу обучения с использованием самых современных VR/AR технологий
            </p>
          </div>
          
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск программ по названию или тегам..."
                className="pl-10 border-vra-primary/30 focus-visible:ring-vra-primary"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <Tabs defaultValue="school" className="w-full" onValueChange={(value) => setActiveTab(value as ProgramCategory)}>
            <TabsList className="grid grid-cols-3 mb-8 max-w-md mx-auto">
              <TabsTrigger value="school" className="data-[state=active]:bg-vra-primary data-[state=active]:text-white">
                <School className="h-4 w-4 mr-2" />
                Школа
              </TabsTrigger>
              <TabsTrigger value="university" className="data-[state=active]:bg-vra-primary data-[state=active]:text-white">
                <GraduationCap className="h-4 w-4 mr-2" />
                ВУЗ
              </TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-vra-primary data-[state=active]:text-white">
                <BookOpen className="h-4 w-4 mr-2" />
                Курсы
              </TabsTrigger>
            </TabsList>
            
            {["school", "university", "courses"].map((category) => (
              <TabsContent key={category} value={category}>
                {filteredPrograms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPrograms.map((program) => (
                      <Card key={program.id} className="border-vra-primary/20 overflow-hidden h-full flex flex-col hover:border-vra-primary transition-all duration-300">
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={program.img} 
                            alt={program.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {program.featured && (
                            <Badge className="absolute top-2 right-2 bg-vra-accent text-vra-deeper">
                              Популярно
                            </Badge>
                          )}
                        </div>
                        <CardHeader>
                          <div className="flex items-center space-x-2 mb-2">
                            {getCategoryIcon(program.category)}
                            <Badge variant="outline" className="border-vra-primary/30 text-foreground">
                              {program.level}
                            </Badge>
                          </div>
                          <CardTitle>{program.title}</CardTitle>
                          <CardDescription className="flex space-x-4 mt-2">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {program.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {program.students}
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground mb-4">{program.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {program.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="border-vra-primary/30 bg-vra-primary/5">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full">
                            <Link to="/contact">
                              Подробнее
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Tag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Программы не найдены</h3>
                    <p className="text-muted-foreground">
                      Попробуйте изменить запрос поиска или выбрать другую категорию
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-vra-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Особенности <span className="gradient-text">VR обучения</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Что делает наш образовательный процесс уникальным
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <div className="w-12 h-12 rounded-xl bg-vra-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Персонализация" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Персонализация</h3>
              <p className="text-muted-foreground">
                Адаптивные учебные материалы, которые подстраиваются под индивидуальный темп и стиль обучения каждого студента
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <div className="w-12 h-12 rounded-xl bg-vra-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Иммерсивность" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Иммерсивность</h3>
              <p className="text-muted-foreground">
                Полное погружение в изучаемый материал благодаря VR-технологиям, повышающее вовлеченность и запоминаемость
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <div className="w-12 h-12 rounded-xl bg-vra-primary/10 flex items-center justify-center mb-4">
                <img src="/placeholder.svg" alt="Практика" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Практика</h3>
              <p className="text-muted-foreground">
                Виртуальные лаборатории и симуляторы для отработки практических навыков в безопасной среде
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Процесс <span className="gradient-text">поступления</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Как стать студентом Virtual Reality Academy
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-vra-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-6 md:mb-0 relative">
                  <div className="bg-vra-primary/10 p-6 rounded-xl border border-vra-primary/20">
                    <h3 className="text-xl font-semibold mb-2">1. Подача заявки</h3>
                    <p className="text-muted-foreground">
                      Заполните онлайн-заявку, указав желаемую программу обучения и предоставив необходимые документы
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 right-0 w-4 h-4 bg-vra-primary rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="md:pl-8">
                  <img src="/placeholder.svg" alt="Подача заявки" className="rounded-xl shadow-md" />
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block order-last md:text-left mb-6 md:mb-0">
                  <img src="/placeholder.svg" alt="VR-тестирование" className="rounded-xl shadow-md" />
                </div>
                <div className="md:text-left mb-6 md:mb-0 relative order-first">
                  <div className="bg-vra-primary/10 p-6 rounded-xl border border-vra-primary/20">
                    <h3 className="text-xl font-semibold mb-2">2. VR-тестирование</h3>
                    <p className="text-muted-foreground">
                      Пройдите вступительное тестирование в VR-среде для определения уровня подготовки и адаптации программы
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-0 w-4 h-4 bg-vra-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="md:hidden">
                  <img src="/placeholder.svg" alt="VR-тестирование" className="rounded-xl shadow-md mt-4" />
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-6 md:mb-0 relative">
                  <div className="bg-vra-primary/10 p-6 rounded-xl border border-vra-primary/20">
                    <h3 className="text-xl font-semibold mb-2">3. Собеседование</h3>
                    <p className="text-muted-foreground">
                      Онлайн или офлайн встреча с представителями академии для обсуждения деталей обучения
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 right-0 w-4 h-4 bg-vra-primary rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="md:pl-8">
                  <img src="/placeholder.svg" alt="Собеседование" className="rounded-xl shadow-md" />
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block order-last md:text-left mb-6 md:mb-0">
                  <img src="/placeholder.svg" alt="Зачисление" className="rounded-xl shadow-md" />
                </div>
                <div className="md:text-left mb-6 md:mb-0 relative order-first">
                  <div className="bg-vra-primary/10 p-6 rounded-xl border border-vra-primary/20">
                    <h3 className="text-xl font-semibold mb-2">4. Зачисление</h3>
                    <p className="text-muted-foreground">
                      Подписание договора, оплата обучения и получение доступа к VR-платформе VRA
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-0 w-4 h-4 bg-vra-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="md:hidden">
                  <img src="/placeholder.svg" alt="Зачисление" className="rounded-xl shadow-md mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-vra-deeper to-vra-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать обучение в VRA?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Подайте заявку на поступление или запишитесь на ознакомительный VR-тур по академии
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-vra-primary hover:bg-vra-secondary">
              <Link to="/register">Подать заявку</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Записаться на VR-тур</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
