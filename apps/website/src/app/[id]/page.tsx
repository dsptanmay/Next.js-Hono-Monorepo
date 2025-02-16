import { apiClient } from "@/utils/api-client";
import React from "react";

type Props = Promise<{
  id: string;
}>;

async function getData(id: string) {
  const res = await apiClient[":id"].$get({ param: { id } });
  const { data } = await res.json();
  return data;
}

async function IdPage({ params }: { params: Props }) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className="flex flex-col space-y-5 p-10 items-center">
      <h1>ID Page</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default IdPage;
