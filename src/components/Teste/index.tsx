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

export default function Teste() {
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
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Insira seu email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Senha</Label>
              <Input id="email" placeholder="Insira sua senha" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Entr  ar</Button>
      </CardFooter>
    </Card>
  );
}
