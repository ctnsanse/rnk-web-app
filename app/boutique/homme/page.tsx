import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";
import NotFound from "@/components/errors/not-found";
import Link from "next/link";
import { RiArrowRightLine, RiHome3Line, RiShoppingBag2Line, RiShoppingBag3Line } from "react-icons/ri";
import { Typography } from "@/components/design-system/typography/typography";
import { Box } from "@/components/box/box";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container } from "@/components/container/container";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { FaChildReaching } from "react-icons/fa6";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/breadcrumbs/breadcrumb";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/pagination/pagination";


export default async function masculinShop() {

    // Fonction Session for only user connected
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return NotFound();
    }

    return (

        <>

<div className="absolute left-10 top-20">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/mon-espace"><RiHome3Line className="inline -mt-1" /></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/boutique">Boutique{" "}<RiShoppingBag2Line className="inline -mt-1" /></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/boutique/homme">Homme{" "}<IoMdMale className="inline -mt-1"/></BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="grid grid-cols-12 gap-3 py-24 px-8">

                <div className="grid grid-col items-center col-span-3 py-96 overflow-hidden">

                    <Box className="max-w-xs">
                        <div className="flex flex-col items-center gap-5">
                            <Typography variant="h4" component="div" theme="black">
                                Catégories
                            </Typography>
                            <a href="/boutique/homme"  className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Homme <IoMdMale className="inline -mt-1" />
                                </Typography>
                            </a>
                            <a href="/boutique/femme"  className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Femme <IoMdFemale className="inline -mt-1" />
                                </Typography>
                            </a>
                            <a href="/boutique/enfants"  className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Enfant <FaChildReaching className="inline -mt-1" />
                                </Typography>
                            </a>
                        </div>
                    </Box>

                    <Box className="max-w-xs bg-violet-300 shadow-2xl border-gray">
                        <div className="flex flex-col items-center gap-5">
                            <Typography variant="caption1" component="div" theme="black">
                                Version Premium
                            </Typography>
                            <Button>
                                Acheter
                            </Button>
                            <Image
                                src="/assets/svg/diamant.svg"
                                alt="Illustration du pass premium"
                                width={100}
                                height={100}
                            />
                        </div>
                    </Box>
                </div>

                <div className="flex flex-col items-center justify-between col-span-4 gap-10 px-20">

                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                        <Image
                            src="/assets/images/formule-1.png"
                            alt="Formule n°1 White"
                            width={250}
                            height={250}
                            className="rounded-lg"
                        />
                        </div>
                        <Link href="https://buy.stripe.com/test_8wMbL950M2uI892fYZ" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                        Modèle : Formule 1 W
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>
                    
                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                        <Image
                            src="/assets/images/formule-2.png"
                            alt="Formule n°2 Black"
                            width={250}
                            height={250}
                            className="rounded-lg"
                        />
                        </div>
                        <Link href="https://buy.stripe.com/test_4gw4iHdxi4CQ4WQ6oq" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                        Modèle : Formule 2 B
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>
                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-5.png"
                                alt="Formule n°5 Black"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </div>
                        <Link href="https://buy.stripe.com/test_3cscPdeBmb1eexqfZ3" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 5 B
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>

                    <Box className="flex flex-col items-center gap-8 shadow-lg">

                        <div className="flex items-center flex-col gap-7">
                            <Image
                                src="/assets/images/formule-6.png"
                                alt="Formule n°6 White"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />

                        </div>

                        <Link href="https://buy.stripe.com/test_4gwcPd78Ud9m9d67sy" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>

                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 6 W
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>

                    </Box>

                </div>

                <div className="flex flex-col items-center justify-between col-span-4 gap-10 px-20">

                <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                        <Image
                            src="/assets/images/formule-3.png"
                            alt="Formule n°3 White"
                            width={250}
                            height={250}
                            className="rounded-lg"
                        />
                        </div>
                        <Link href="https://buy.stripe.com/test_28o4iH0Kw2uIdtm147" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                        Modèle : Formule 3 W
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>

                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                        <Image
                            src="/assets/images/formule-4.png"
                            alt="Formule n°4 BW"
                            width={250}
                            height={250}
                            className="rounded-lg"
                        />
                        </div>
                        <Link href="https://buy.stripe.com/test_bIY5mLdxigly4WQ3cg" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                        Modèle : Formule 4 BW
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>
                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-7.png"
                                alt="Formule n°7 White Black"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </div>
                        <Link href="https://buy.stripe.com/test_eVaeXl8cYc5i1KEdQX" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 7 WB
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>

                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-8.png"
                                alt="Formule n°8 Black Red"
                                width={250}
                                height={350}
                                className="rounded-lg"
                            />
                        </div>
                        <Link href="https://buy.stripe.com/test_bIY4iHbpa7P2cpi5ks" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 8 BR
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 38/39/40/41/42
                        </Typography>
                    </Box>

                </div>

            </div>

        </>
    )
}