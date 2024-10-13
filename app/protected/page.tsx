import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect, useId, useState } from "react";
import { supabase } from "@/config/createClient";

export default async function ProtectedPage() {

  return (
    <h1>
      Protected
    </h1>
  );
}
