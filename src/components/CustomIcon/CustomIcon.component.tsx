import { IconBaseProps } from "react-icons";
import { StyledIcon } from "./CustomIcon,styled";

interface CustomIconProps {
  icon: React.ReactElement<IconBaseProps>;
  color?: string;
  size?: string;
  padding?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  color,
  size,
  padding,
}: CustomIconProps) => {
  return (
    <StyledIcon color={color} size={size} padding={padding}>
      {icon}
    </StyledIcon>
  );
};

export default CustomIcon;
