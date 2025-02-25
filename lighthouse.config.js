module.exports = {
    ci: {
      collect: {
        url: [
            'https://paulwheatcroft.github.io/lighthouse-ci-demo/',
            'https://paulwheatcroft.github.io/lighthouse-ci-demo/gallery.html',
            'https://paulwheatcroft.github.io/lighthouse-ci-demo/modern.html'
            ],  
        startServerCommand: null,
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };