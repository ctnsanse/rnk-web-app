import { Container } from "@/components/container/container";
import { Logo } from "@/components/design-system/logo/logo";
import { ScreenSpinner } from "@/components/design-system/spinner/screen-spinner";
import { Spinner } from "@/components/design-system/spinner/spinner";
import { Typography } from "@/components/design-system/typography/typography";
import Hero from "@/components/hero";
import { ActiveLink } from "@/components/navigation/active-link";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";
import Link from "next/link";
import { SiSolana } from "react-icons/si";

export default async function Index() {
  return (
    <>
      <Container>
        <Typography variant="h1" component="h1" theme="danger">
          Bonjour à tous
          </Typography>
          <Button>
            <Link href="/">Home Page</Link>
          </Button>
        </Container>
    </>
  );
}
