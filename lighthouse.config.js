module.exports = {
    ci: {
      collect: {
        staticDistDir: "./",
        url: ['https://paulwheatcroft.github.io/lighthouse-ci-demo/'],
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };