import { Plantas } from "../components/main-content-components/Plantas";
import { Inicio } from "../components/main-content-components/Inicio";

export function MainContent({ type }) {
  const content = () => {
    if (type === "inicio") {
      return <Inicio />;
    }

    if (type === "plantas") {
      return <Plantas />;
    }

    if (type === "matirials") {
      return <Plantas />;
    }

    if (type === "advice") {
      return <Plantas />;
    }

    if (type === "forum") {
      return <Plantas />;
    }
  };
  return <div className="bg-verde-claro">{content()}</div>;
}
