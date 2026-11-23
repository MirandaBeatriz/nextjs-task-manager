import { TaskBlock } from "@/src/sections";
import { Container, Title } from "@/src/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Container>
        <Title size="lg" tag="h1" className="mb-4">
          Bem-vindo ao Next Task Manager
        </Title>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          Gerencie suas tarefas de forma simples e eficiente com o Next Task
          Manager.
        </p>
        {/* Bloco de tarefas */}
        <TaskBlock />
      </Container>
    </main>
  );
}
