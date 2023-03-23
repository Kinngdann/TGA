import { createTheme } from "@mui/material/styles";


export function theme(mode){
  // return mode === "light"? "light" : "dark";
  return createTheme({
    palette: {
      mode: mode,
    },
  })
}

// export const theme = createTheme({
//   palette: {
//     mode: toggleMode(),
//   },
// });
