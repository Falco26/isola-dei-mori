import { Button } from "../Button";
import { Stack } from "../Stack";
import "./headerstylesimples.css";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes";

type Props = {
  headerClass?: string;
  logoClass?: string;
  headerButtonClass?: string;
  mainColor?: "white" | "dark";
  buttonTitle?: string;
  navLink?: keyof typeof appRoutes | string;
};

export const SimpleHeader = ({
  buttonTitle = "Contattaci",
  navLink = "CONTACT",
}: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <Stack
      justifycontent="center"
      alignitems="center"
      flex={1}
      paddingvertical={45}
      flexDirection="row"
      paddinghorizontal={60}
      className="header"
    >
      <Stack className="fake-div" onClick={handleGoBack}>
        <Button icon="ArrowBackIosNew" direction="reverse" />
      </Stack>
      <Stack flex={1}>
        <a href="/">
          <img
            className="logo"
            src="http://www.isoladeimori.it/idm/templates/shape5_vertex/images/s5_logo.png"
            alt="logo isola dei mori"
          />
        </a>
      </Stack>

      <Stack className="fake-div"></Stack>
    </Stack>
  );
};
