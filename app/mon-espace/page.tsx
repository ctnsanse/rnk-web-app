import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";
import NotFound from "@/components/errors/not-found";
import Link from "next/link";

export default async function MonEspace() {

    // Fonction Session for only user connected
    const supabase = createClient();
  
    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return NotFound();
    }

    return (
        <>
        <h1>Mon Espace</h1>
        </>
    )
}