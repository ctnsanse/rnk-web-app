import { Box } from "@/components/box/box";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function subscription() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex">
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  )

}