import { css } from "@emotion/react";
import { VFC } from "react";
import { Link } from "react-router-dom";

const styles = {
  link: css`
    color: #61dafb;
  `,
};

const Settings: VFC = () => {
  return (
    <>
      <p>This is the Settings Page!</p>
      <p>
        <Link css={styles.link} to="/">
          Main
        </Link>
      </p>
    </>
  );
};

export default Settings;
