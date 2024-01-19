const config ={
    mode:'production',

    // новый джс файл всегда добавлять сюда
    entry:{
        index:'./src/js/index.js'

    },
    output:{
        filename:'[name].bundle.js'
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

};


module.exports = config;