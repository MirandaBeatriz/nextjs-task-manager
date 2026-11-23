import { Title } from "../components";

type TaskBlockProps = {};

export function TaskBlock(props: TaskBlockProps) {
  const {} = props;
  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="mb-4 flex flex-col gap-0.5">
          <Title size="md" tag="h2" className="mb-2">
            Lista de tarefas
          </Title>
          <p className="text-zinc-700 dark:text-zinc-300">
            Organize seu dia de forma simples
          </p>
        </div>

        <div>//filters</div>
      </div>
      <div>// input add task</div>
      <div>// list tasks</div>
      <div>// count tasks</div>
    </div>
  );
}
