import { signInAction } from "@/app/actions";
import { Box } from "@/components/box/box";
import { Container } from "@/components/container/container";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (

    <Container className="flex items-center justify-center py-16">
  <Box className="w-full max-w-md p-8 rounded-lg shadow-md">

    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Se connecter</h1>
      <p className="text-sm text-foreground">
        Tu n'as pas de compte ?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          S'inscrire
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="Votre@exemple.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Mot de passe</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Mot de passe oublié ?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          required
        />
        <SubmitButton pendingText="Se connecte..." formAction={signInAction}>
          Se connecter
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
    </Box>
    </Container>
  );
}

