const path = require('path'); // Nos permite acceder a las carpetas donde estamos ya sea en local o la nube
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Archivo necesario para trabajar con html en webpack
const { resolve } = require('path');

//Aquí se encuentra toda la configuración webpack
module.exports = {
    //Archivo de entrada, o código inicial
    entry: './src/index.js',
    output: {
        //Creamos el lugar dónde se exportará el proyecto.
        path: path.resolve(__dirname, 'dist'),
        //Este es el nombre del archivo final para producción.
        filename: 'main.js'
    },
    resolve: {
        //Extensiones de archivo que vamos a utilizar.
        extensions: ['.js']
    },
     //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    module: {
        //Reglas
        rules: [
             // Estructura de Babel
            {
                //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                test: /\.js?$/,
                //Excluimos la carpeta de node modules
                exclude: /node_modules/,
                //Comó vamos a usar babel
                use: {
                    loader: 'babel-loader', //Utilizar un loader como configuración establecida.
                }
            }
        ]
    },
    //Establecemos los plugins que vamos a utilizar
    plugins: [
        //Permite trabajar con los archivos HTML
        new HtmlWebpackPlugin([
            {
                inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html',  //Dirección donde se encuentra el template principal
                filename: './index.html' //El nombre que tendrá el archivo
            }
        ])
    ]
}
