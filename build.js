module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "npm install && node ./styles/scss/scss.js"
    );
  },
};
