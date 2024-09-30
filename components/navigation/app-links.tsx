import { AppLinks } from "@/types/app-links";
import { ImAmazon } from "react-icons/im";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Acceuil",
        baseUrl: "/",
        type:"internal",
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type:"internal",
    },
    {
        label: "FaFoFri",
        baseUrl: "/#",
        type:"internal",
    },
    {
        label: "Formations",
        baseUrl: "/https://www.youtube.com/watch?v=Vyi7uHqpycM&list=PLNQ-XiM1dcaYobADECBmCvHmtZy3cLtfh&pp=iAQB",
        type:"external",
    },
];

const footerUserLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type:"internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type:"internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type:"internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mots-de-passe-perdu",
        type:"internal",
    },
];

const footerInformaitonLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type:"internal",
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type:"internal",
    },
    {
        label: "à Propos",
        baseUrl: "/#",
        type:"internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type:"internal",
    },
];

export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "/",
        type:"external",
        icon: RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "/#",
        type:"external",
        icon: RiLinkedinFill,
    },
    {
        label: "Slack",
        baseUrl: "/#",
        type:"external",
        icon: RiSlackFill,
    },
];

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateur",
        links: footerUserLinks,
    },
    {
        label: "Informations",
        links: footerInformaitonLinks,
    },
    {
        label: "Réseaux",
        links: footerSocialNetworksLinks,
    },
];