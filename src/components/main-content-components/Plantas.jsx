import { Card } from "../Card";
// import { Card } from "../CardV2";

export function Plantas() {
  return (
    <div className="plantas-container my-3">
      <h1 className="text-start mb-5 text-verde">Plantas</h1>

      <div className="plantas flex justify-center items-start mb-[100px]">
        <Card type="plantas" />
      </div>
    </div>
  );
}
