import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Box } from "../box/box";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center py-16 px-96">
            <Box className="flex flex-col items-center">
                <h1>404 - Page non trouvée</h1>
                <p>Veuillez vous connecter pour accéder à votre espace personnel.</p>

                <div className="py-10">
                    <Button>
                        <Link href="/sign-in">Se connecter</Link>
                    </Button>
                </div>
            </Box>
        </div>
    )
}