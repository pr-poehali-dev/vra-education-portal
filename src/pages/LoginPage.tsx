import { useState } from "react";
import { Link } from "react-router-dom";
import { Cube, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-vra-deeper to-background">
      <div className="absolute top-0 left-0 right-0 p-4">
        <Link to="/" className="inline-flex items-center text-vra-primary hover:text-vra-accent transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться на главную
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md relative">
          {/* Background effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-vra-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-vra-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative bg-background/90 backdrop-blur-xl p-8 rounded-xl border border-vra-primary/20 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <Cube className="h-10 w-10 text-vra-primary" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">Вход в VRA</h1>
              <p className="text-muted-foreground mt-2">
                Войдите в вашу учетную запись для доступа к виртуальному кампусу
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-vra-primary/30 focus-visible:ring-vra-primary"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <Label htmlFor="password">Пароль</Label>
                    <Link to="#" className="text-xs text-vra-primary hover:text-vra-secondary">
                      Забыли пароль?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-vra-primary/30 focus-visible:ring-vra-primary"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={() => setRememberMe(!rememberMe)}
                  />
                  <Label htmlFor="remember" className="text-sm">Запомнить меня</Label>
                </div>
                <Button type="submit" className="w-full bg-vra-primary hover:bg-vra-secondary">
                  Войти
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Еще нет аккаунта?{" "}
                <Link to="/register" className="text-vra-primary hover:text-vra-secondary font-medium">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
