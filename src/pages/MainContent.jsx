import { Inicio } from "../components/Inicio";

export function MainContent({ type }) {
  const content = () => {
    if (type === "inicio") {
      return <Inicio />;
    }
  };
  return <>{content()}</>;
}
