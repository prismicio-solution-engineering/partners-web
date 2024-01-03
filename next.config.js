/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    images: {
      loader: "imgix",
      path: "https://images.prismic.io/",
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
};

module.exports = nextConfig;
