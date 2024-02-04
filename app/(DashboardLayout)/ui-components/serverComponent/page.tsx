import { options } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ServerItem() {
  const session = await getServerSession(options);
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  console.log(session);
  return (
    <div>{session ? <p>there is session!</p> : <p>there is no session</p>}</div>
  );
}
