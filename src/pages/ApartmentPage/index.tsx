import { useParams } from "react-router-dom";
import { Text } from "../../components/Text";

export const ApartmentPage = () => {
  const params = useParams();
  const { id } = params;
  console.log("🚀 ~ ApartmentPage ~ id:", id);

  return (
    <>
      <Text fontSize="md">{id}</Text>
    </>
  );
};
