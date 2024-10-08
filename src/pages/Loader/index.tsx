import "./loader.css";
import { Text } from "../../components/Text";
import { theme } from "../../style/theme";

export const Loading = () => {
  return (
    <div className="loading-container">
      <Text fontSize="xxl" color={theme.colors.black} textAlign="center">
        Ci siamo quasi{" "}
      </Text>
      <div className="loader"></div>
    </div>
  );
};
