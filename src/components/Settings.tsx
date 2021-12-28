import { VFC } from "react";
import { Link } from "react-router-dom";

const Settings: VFC = () => {
  return (
    <>
      <p>This is the Settings Page!</p>
      <p>
        <Link className="link" to="/">
          Main
        </Link>
      </p>
    </>
  );
};

export default Settings;
