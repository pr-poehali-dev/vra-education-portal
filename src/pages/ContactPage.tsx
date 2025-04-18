import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Phone, Send, Clock, Headset } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };
  
  const handleCheckboxChange = () => {
    setFormData(prev => ({ ...prev, subscribe: !prev.subscribe }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка формы на сервер
    console.log(formData);
    
    // Имитация успешной отправки
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false
      });
    }, 3000);
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
              Свяжитесь с <span className="gradient-text">нами</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Есть вопросы о наших программах? Хотите записаться на VR-тур или узнать больше о поступлении?
              Мы всегда на связи!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-background/90 backdrop-blur-xl p-8 rounded-xl border border-vra-primary/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Отправьте нам сообщение</h2>
                
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
                    <p className="text-center text-muted-foreground">
                      Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-vra-primary/30 focus-visible:ring-vra-primary"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-vra-primary/30 focus-visible:ring-vra-primary"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-vra-primary/30 focus-visible:ring-vra-primary"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Тема обращения</Label>
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger className="border-vra-primary/30 focus:ring-vra-primary">
                            <SelectValue placeholder="Выберите тему обращения" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admission">Поступление</SelectItem>
                            <SelectItem value="tour">Запись на VR-тур</SelectItem>
                            <SelectItem value="programs">Вопросы о программах</SelectItem>
                            <SelectItem value="technology">Вопросы о технологиях</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="border-vra-primary/30 focus-visible:ring-vra-primary"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="subscribe" 
                          checked={formData.subscribe}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <Label htmlFor="subscribe" className="text-sm">
                          Я хочу получать новости и обновления от VRA
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-vra-primary hover:bg-vra-secondary">
                        Отправить сообщение
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-vra-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Адрес:</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Технологическая, 42</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-vra-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Телефон:</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+74951234567" className="hover:text-vra-primary transition-colors">
                            +7 (495) 123-45-67
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-vra-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email:</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@vracademy.ru" className="hover:text-vra-primary transition-colors">
                            info@vracademy.ru
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-vra-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Часы работы:</h3>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб: 10:00 - 15:00 (только экскурсии)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Запись на VR-тур</h2>
                  <div className="p-6 bg-vra-primary/10 rounded-xl border border-vra-primary/20">
                    <div className="flex items-start mb-4">
                      <Headset className="h-10 w-10 text-vra-primary mr-4" />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Познакомьтесь с VRA изнутри</h3>
                        <p className="text-muted-foreground">
                          Запишитесь на бесплатный VR-тур по нашей академии. Вы сможете посетить виртуальные классы, 
                          лаборатории и увидеть, как проходит обучение в VRA.
                        </p>
                      </div>
                    </div>
                    <Button className="w-full">Записаться на VR-тур</Button>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Мы в социальных сетях</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center hover:bg-vra-primary hover:text-white transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center hover:bg-vra-primary hover:text-white transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center hover:bg-vra-primary hover:text-white transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center hover:bg-vra-primary hover:text-white transition-colors">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-vra-primary/10 flex items-center justify-center hover:bg-vra-primary hover:text-white transition-colors">
                      <span className="sr-only">Telegram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background/90 backdrop-blur-xl p-4 rounded-xl border border-vra-primary/20 shadow-lg overflow-hidden">
            <div className="h-96 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Карта расположения VRA" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-vra-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Ответы на наиболее популярные вопросы о Virtual Reality Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <h3 className="text-xl font-semibold mb-3">Нужно ли собственное VR-оборудование для обучения?</h3>
              <p className="text-muted-foreground">
                Нет, все необходимое оборудование предоставляется академией. Студенты могут пользоваться VR-гарнитурами во время занятий в кампусе, а для удаленного обучения мы предоставляем оборудование в аренду.
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <h3 className="text-xl font-semibold mb-3">Можно ли обучаться удаленно?</h3>
              <p className="text-muted-foreground">
                Да, большинство программ доступны в гибридном формате. Вы можете посещать занятия лично или подключаться к виртуальному кампусу из любой точки мира.
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <h3 className="text-xl font-semibold mb-3">Признаются ли дипломы VRA в других странах?</h3>
              <p className="text-muted-foreground">
                Да, все наши программы имеют международную аккредитацию. Выпускники получают дипломы государственного образца, признанные во всем мире.
              </p>
            </div>
            
            <div className="bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-vra-primary/20">
              <h3 className="text-xl font-semibold mb-3">Есть ли ограничения по здоровью для VR-обучения?</h3>
              <p className="text-muted-foreground">
                Существуют некоторые ограничения для людей с определенными заболеваниями (эпилепсия, проблемы с вестибулярным аппаратом). Мы рекомендуем проконсультироваться с врачом перед поступлением.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
