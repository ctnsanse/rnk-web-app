"use client"

import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "@/config/createClient";

export default function Protected() {

  const [users, setUsers] = useState()

  const [user, setUser]=useState({
    prenom:'',
    nom:'',
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase
      .from("users")
      .select('*')
    setUsers(data)
  }

  function handleChange(event){
    setUser(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function createUser() {
    await supabase
    .from('users')
    .insert({ prenom: user.prenom, nom: user.nom })

    fetchUsers()
  }

  async function deleteUser(userId){

    const { data, error } = await supabase

    .from('users')
    .delete()
    .eq('id', userId)

    fetchUsers()

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }
  }

  return (
    <div>


      <form onSubmit={createUser}>
        <input 
          type="text"
          placeholder="Prénom"
          name='prenom'
          onChange={handleChange}
          />

        <input 
          type="text"
          placeholder="Nom"
          name='nom'
          onChange={handleChange}
          />
      </form>

      <button type="submit">
        Create
      </button>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>prenom</th>
            <th>nom</th>
            <th>email</th>
            <th>rating</th>
            <th>date_of_bird</th>
            <th>Action</th>
          </tr>
        </thead>

        {users && users.map((user)=>
            <tr>
              <td>{user.id}</td>
              <td>{user.prenom}</td>
              <td>{user.nom}</td>
              <td>{user.email}</td>
              <td>{user.rating}</td>
              <td>{user.date_of_bird}</td>
              <td><button onClick={() => {deleteUser(user.id)}}>Delete</button></td>
            </tr> 
          )}
        <tbody>
        </tbody>
      </table>
    </div>
  );
}
