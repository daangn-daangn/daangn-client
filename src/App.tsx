import React from "react";

import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from '@emotion/react'
import Theme from "./styles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
        <div>app</div>
      </ThemeProvider>
    </>
  );
}

export default App;
