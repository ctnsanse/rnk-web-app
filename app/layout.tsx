import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Typography } from "@/components/design-system/typography/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown-menu"


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-36 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-7xl flex justify-between items-center p-3 px-36 text-sm">

                  <Link href={"/"}>
                    <Image
                      src="/assets/svg/logo-rnk.svg"
                      width={50}
                      height={50}
                      alt="Meilleure boutique de chaussures"
                    />
                  </Link>

                  <div className="flex gap-5 items-center font-semibold">

                    <div className="flex items-center gap-16">

                      <DropdownMenu>
                        <DropdownMenuTrigger>
                        <Typography variant="caption2" component="div" theme="black">
                          Réseaux
                        </Typography>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Réseaux</DropdownMenuLabel>
                          <DropdownMenuSeparator />

                          <Link href="/sign-in">
                          <DropdownMenuItem>
                            Snapchat
                          </DropdownMenuItem>
                          </Link>

                          <Link href="/sign-in">
                          <DropdownMenuItem>
                            Instagram
                          </DropdownMenuItem>
                          </Link>

                          <Link href="/sign-in">
                          <DropdownMenuItem>
                            X
                          </DropdownMenuItem>
                          </Link>
                          
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Typography variant="caption2" component="div" theme="black">
                        Panier
                      </Typography>
                      
                      <Typography variant="caption2" component="div" theme="black">
                        Boutique
                      </Typography>
                    </div>

                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-[1600px] p-5">
                {children}
              </div>

              <footer className="flex items-center justify-between border-t mx-auto text-center text-xs gap-1 py-8 px-80">


                <div className="flex flex-col items-center gap-1 px-40">
                  <a href="https://www.nike.com/fr/" target="_blank">
                    <Image
                      src="/assets/svg/nike-shop.svg"
                      width={129}
                      height={116}
                      alt="Nike Store"
                    />
                  </a>
                  <p>
                    Chaussures à bon prix !
                  </p>

                </div>


                <div className="flex flex-col gap-7">



                  <a href="https://www.nike.com/fr/" target="_blank" className="font-bold hover:underline">
                    <div className="flex items-center gap-2">
                      <p>
                        Snapchat
                      </p>
                      <Image
                        src="/assets/svg/snapchat.svg"
                        width={35}
                        height={35}
                        alt="Snapchat"
                      />
                    </div>
                  </a>



                  <a href="https://www.nike.com/fr/" target="_blank" className="font-bold hover:underline">
                    <div className="flex items-center gap-2">
                      <p>
                        Instagram
                      </p>
                      <Image
                        src="/assets/svg/instagram.svg"
                        width={35}
                        height={35}
                        alt="Instagram"
                      />
                    </div>
                  </a>


                  <a href="https://www.nike.com/fr/" target="_blank" className="font-bold hover:underline">
                    <div className="flex items-center gap-2">
                      <p>
                        X
                      </p>
                      <Image
                        src="/assets/svg/twitter.svg"
                        width={35}
                        height={35}
                        alt="Twitter"
                      />
                    </div>
                  </a>


                </div>


                <div className="flex items-center px-40 gap-5">
                  <p>
                    Powered by{" "}
                    <a
                      href=""
                      target="_blank"
                      className="font-bold hover:underline"
                      rel="noreferrer"
                    >
                      FaFoFri
                    </a>
                  </p>
                  <ThemeSwitcher />
                </div>

              </footer>


            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}