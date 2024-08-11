import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Access environment variables
const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET;
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION;
console.log("Project ID:", projectId);
console.log("Dataset:", dataset);
console.log("API Version:", apiVersion);

const sanityClient = createClient({
  projectId: projectId, // Your project ID from env
  dataset: dataset, // Your dataset from env
  useCdn: true, // Use the CDN for faster response times, but potentially stale data
  apiVersion: apiVersion, // API version from env
});

// Define an async function to fetch data
export const sanityFetch = async (query) => {
  const data = await sanityClient.fetch(query);
  return data;
};

// Create an image URL builder instance
const builder = imageUrlBuilder(sanityClient);

// Define a reusable function to get the image URL
export function urlFor(source) {
  return builder.image(source).url();
}

export function urlForFile(source) {
  const ref = source.asset._ref;
  // Split ref using '-' and get the middle and last part
  const [type, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
}

export default sanityClient;
