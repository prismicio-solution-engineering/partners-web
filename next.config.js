/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    images: {
      loader: "imgix",
      path: "https://images.prismic.io/",
    }
  };
};

module.exports = nextConfig;
