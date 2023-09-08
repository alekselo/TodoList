import { useState } from "react";

import {
  ToggleInput,
  ToggleLabel,
  ToggleSpan,
  ToggleStrong,
} from "./ToggleButton.styles";

type ToggleProps = {
  label?: string;
  toggled: boolean;
  onClick: (toggle: boolean) => void;
};

export const ToggleButton = ({ label, toggled, onClick }: ToggleProps) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <ToggleLabel>
      <ToggleInput
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <ToggleSpan />
      <ToggleStrong>{label}</ToggleStrong>
    </ToggleLabel>
  );
};
