import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'fzj1ump9', // studio project ID
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // `false` if you want to ensure fresh data for mutations
  apiVersion: '2024-03-01', // use a UTC date string
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN, // token with write permissions from sanity dashboard
});
