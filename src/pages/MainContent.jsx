import { Inicio } from "../components/Inicio";

export function MainContent({ type }) {
  const content = () => {
    if (type === "incio") {
      return <Inicio />;
    }
  };
  return <>{content()}</>;
}
