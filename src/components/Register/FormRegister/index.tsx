import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FormRegister() {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Insira seu nome" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Insira seu email" type="email" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Senha</Label>
          <Input id="email" placeholder="Insira sua senha" type="password" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Confirmação de senha</Label>
          <Input
            id="email"
            placeholder="Insira sua senha novamente"
            type="password"
          />
        </div>
      </div>
    </form>
  );
}

export default FormRegister;
