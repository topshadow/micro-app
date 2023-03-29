//@ts-check





const nextConfig = {
    // basePath: '/v1.0/invoke/master/method',
    compiler: {

    },

    nx: {
        // Set this to true if you would like to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: false,
    },
    webpack: (c) => {
        c.experiments.topLevelAwait = true;
        return c;
    },
    experiments: {
        topLevelAwait: true,

    },
    experimental: {
        appDir: true,

    },
    async rewrites() {
        return [
            // {
            //     source: '/v1.0/invoke/master/method/',
            //     destination: '/',
            //     basePath: true
            // },

        ]
    },
    async redirects() {
        return [
            //     {
            //     source: '/app2/',
            //     destination: 'http://localhost:65045/v1.0/invoke/app2/method/',
            //     permanent: true
            // }
        ]
    }


};

module.exports = nextConfig; 