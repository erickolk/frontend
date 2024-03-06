import { Button } from "../ui/button";

export default function Home(){
    return(
        <>
            <header className="flex justify-between p-8">
                <span className="font-bold text-2xl">Autenticação</span>
                <nav className="">
                    <Button className="mr-4">Entrar</Button>
                    <Button>Registre-se</Button>
                </nav>
            </header>
            <section className="flex justify-center">
                <h1 className="text-6xl mt-64 font-semibold">Bem vindo a nossa aplicação</h1>
            </section>
        </>
    )
}