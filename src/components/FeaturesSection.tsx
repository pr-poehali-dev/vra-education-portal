import { Brain, BookOpen, Users, Award, LucideIcon, Lightbulb, Laptop, Workflow } from "lucide-react";

type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="p-6 rounded-xl border border-vra-primary/20 bg-background/80 backdrop-blur-sm hover:border-vra-primary transition-all duration-300 hover:shadow-md hover:shadow-vra-primary/10">
      <div className="w-12 h-12 rounded-lg bg-vra-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-vra-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "VR библиотека",
      description: "Доступ к тысячам виртуальных учебников и интерактивных пособий в формате 3D"
    },
    {
      icon: Brain,
      title: "Нейроадаптация",
      description: "Учебные материалы подстраиваются под индивидуальный темп и стиль обучения студента"
    },
    {
      icon: Users,
      title: "Коллаборативное обучение",
      description: "Виртуальные классы для групповой работы над проектами из любой точки мира"
    },
    {
      icon: Laptop,
      title: "Цифровые тренажеры",
      description: "Практические навыки отрабатываются на виртуальных симуляторах высокой точности"
    },
    {
      icon: Workflow,
      title: "Адаптивные траектории",
      description: "Индивидуальные образовательные маршруты с учетом способностей и целей ученика"
    },
    {
      icon: Award,
      title: "Государственная аккредитация",
      description: "Выдаем дипломы государственного образца, признанные во всем мире"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Преимущества <span className="gradient-text">VR образования</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Наша образовательная система объединяет передовые технологии с проверенными педагогическими методиками
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
