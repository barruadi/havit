import ActivityBox from "../_components/activityBox";

import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
      <main className="flex-row justify-center items-center p-4 bg-[#C7F9CC]">
      <div className="text-center">
        <h1 className="text-xl text-bold text-blue-900">Riwayat Aktivitas</h1>
      </div>
      <div>
        <ActivityBox activity="Lari Pagi" date="14 Februari 2025"/>
        <ActivityBox activity="Lari Pagi" date="14 Februari 2025"/>
        <ActivityBox activity="Lari Pagi" date="14 Februari 2025"/>
        <ActivityBox activity="Lari Pagi" date="14 Februari 2025"/>
      </div>
      </main>
  );
}
