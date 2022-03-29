import { Badge, SvgIcon, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface NotificationIconProps {
  variant?: "dot" | "standard";
  overlap?: "circular" | "rectangular";
}

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    height: "20.81px",
    width: "24px",
  },
  customBadge: {
    backgroundColor: "#FF5630",
    color: "#FF5630",
  },
}));
export const NotificationIcon: React.FC<NotificationIconProps> = ({
  variant = "dot",
  overlap = "circular",
}) => {
  const styles = useStyles();
  return (
    <Badge
      variant={variant}
      overlap={overlap}
      classes={{ badge: styles.customBadge }}
      data-testid ="badge"
    >
      <SvgIcon style={{ height: "20.81px", width: "24px" }}>
        <path
          d="m 23 11.4862 h 1.7838 c 0.9852 0 1.7838 0.7986 1.7838 1.7838 c 0 0.9852 -0.7986 1.7839 -1.7838 1.7839 h -15.4599 c -0.9852 0 -1.7838 -0.7987 -1.7838 -1.7839 c 0 -0.9852 0.7986 -1.7838 1.7838 -1.7838 h 1.7838 l 0.6639 -5.9752 c 0.2991 -2.6915 2.5741 -4.7278 5.2822 -4.7278 c 2.7081 0 4.9831 2.0362 5.2822 4.7278 l 0.6639 5.9752 z m -3.56 7 c 0 -1.3136 -1.0649 -2.3784 -2.3784 -2.3784 c -1.3136 0 -2.3784 1.0649 -2.3784 2.3784 c 0 1.3136 1.0649 2.3784 2.3784 2.3784 c 1.3136 0 2.3784 -1.0649 2.3784 -2.3784 z"
          fill="#BCB7C0"
        />
      </SvgIcon>
    </Badge>
  );
};
