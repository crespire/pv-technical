import { MouseEventHandler } from "react";

interface ToggleSwitchProps {
  on: boolean;
  toggleDisplay: MouseEventHandler;
}

function ToggleSwitch(props: ToggleSwitchProps) {
  const { on, toggleDisplay } = props;
  const display = on
    ? <><strong>Grid</strong> List</>
    : <>Grid <strong>List</strong></>;

  return(
    <button className="p-2" name="switch" id="switch" onClick={toggleDisplay}>{ display }</button>
  );
}

export default ToggleSwitch;