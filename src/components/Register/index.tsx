import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormRegister from "./FormRegister";

export default function Register() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cadastre-se</CardTitle>
        <CardDescription>
          Já tem uma conta?{" "}
          <a href="" className="text-blue-300">
            Faça login.
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormRegister/>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Enviar</Button>
      </CardFooter>
    </Card>
  );
}

