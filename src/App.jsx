import { IoPlayOutline } from "react-icons/io5";

import { Button } from "./shared/ui/Button/Button";

export function App() {
  return (
    <>
      <div>movie app</div>
      <Button variation="playback">
        <IoPlayOutline size={20} background-color={#e0e1dd}/>
      </Button>
      <Button variation="action">Text</Button>
    </>
  );
}
