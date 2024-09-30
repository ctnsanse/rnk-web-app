import { Box } from "@/ui/design-system/box/box"
import { Button } from "@/ui/design-system/button/button"
import { toast } from "react-toastify"
import { firebaseLogOutUser } from "@/api/authentication"
import { Typography } from "@/ui/design-system/typography/typography"
import { ActiveLink } from "./active-link"

export const UserAccountNavigation = () => {

    const handleLogOutUser = async () => {
        const { error } = await firebaseLogOutUser()
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("A bientôt sur FaFoFri")
    }

    return (
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
                </Typography>
            </div>
            <Button action={firebaseLogOutUser} variant="danger">
                Déconnexion
            </Button>
        </Box>
    )
}