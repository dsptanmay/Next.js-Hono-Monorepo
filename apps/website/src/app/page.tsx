import { apiClient } from "@/utils/api-client";

async function getData() {
  const res = await apiClient.$get();
  const data = await res.json();
  console.log(data);
}

export default async function Home() {
  await getData();
  return <div className="flex flex-col items-center p-10">Home Page</div>;
}
