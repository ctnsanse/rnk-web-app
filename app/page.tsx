import { Container } from "@/components/container/container";
import { Spinner } from "@/components/design-system/spinner/spinner";
import { Typography } from "@/components/design-system/typography/typography";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";
import { SiSolana } from "react-icons/si";
import { Box } from "@/components/box/box";
import Link from "next/link";


export default async function Index() {
  return (
    <>
      <Box>
        <Container className="py-24 space-y-10">

          <div className="flex justify-center gap-24">

            <div className="w-[520px] h-[350px] relative">
              <Image
                fill
                src="/assets/svg/logo-rnk.svg"
                alt="Illustration du logo de la boutique"
              />
            </div>

            <div className="max-w-md space-y-7">
              <Typography variant="h3" component="h2">
                Les toutes nouvelles paires déjà sorties !
              </Typography>

              <div className="space-y-3">
                <p>Prix raisonnable.</p>
                <p>Plusieurs choix.</p>
                <p>Trouve ton style.</p>
              </div>

              <div className="relative inline-block">

                <Button variant="secondary">
                  Let's Go
                </Button>

                <Image
                  width={38}
                  height={25}
                  src="/assets/svg/cursor.svg"
                  alt="Un curseur"
                  className="absolute left-7 -bottom-5"
                />

              </div>

            </div>

          </div>

        </Container>
      </Box>

    <div className="flex item-center">

      <div className="px-3">
      <Box padding_y="py-72">
      <div className="h-[150px] relative">
              <Image
                fill
                src="/assets/svg/sneaker.svg"
                alt="Illustration d'un logo de chaussure"
              />
            </div>
            <div className="flex flex-col text-center gap-3">
              <Typography variant="lead" component="h3">
                Boutique
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                C'est une boutique 100% fiable ! Avec un très bon service client.
              </Typography>
              <Button>
                <Link href="/sign-in">
                En savoir +
                </Link>
              </Button>
            </div>
      </Box>
      </div>


      <div className="px-3">
      <Box padding_y="py-72">
      <div className="h-[150px] relative">
              <Image
                fill
                src="/assets/svg/sneaker.svg"
                alt="Illustration d'un logo de chaussure"
              />
            </div>
            <div className="flex flex-col text-center gap-3">
              <Typography variant="lead" component="h3">
                Sponsor
              </Typography>
              <Typography variant="body-base" component="p" theme="gray" className="">
                Les produits sont des produits de chez notre sponsor nike.
              </Typography>
              <Button>
                <Link href="/sign-in">
                En savoir +
                </Link>
              </Button>
            </div>

      </Box>
      </div>

      <div className="px-3">
      <Box padding_y="py-72">
      <div className="h-[150px] relative">
              <Image
                fill
                src="/assets/svg/sneaker.svg"
                alt="Illustration d'un logo de chaussure"
              />
            </div>
            <div className="flex flex-col text-center gap-3">
              <Typography variant="lead" component="h3">
                Bon prix !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Les prix sont raisonnable et c'est très rentable d'acheter chez nous.
              </Typography>
              <Button>
                <Link href="/sign-in">
                En savoir +
                </Link>
              </Button>
            </div>
      </Box>
      </div>

      <div className="px-3">
      <Box padding_y="py-72">
      <div className="h-[150px] relative">
              <Image
                fill
                src="/assets/svg/sneaker.svg"
                alt="Illustration d'un logo de chaussure"
              />
            </div>
            <div className="flex flex-col text-center gap-3">
              <Typography variant="lead" component="h3">
                Livraison
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Le service livraison est  de très bonne qualité et très rapide
              </Typography>
              <Button>
                <Link href="/sign-in">
                En savoir +
                </Link>
              </Button>
            </div>
      </Box>
      </div>

      <div className="px-3">
      <Box padding_y="py-16">
      <div className="h-[150px] relative">
              <Image
                fill
                src="/assets/svg/sneaker.svg"
                alt="Illustration d'un logo de chaussure"
              />
            </div>
            <div className="flex flex-col text-center gap-3">
              <Typography variant="lead" component="h3">
                Protection
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
              Vos payement et bos informations sont sécurisés chez nous.
              </Typography>
              <Button>
                <Link href="/sign-in">
                En savoir +
                </Link>
              </Button>
            </div>
      </Box>
      </div>


    </div>


    </>
  );
}
