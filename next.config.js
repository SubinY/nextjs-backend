const path = require('path');

module.exports = {
  runtime: 'edge',
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*' // 允许任何源
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,POST,PUT,DELETE' // 允许的 HTTP 方法
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Content-Type, Accept, Authorization' // 允许的请求头
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: true // 是否允许发送 cookies
          }
        ]
      }
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/api/:path*',
  //       has: [
  //         {
  //           type: 'header',
  //           key: 'cookie',
  //           value: false
  //         }
  //       ]
  //     }
  //   ];
  // }
};
