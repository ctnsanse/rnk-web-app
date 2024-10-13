"use client"

import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect, useId, useState } from "react";
import { supabase } from "@/config/createClient";

export default function Protected() {

      // Fonction Session for only user connected
      const supabase = createClient();

      const {
          data: { user },
      } = await supabase.auth.getUser();
  
      if (!user) {
          return NotFound();
      }
  

  return (
    <h1>
      Protected
    </h1>
  );
}
