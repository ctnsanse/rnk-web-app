import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";

export default async function ProtectedPage() {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [fetchError, setFetchError] = useState(null)
  const [information, setInformation] = useState(null)

  useEffect(() => {
    const fetchInformation = async () => {
      const {data, error} = await supabase
      .from("information")
      .select()

      if (error) {
        setFetchError("Could not fetch th information")
        setInformation(null)
        console.log(error)
      }
      if (data) {
        setInformation(data)
        setFetchError(null)
      }
    }

    fetchInformation()

  }, [])

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {information && (
        <div className="information">
          {information.map(information => (
            <p>{information.title}</p>
          ))}
      </div>
      )}
    </div>
  );
}