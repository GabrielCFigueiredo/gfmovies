import { createGlobalStyle } from "styled-components";

export default createGlobalStyle ` 

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

:root {
  --color-primary: #4d41c0;
  --bg-gray: #e8e8e8;
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html, body {
    background-color: var(--bg-gray);
}

a, a:hover {
  text-decoration: none;
  color: unset;
}

`