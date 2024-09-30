import { Container } from "@/components/container/container";
import { Logo } from "@/components/design-system/logo/logo";
import { ScreenSpinner } from "@/components/design-system/spinner/screen-spinner";
import { Spinner } from "@/components/design-system/spinner/spinner";
import { Typography } from "@/components/design-system/typography/typography";
import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";
import { SiSolana } from "react-icons/si";
import "./globals.css";


export default async function Index() {
  return (
    <>
      <Typography variant="lead" component="div" theme="warning">
        Hello Singapour ! 
        Je vais te rejoindre coute que coute je suis super motiver.
      </Typography>
      <div className="flex items-center py-10">
        <Button size="icon">
        <SiSolana />
        </Button>
        <Spinner variant="gray"/>
        <Logo />
        <Image 
            src="/assets/svg/nike.svg"
            width={129}
            height={116}
            alt="Meilleure boutique de chaussures"
          />

      <Container>
        <Typography variant="h1" component="h1" theme="danger">
          Bonjour à tous
          </Typography>
        </Container>

        </div>
    </>
  );
}
