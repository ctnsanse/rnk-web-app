import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { Container } from "@/components/container/container";
import { Box } from "@/components/box/box";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (

    <Container className="flex items-center justify-center py-16">
      <Box className="w-full max-w-md p-8 rounded-lg shadow-md">
        <form className="flex flex-col min-w-64 max-w-64 mx-auto">
          <h1 className="text-2xl font-medium">S'inscrire</h1>
          <p className="text-sm text text-foreground">
            Vous avez déjà un compte ?{" "}
            <Link className="text-primary font-medium underline" href="/sign-in">
              Se connecter
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="Votre@exemple.com" required />
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              placeholder="Votre mot de passe"
              minLength={6}
              required
            />
            <SubmitButton formAction={signUpAction} pendingText="Inscription...">
              S'inscrire
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
        <SmtpMessage />
      </Box>
    </Container>
  );
}
