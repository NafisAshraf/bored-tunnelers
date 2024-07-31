// src/sanityClient.js
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "ya7nzvxx", // Your project ID
  dataset: "production", // Your dataset
  useCdn: true, // Use the CDN for faster response times, but potentially stale data
  apiVersion: "2024-07-31", // Use the latest API version
});

// Define an async function to fetch data
export const sanityFetch = async (query) => {
  const data = await sanityClient.fetch(`*[_type == "other"]`);
  return data;
};

export default sanityClient;
