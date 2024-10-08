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


export default async function shopTree() {

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
                            <BreadcrumbLink href="/boutique/two">Page 3</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="grid grid-cols-12 gap-3 py-24 px-8">

                <div className="grid grid-col items-center col-span-3 py-48 overflow-hidden">

                    <Box className="max-w-xs">
                        <div className="flex flex-col items-center gap-5">
                            <Typography variant="h4" component="div" theme="black">
                                Catégories
                            </Typography>
                            <a href="/boutique/homme" target="_blank" className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Homme <IoMdMale className="inline -mt-1" />
                                </Typography>
                            </a>
                            <a href="/boutique/femme" target="_blank" className="font-bold hover:underline">
                                <Typography variant="caption2" component="div" theme="black">
                                    Femme <IoMdFemale className="inline -mt-1" />
                                </Typography>
                            </a>
                            <a href="/boutique/enfants" target="_blank" className="font-bold hover:underline">
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

                    <Box className="flex flex-col gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-9.png"
                                alt="Formule n°9 Pink"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </div>
                        <Button>
                            <RiShoppingBag3Line />
                        </Button>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 9 P
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 36/37/38/39
                        </Typography>
                    </Box>

                    <Box className="flex flex-col gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-10.png"
                                alt="Formule n°10 White Pink"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </div>
                        <Button>
                            <RiShoppingBag3Line />
                        </Button>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 10 WP
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 36/37/38/39
                        </Typography>
                    </Box>

                </div>

                <div className="flex flex-col items-center justify-between col-span-4 gap-10 px-20">

                    <Box className="flex flex-col gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-11.png"
                                alt="Formule n°11 Black Red"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </div>
                        <Button>
                            <RiShoppingBag3Line />
                        </Button>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 11 BR
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 23/24/25/26
                        </Typography>
                    </Box>

                    <Box className="flex flex-col gap-8 shadow-lg">
                        <div className="flex items-center flex-col">
                            <Image
                                src="/assets/images/formule-12.png"
                                alt="Formule n°12 Black White"
                                width={250}
                                height={350}
                                className="rounded-lg"
                            />
                        </div>
                        <Button>
                            <RiShoppingBag3Line />
                        </Button>
                        <Typography variant="caption1" component="p" theme="black">
                            Modèle : Formule 8 BW
                        </Typography>
                        <Typography variant="caption3" component="p" theme="black">
                            Taille : 23/24/25/26
                        </Typography>
                    </Box>

                </div>

            </div>


            <div className="flex items-center pb-6">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="/boutique/two" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/boutique">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/boutique/two">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="/tree">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

        </>
    )
}