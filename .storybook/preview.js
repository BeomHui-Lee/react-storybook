export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // backgrounds: {
  //   values: [
  //     { name: 'red', value: '#f00' },
  //     { name: 'green', value: '#0f0' },
  //   ],
  // }
}

// export const decorators = [
//   (Story) => (
//       <div style={{margin : "50px"}}>
//         <Story />
//       </div>
//   )
// ]
