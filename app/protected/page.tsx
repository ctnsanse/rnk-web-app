"use client"

import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "@/config/createClient";

export default function Protected () {

  const [users, setUsers] = useState()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase
      .from("users")
      .select('*')
    setUsers(data)
    console.log(data)
  }

  return (
    <div>Hello World</div>
  );
}
