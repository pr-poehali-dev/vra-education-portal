import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, School } from "lucide-react";

type ProgramCardProps = {
  icon: React.ReactNode;
  title: string;
  level: string;
  description: string;
  subjects: string[];
  badge?: string;
};

const ProgramCard = ({ icon, title, level, description, subjects, badge }: ProgramCardProps) => {
  return (
    <Card className="border-vra-primary/20 hover:border-vra-primary transition-all duration-300 overflow-hidden group">
      <div className="h-1 w-full bg-gradient-to-r from-vra-secondary via-vra-primary to-vra-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center">
            {icon}
          </div>
          {badge && (
            <Badge className="bg-vra-accent text-vra-deeper">{badge}</Badge>
          )}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{level}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <Badge key={index} variant="outline" className="border-vra-primary/30 bg-vra-primary/5">
              {subject}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/programs">Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-vra-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="gradient-text">образовательные программы</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            VRA предлагает полный спектр образовательных программ от начальной школы до магистратуры с применением VR/AR технологий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard
            icon={<School className="h-6 w-6 text-vra-primary" />}
            title="Начальное образование"
            level="1-4 классы"
            description="Адаптивная программа начального образования с использованием игровых VR симуляций для лучшего усвоения базовых знаний"
            subjects={["Математика", "Русский язык", "Окружающий мир", "VR-творчество"]}
            badge="Набор идет"
          />
          
          <ProgramCard
            icon={<School className="h-6 w-6 text-vra-primary" />}
            title="Основное общее образование"
            level="5-9 классы"
            description="Углубленное изучение предметов с визуализацией сложных концепций через VR, развитие критического мышления"
            subjects={["Физика", "Химия", "История", "Биология", "Программирование"]}
          />
          
          <ProgramCard
            icon={<School className="h-6 w-6 text-vra-primary" />}
            title="Среднее общее образование"
            level="10-11 классы"
            description="Профильное обучение с погружением в выбранные предметы через виртуальные лаборатории и симуляции"
            subjects={["Профильная математика", "3D-моделирование", "Информатика"]}
          />
          
          <ProgramCard
            icon={<BookOpen className="h-6 w-6 text-vra-primary" />}
            title="Бакалавриат"
            level="4 года обучения"
            description="Высшее образование первой ступени с фокусом на практические навыки через VR/AR среды"
            subjects={["Инженерия", "IT", "Дизайн", "Медицина", "Экономика"]}
            badge="Популярно"
          />
          
          <ProgramCard
            icon={<GraduationCap className="h-6 w-6 text-vra-primary" />}
            title="Магистратура"
            level="2 года обучения"
            description="Углубленное изучение специализации с исследовательской работой в виртуальных лабораториях"
            subjects={["VR-разработка", "Нейронауки", "Биотехнологии", "Искусственный интеллект"]}
          />
          
          <ProgramCard
            icon={<BookOpen className="h-6 w-6 text-vra-primary" />}
            title="Дополнительное образование"
            level="Курсы от 1 месяца"
            description="Краткосрочные интенсивы и курсы повышения квалификации с полным погружением в предмет"
            subjects={["AR-дизайн", "Разработка VR игр", "3D-моделирование", "UX/UI"]}
          />
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-vra-primary hover:bg-vra-primary/10">
            <Link to="/programs">Посмотреть все программы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
