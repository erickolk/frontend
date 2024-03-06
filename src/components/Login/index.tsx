import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormLogin from "./FormLogin";

export default function Login() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
        <CardDescription>
          Ainda não tem uma conta?{" "}
          <a href="" className="text-blue-300">
            Cadastre-se.
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormLogin/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  );
}
