// const withLess = require('@zeit/next-less')

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/READ',
                permanent: true,
            },
        ]
    },
}

//     myLess: withLess({
//         lessLoaderOptions: {
//             javascriptEnabled: true,
//         },
//     }),
// }
// const withLess = require('@zeit/next-less')
// module.exports = withLess({
//     lessLoaderOptions: {
//         javascriptEnabled: true,
//     },
// })
