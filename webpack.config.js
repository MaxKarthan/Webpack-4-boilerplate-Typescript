const env = process.env

module.exports = env => {
  console.log(`🛠️  running ${env.dev ? 'dev' : 'prod'} Mode using ./webpack/webpack.${env.dev ? 'dev' : 'prod'}.js 🛠️`, env);
  return require(`./webpack/webpack.${env.dev ? 'dev' : 'prod'}.js`);
};
