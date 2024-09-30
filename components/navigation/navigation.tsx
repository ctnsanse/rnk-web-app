import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import { useAuth } from "@/context/AuthUserContext"
import { AccountAvatarNavigationLink } from "./account-avatar-link"

interface Props {}

export const Navigation = ({}: Props) => {
    const {authUser, authUserIsLoading} = useAuth();

    const authetificationSystem = (
        <div className="flex items-center gap-2">
        <Button baseUrl="/connexion" size="small">Connexion</Button>
        <Button baseUrl="/connexion/inscription" size="small" variant="secondary">Rejoindre</Button>
    </div>
    )

    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <Link href = "/">
                <div className="flex items-center gap-2.5">
                    <Logo size="small"/>
                <div className="flex flex-col">
                <div className="text-gray font-extrabold text-[24px]">
                    FaFoFri
                </div>
                <Typography
                    variant = "caption4"
                    component="span"
                    theme="gray"
                >
                    Fifa c'est jeux full script c'est une dinguerie !
                </Typography>
                </div>
            </div>
            </Link>


            <div className="flex items-center gap-7">
                <Typography variant="body-base" component="div" className="flex items-center gap-7">
                    <ActiveLink href="/design-system">Design system</ActiveLink>
                    <Link href = "/projets">Projets</Link> 
                    <Link href = "/formation">Formations</Link>
                    <Link href = "/contact">Contact</Link>
                </Typography>

                {!authUser ? authetificationSystem : <AccountAvatarNavigationLink /> }
            </div>
            </Container>

        </div> 
    )
}