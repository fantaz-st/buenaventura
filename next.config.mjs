// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.output.environment = {
        arrowFunction: true, // keep `() => {}`
        const: true, // keep `const`/`let`
        destructuring: true, // keep `[a, b] = arr`
        dynamicImport: true, // keep `import()`
        forOf: true, // keep `for (… of …)`
        module: true, // keep ES modules
      };
    }
    return config;
  },
};

export default nextConfig;
