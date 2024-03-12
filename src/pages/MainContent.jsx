import { Fitoteca } from "../components/main-content-components/Fitoteca";
import { Inicio } from "../components/main-content-components/Inicio";

export function MainContent({ type }) {
  const content = () => {
    if (type === "inicio") {
      return <Inicio />;
    }

    if (type === "fitoteca") {
      return <Fitoteca />;
    }
  };
  return <>{content()}</>;
}
