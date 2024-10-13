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


export default async function childrenShop() {

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
                            <BreadcrumbLink href="/boutique/enfants">Enfants{" "}<FaChildReaching className="inline -mt-1"/></BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="grid grid-cols-12 gap-3 py-24 px-8">

                <div className="grid grid-col items-center col-span-3 overflow-hidden gap-6">

                    <Box className="max-w-xs">
                        <div className="flex flex-col items-center gap-5">
                            <Typography variant="h4" component="div" theme="black">
                                Catégories
                            </Typography>
                            <a href="/boutique/homme" className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Homme <IoMdMale className="inline -mt-1" />
                                </Typography>
                            </a>
                            <a href="/boutique/femme" className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Femme <IoMdFemale className="inline -mt-1" />
                                </Typography>
                            </a>
                            <a href="/boutique/enfants" className="font-bold hover:underline">
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
                                src="/assets/images/formule-12.png"
                                alt="Formule n°12 Black White"
                                width={250}
                                height={350}
                                className="rounded-lg"
                            />
                        </div>
                        <Link href="https://buy.stripe.com/test_00g16v8cY0mAcpieV6" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 12 WB
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 23/24/25/26
                        </Typography>
                    </Box>

                </div>

                <div className="flex flex-col items-center justify-between col-span-4 gap-10 px-20">

                    <Box className="flex flex-col items-center gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-11.png"
                                alt="Formule n°11 Black Red"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </div>
                        <Link href="https://buy.stripe.com/test_14kbL93WI1qEdtm6oz" target="_blank">
                        <Button>
                            <p>Acheter{" "}<RiShoppingBag3Line className="inline-flex -mt-1"/></p>
                        </Button>
                        </Link>

                        <Typography variant="caption1" component="p" theme="black" className="font-bold">
                        Prix: 100€
                        </Typography>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 11 BR
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 23/24/25/26
                        </Typography>
                    </Box>

                </div>

            </div>

        </>
    )
}