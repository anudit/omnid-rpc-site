import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const theme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
          "html, body": {
            background: props.colorMode === "dark" ? "#000" : "white",
          },
        }),
      },
    fonts: {
      heading: "Outfit, Segoe UI",
      body: "Outfit, Segoe UI",
    },
    fontWeights: {
      normal: 400,
      medium: 600,
      bold: 900
    },
    config: {
      cssVarPrefix: "c",
      initialColorMode: "dark",
      useSystemColorMode: false
    },
    components: {
      Modal: {
        baseStyle: (props: StyleFunctionProps) => ({
          dialog: {
            bg: props.colorMode === "dark" ? "#111" : "white",
          },
        })
      },
      Drawer: {
        baseStyle: (props: StyleFunctionProps) => ({
          dialog: {
            bg: props.colorMode === "dark" ? "#111" : "white",
          },
        })
      }
    }
})

export default theme;
