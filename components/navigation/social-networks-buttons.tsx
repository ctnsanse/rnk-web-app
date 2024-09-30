import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ImAmazon, ImAndroid } from "react-icons/im";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";

interface Props {
    theme?: "gray" | "accent" | "secondary"
    className?: string
}

export const SocialNetworksButtons = ({className, theme = "accent"}: Props) => {


    const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
        <Button 
        key={uuidv4()}
        variant="ico"
        iconTheme={theme}
        icon={{
            icon: socialNetwork.icon
             ? socialNetwork.icon
            : RiFacebookBoxFill,
        }}
        baseUrl={socialNetwork.baseUrl}
        linkType={socialNetwork.type}
        />
    ));

    return  <div className={clsx(className,"flex items center gap-2.5")}>{icoList}</div>;

};