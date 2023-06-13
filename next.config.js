/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000, // Adjust the limit as needed
          fallback: "file-loader",
          publicPath: "/_next",
          outputPath: "static/videos",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};
