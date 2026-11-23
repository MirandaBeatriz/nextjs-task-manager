"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";

const style = tv({
  base: "flex gap-2",
  variants: {
    active: {
      true: "bg-blue-500",
      false: "bg-gray-300",
    },
  },
});

export function TabsFilter(props: {
  onChange?: (value: "all" | "pending" | "completed") => void;
}) {
  const [option, setOption] = useState<"all" | "pending" | "completed">("all");

  function handleChange(value: "all" | "pending" | "completed") {
    props.onChange?.(value);
    setOption(value);
  }

  return (
    <div className="flex gap-2">
      <button
        className={style({ active: option === "all" })}
        onClick={() => handleChange("all")}
      >
        Todas
      </button>
      <button
        className={style({ active: option === "pending" })}
        onClick={() => handleChange("pending")}
      >
        Pendentes
      </button>
      <button
        className={style({ active: option === "completed" })}
        onClick={() => handleChange("completed")}
      >
        Concluídas
      </button>
    </div>
  );
}
