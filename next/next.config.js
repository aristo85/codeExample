/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name].[hash][ext]',
      },
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'g2k.dev.icerockdev.com',
      'go2kavkaz-stage.ru',
      'go2kavkaz.ru',
      'localhost',
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: '**.g2k.dev.icerockdev.com',
      },
      {
        protocol: 'https',
        hostname: '**.go2kavkaz-stage.ru',
      },
      {
        protocol: 'https',
        hostname: '**.go2kavkaz.ru',
      },
      {protocol: 'https', hostname: 'partner-static.qatl.ru'},
      {protocol: 'https', hostname: 'www.qatl.ru'},

      // TODO DELETE IT AFTER STOP USING MOCKS
      {protocol: 'https', hostname: 'img5.goodfon.ru'},
      {protocol: 'https', hostname: 'www.parazitakusok.ru'},
      {protocol: 'https', hostname: 'zefirka.net'},
      {protocol: 'https', hostname: 'picsum.photos'},
    ],
  },
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
