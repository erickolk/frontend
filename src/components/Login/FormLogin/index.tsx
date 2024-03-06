import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormLogin() {
  return (
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
  );
}
