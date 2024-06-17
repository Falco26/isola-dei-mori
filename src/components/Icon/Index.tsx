import { IconsList } from "./config";

export type IconsName = keyof typeof IconsList;

type Props = {
  iconColor: string;
  iconName: IconsName;
  iconSize: number;
};

export const Icon = ({ iconColor, iconName, iconSize }: Props) => {
  const IconCmp = IconsList[iconName];
  return (
    <IconCmp
      style={{
        color: iconColor,
        fontSize: iconSize,
        width: iconSize,
        height: iconSize,
      }}
    />
  );
};
