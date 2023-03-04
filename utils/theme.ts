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
      heading: `'Inter', Segoe UI`,
      body: "'Inter', Segoe UI",
    },
    fontWeights: {
      normal: 200,
      medium: 500,
      bold: 900
    },
    config: {
      cssVarPrefix: "c",
      initialColorMode: "dark",
      useSystemColorMode: false
    },
    components: {
      Menu: {
        baseStyle: (props: StyleFunctionProps) => ({
          list: {
            bg: props.colorMode === "dark" ? "#111111db" : "white",
            backdropFilter: "blur(24px)",
            border: 'none'
          },
          item: {
            bg: props.colorMode === 'dark' ? 'hsl(0deg 0% 12% / 0%)' : "hsl(0deg 0% 12% / 0%)",
            _hover: {
              bg: props.colorMode === 'dark' ? 'hsl(0deg 0% 12%)' : "hsl(0deg 0% 12% / 9%)",
            },
            _focus: {
              bg: props.colorMode === 'dark' ? 'hsl(0deg 0% 12%)' : "hsl(0deg 0% 12% / 9%)",
            },
          },
        }),
      },
      Modal: {
        baseStyle: (props: StyleFunctionProps) => ({
          dialog: {
            bg: props.colorMode === "dark" ? "#111111db" : "white",
            backdropFilter: "blur(24px)"
          },
        }),
      },
      Drawer: {
        baseStyle: (props: StyleFunctionProps) => ({
          dialog: {
            bg: props.colorMode === "dark" ? "#111111db" : "white",
            backdropFilter: "blur(24px)"
          },
        }),
      },
    }
})

export default theme;