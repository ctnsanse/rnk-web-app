import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page non trouvée</h1>
            <p>Veuillez vous connecter pour accéder à votre espace personnel.</p>

            <div className="py-10">
                <Button>
                    <Link href="/sign-in">Se connecter</Link>
                </Button>
            </div>
        </div>
    )
}