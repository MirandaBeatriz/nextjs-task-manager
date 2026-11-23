"use client";

import { useMemo, useState } from "react";
import { TabsFilter } from "../Blocks";
import { TaksItem, Title } from "../components";

type TaskBlockProps = {};

const tasks = [
  { id: 1, titulo: "Tarefa 1", check: false },
  { id: 2, titulo: "Tarefa 2", check: false },
  { id: 3, titulo: "Tarefa 3", check: false },
  { id: 4, titulo: "Tarefa 4", check: false },
];

export function TaskBlock(props: TaskBlockProps) {
  const {} = props;
  const [tasksList, setTasksList] =
    useState<{ id: number; titulo: string; check: boolean }[]>(tasks);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  function onRemove() {}
  function onAdd() {}
  function onCheck(id: number, checked: boolean) {
    setTasksList((currentTasks) =>
      currentTasks.map((t) => {
        if (t.id === id) {
          return { ...t, check: checked };
        }
        return t;
      }),
    );
  }

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasksList.filter((task) => task.check);
    }
    if (filter === "pending") {
      return tasksList.filter((task) => !task.check);
    }
    return tasksList;
  }, [filter, tasksList]);

  const checkedTasks = tasksList.filter((task) => task.check).length;

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
        <TabsFilter onChange={setFilter} />
        <div></div>
      </div>
      <div>// input add task</div>
      <div>
        {filteredTasks.length === 0 && (
          <p className="text-zinc-700 dark:text-zinc-300">
            Nenhuma tarefa encontrada
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        {filteredTasks.map((task) => {
          return (
            <TaksItem
              titulo={task.titulo}
              checked={task.check}
              key={task.id}
              onChange={(value) => {
                onCheck(task.id, value);
              }}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-1.5 w-fit">
        <span>{tasksList.length} tarefas no total</span>
        <span className="bg-gray-400 rounded-full w-1 h-1" />
        <span>
          {checkedTasks} tarefa
          {checkedTasks !== 1 ? "s" : ""} concluída
          {checkedTasks !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
