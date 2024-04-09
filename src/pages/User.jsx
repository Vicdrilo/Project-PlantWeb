import { UserInfoBox } from "../components/user-components/InfoBox";

export function User() {
  return (
    <>
      {/* <h1>Perfril de usuario</h1> */}
      <div className="flex flex-col gap-4">
        <UserInfoBox />
      </div>
    </>
  );
}
