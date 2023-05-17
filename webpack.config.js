const path = require('path')    //To work with file paths

                                //To grab modules from file path for export
                                // and set index.js as the starting point of the app
                                // and set dist as the place where generated code will live (the public place)
                                // we need an absolute path cause reasons
                                // and dist/bundle.js the main output file (I think)
                                // and finally 'watch' makes sure any changes we make in index.js will reflect on output
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true
}