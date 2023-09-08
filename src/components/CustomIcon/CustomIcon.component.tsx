import { IconBaseProps } from "react-icons";
import { StyledIcon } from "./CustomIcon,styled";

interface CustomIconProps {
  icon: React.ReactElement<IconBaseProps>;
  color?: string;
  size?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  color,
  size,
}: CustomIconProps) => {
  return (
    <StyledIcon color={color} size={size}>
      {icon}
    </StyledIcon>
  );
};

export default CustomIcon;
