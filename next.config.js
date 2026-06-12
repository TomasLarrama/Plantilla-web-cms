/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inyecta las variables del .env de tu PC directamente para que el HTML las use
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  },
  rewrites: async () => {
    return [
      { source: '/', destination: '/index.html' },
      { source: '/login', destination: '/login.html' },
      { source: '/admin', destination: '/admin.html' },
    ];
  },
};

module.exports = nextConfig;/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inyecta las variables del .env de tu PC directamente para que el HTML las use
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  },
  rewrites: async () => {
    return [
      { source: '/', destination: '/index.html' },
      { source: '/login', destination: '/login.html' },
      { source: '/admin', destination: '/admin.html' },
    ];
  },
};

module.exports = nextConfig;/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inyecta las variables del .env de tu PC directamente para que el HTML las use
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  },
  rewrites: async () => {
    return [
      { source: '/', destination: '/index.html' },
      { source: '/login', destination: '/login.html' },
      { source: '/admin', destination: '/admin.html' },
    ];
  },
};

module.exports = nextConfig;