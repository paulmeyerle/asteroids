const chalk = require('chalk');
const express = require('express');
const port = 3000;
const isDev = process.env.NODE_ENV != 'production';
const resolve = require('path').resolve;
const app = express();
const outputPath = resolve(process.cwd(), 'dist')
const publicPath = '/'
const host = null;

app.use(publicPath, express.static(outputPath));
app.get('*', (req, res) => res.sendFile(resolve(outputPath, 'index.html')));

app.listen(port, host, (err) => {
  if (err) {
    return console.error(chalk.red(err));
  }

  console.log(chalk.green("application started"));
});