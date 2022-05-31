module.exports = {
  mode: "none",
  entry: {
    main: "./src/index.js"
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        use({issuer, resource}){
          console.log("::::: use:", {issuer, resource});
          return [];
        }
      }
    ]
  }
}
