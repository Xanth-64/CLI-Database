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
