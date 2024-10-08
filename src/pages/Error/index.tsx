import "./loader.css";
import { Text } from "../../components/Text";
import { theme } from "../../style/theme";

export const Error = () => {
  return (
    <div className="loading-container">
      <Text fontSize="xxl" color={theme.colors.black} textAlign="center">
        Siamo spiacenti c'è stato un errore{" "}
      </Text>
    </div>
  );
};
