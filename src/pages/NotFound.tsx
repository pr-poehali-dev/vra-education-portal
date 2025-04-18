import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cube3d, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-vra-deeper to-background px-4 text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vra-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vra-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-md mx-auto">
        <Cube3d className="h-24 w-24 text-vra-primary mx-auto mb-8 animate-float" />
        
        <h1 className="text-8xl font-bold mb-6 gradient-text">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8">
          Похоже, вы попали в виртуальное пространство, которое еще не создано. 
          Давайте вернемся в реальный мир VRA.
        </p>
        
        <Button asChild size="lg" className="bg-vra-primary hover:bg-vra-secondary">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
