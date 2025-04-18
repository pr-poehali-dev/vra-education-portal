import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  avatar: string;
};

const testimonials: TestimonialProps[] = [
  {
    content: "Благодаря VR обучению в VRA я смог освоить сложные химические реакции гораздо быстрее — когда видишь, как молекулы взаимодействуют в 3D, всё становится понятнее. Обучение не просто эффективное, оно еще и увлекательное!",
    author: "Алексей Петров",
    role: "Студент бакалавриата, 2 курс",
    avatar: "/placeholder.svg"
  },
  {
    content: "Я выбрала VRA для своей дочери, и результаты превзошли ожидания. За первый год она не только полностью освоила программу, но и развила пространственное мышление. VR технологии делают учебу интересной — она сама садится за уроки!",
    author: "Елена Смирнова",
    role: "Родитель ученицы 5 класса",
    avatar: "/placeholder.svg"
  },
  {
    content: "Как преподаватель с 15-летним стажем, я был скептически настроен к VR обучению, но после перехода в VRA я вижу, насколько эффективнее усваивается материал. Студенты демонстрируют более глубокое понимание предмета.",
    author: "Владимир Николаевич",
    role: "Профессор кафедры физики",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что говорят <span className="gradient-text">наши студенты</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Узнайте, как VR/AR обучение меняет образование и помогает достигать высоких результатов
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-vra-primary/20 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-vra-primary mb-4 opacity-50" />
                  <p className="mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-vra-primary/20">
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile carousel */}
          <div className="md:hidden">
            <Card className="border-vra-primary/20">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-vra-primary mb-4 opacity-50" />
                <p className="mb-6">{testimonials[activeIndex].content}</p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                    <AvatarFallback className="bg-vra-primary/20">
                      {testimonials[activeIndex].author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-vra-primary" : "bg-vra-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
