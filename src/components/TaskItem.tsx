import { Checkbox } from "./Checkbox";

type TaskItemProps = {
  onChange: (value: boolean) => void;
  titulo: string;
  checked: boolean;
};

export function TaksItem(props: TaskItemProps) {
  const { titulo, onChange, checked } = props;

  return (
    <div>
      <div className="flex items-center gap-2">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => {
            onChange(value);
          }}
        />
        <span>{titulo}</span>
      </div>
      <div></div>
    </div>
  );
}
