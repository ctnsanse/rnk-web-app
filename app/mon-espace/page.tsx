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


export default async function Profile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
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

              <Link href="/panier">
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

            <div className="flex flex-col gap-6">

              <Typography variant="caption2" component="p" theme="black">
                Prénom
              </Typography>
              <Input />

              <Typography variant="caption2" component="p" theme="black">
                Nom
              </Typography>
              <Input />

              <Typography variant="caption2" component="p" theme="black">
                Adresse E-mail
              </Typography>
              <Input />

              <Typography variant="caption2" component="p" theme="black">
                Date de naissance
              </Typography>
              <Input />

              <Button>
                Enregistrer
              </Button>

            </div>

          </Box>

        </div>

      </div>

    </>
  )
}