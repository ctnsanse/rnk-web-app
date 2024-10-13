import Pricing from "@/components/pricing-section/pricing-section";
import { createClient } from "@/utils/supabase/server";


export default async function subscription() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <h1>hhhh</h1>
  )

}