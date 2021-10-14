module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "sass styles/scss:styles/css"
    );
  },
};
