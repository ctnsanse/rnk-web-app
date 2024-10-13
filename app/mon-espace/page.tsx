"use client"

import { InfoIcon } from "lucide-react";
import React, { useEffect, useId, useState } from "react";
import { supabase } from "@/config/createClient";
import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";
import NotFound from "@/components/errors/not-found";
import Link from "next/link";
import { RiArrowRightLine, RiHome3Line } from "react-icons/ri";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs/breadcrumb"
import { Typography } from "@/components/design-system/typography/typography";
import { Box } from "@/components/box/box";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container } from "@/components/container/container";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { Input } from "@/components/ui/input";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";


export default function Profile() {

  const [users, setUsers] = useState<users[] | undefined>(undefined)

  const [user, setUser] = useState({
    prenom: '',
    nom: '',
    email: '',
    rating: '',
    date_of_bird: '',
  })

  const [user2, setUser2] = useState({
    id: '',
    prenom2: '',
    nom2: '',
    email2: '',
    rating2: '',
    date_of_bird2: '',
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

  function handleChange(event) {
    setUser(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleChange2(event) {
    setUser2(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function displayUser(userId) {

    users.map((user) => {

      if (user.id == userId) {
        setUser2({
          id: user.id,
          prenom: user.prenom,
          nom: user.nom,
          email: user.email,
          rating: user.rating,
          date_of_bird: user.date_of_bird,
        })
      }

    })


  }

  async function updateUser(userId) {
    const { data, error } = await supabase
      .from("users")
      .update({
        id: user2.id,
        prenom: user2.prenom,
        nom: user2.nom,
        email: user2.email,
        rating: user2.rating,
        date_of_bird: user2.date_of_bird,
      })
      .eq("id", userId)

    fetchUsers()

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }

  }

  return (
    <>

      <div className="absolute left-10 top-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/mon-espace"><RiHome3Line className="inline -mt-1" /></BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-12 gap-1 py-24 px-8">

        <div className="grid grid-col col-span-3 gap-7 py-12 overflow-hidden">

          <Box className="max-w-xs bg-gray-500">

            <div className="flex flex-col items-center gap-5">

              <Typography variant="caption1" component="div" theme="black">
                Version Premium
              </Typography>

              <Button>
                Acheter
              </Button>

              <Image
                src="/assets/svg/premium.svg"
                alt="Illustration du pass premium"
                width={100}
                height={100}
              />

            </div>

          </Box>

          <Box className="max-w-xs bg-gray-500">

            <div className="flex flex-col items-center gap-5">

              <Typography variant="caption1" component="div" theme="black">
                Sponsor
              </Typography>

              <Link href="https://www.nike.com/fr/" target="_blank">
                <Button>
                  Voir
                </Button>
              </Link>

              <Image
                src="/assets/svg/nike.svg"
                alt="Illustration du pass premium"
                width={100}
                height={100}
              />

            </div>

          </Box>

        </div>

        <div className="flex flex-col col-span-9 gap-10">

          <Typography variant="h2" component="h2" theme="black">
            Mon Compte
          </Typography>

          <Box>

            {/* {FORM} */}

            <form onSubmit={() => updateUser(user2.id)}>

              <div className="flex flex-col gap-6">

                <Typography variant="caption2" component="p" theme="black" className="font-bold inline-flex">
                  Prénom :
                  {users && users.map((user) =>
                    <p className="flex px-1 font-normal">{user.prenom}</p>
                  )}
                </Typography>

                <Input
                  type="text"
                  name='prenom'
                  onChange={handleChange2}
                  defaultValue={user2.prenom}
                />

                <Typography variant="caption2" component="p" theme="black" className="font-bold inline-flex">
                  Nom :
                  {users && users.map((user) =>
                    <p className="flex px-1 font-normal">{user.nom}</p>
                  )}
                </Typography>
                <Input
                  type="text"
                  name='nom'
                  onChange={handleChange2}
                  defaultValue={user2.nom}
                />

                <Typography variant="caption2" component="p" theme="black" className="font-bold inline-flex">
                  Adresse E-mail :
                  {users && users.map((user) =>
                    <p className="flex px-1 font-normal">{user.email}</p>
                  )}
                </Typography>
                <Input
                  type="text"
                  name='email'
                  onChange={handleChange2}
                  defaultValue={user2.email}
                />

                <Typography variant="caption2" component="p" theme="black" className="font-bold inline-flex">
                  Note :
                  {users && users.map((user) =>
                    <p className="flex px-1 font-normal">{user.rating}</p>
                  )}
                </Typography>
                <Input
                  type="text"
                  name='rating'
                  onChange={handleChange2}
                  defaultValue={user2.rating}
                />

                <Typography variant="caption2" component="p" theme="black" className="font-bold inline-flex">
                  Date de naissance :
                  {users && users.map((user) =>
                    <p className="flex px-1 font-normal">{user.date_of_bird}</p>
                  )}
                </Typography>
                <Input
                  type="text"
                  name='date_of_bird'
                  onChange={handleChange2}
                  defaultValue={user2.date_of_bird}
                />

              </div>

              <div className="flex py-5 gap-2">

                <Button type="submit">Save changes</Button>

              </div>

            </form>

            <div className="flex">
              {users && users.map((user) =>
                <Button onClick={() => { displayUser(user.id) }}>Edit</Button>
              )}
            </div>

          </Box>

        </div>

      </div>

    </>
  )
}