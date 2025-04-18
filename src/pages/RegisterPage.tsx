import { useState } from "react";
import { Link } from "react-router-dom";
import { Cube, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleCheckboxChange = () => {
    setFormData(prev => ({ ...prev, agreeTerms: !prev.agreeTerms }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-vra-deeper to-background">
      <div className="absolute top-0 left-0 right-0 p-4">
        <Link to="/" className="inline-flex items-center text-vra-primary hover:text-vra-accent transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться на главную
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md relative">
          {/* Background effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-vra-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-vra-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative bg-background/90 backdrop-blur-xl p-8 rounded-xl border border-vra-primary/20 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <Cube className="h-10 w-10 text-vra-primary" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">Регистрация в VRA</h1>
              <p className="text-muted-foreground mt-2">
                Создайте учетную запись для поступления в Virtual Reality Academy
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border-vra-primary/30 focus-visible:ring-vra-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border-vra-primary/30 focus-visible:ring-vra-primary"
                    />
                  </div>
                </div>
                
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
                  <Label htmlFor="password">Пароль</Label>
                  <Input 
                    id="password" 
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border-vra-primary/30 focus-visible:ring-vra-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="border-vra-primary/30 focus-visible:ring-vra-primary"
                  />
                </div>
                
                <div>
                  <Label>Я регистрируюсь как</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-vra-primary/30 focus:ring-vra-primary">
                      <SelectValue placeholder="Выберите роль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Студент/Ученик</SelectItem>
                      <SelectItem value="parent">Родитель</SelectItem>
                      <SelectItem value="teacher">Преподаватель</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    Я согласен с <Link to="#" className="text-vra-primary hover:text-vra-secondary">условиями использования</Link> и <Link to="#" className="text-vra-primary hover:text-vra-secondary">политикой конфиденциальности</Link>
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-vra-primary hover:bg-vra-secondary">
                  Создать аккаунт
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-vra-primary hover:text-vra-secondary font-medium">
                  Войти
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
