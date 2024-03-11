import { createTheme } from "@mui/material/styles";
import { Josefin_Sans } from "next/font/google";

const poppins = Josefin_Sans({ weight: ["100", "200", "400", "700"], subsets: ["latin"] });

export const customMuiTheme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});
