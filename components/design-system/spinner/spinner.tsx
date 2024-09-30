import clsx from "clsx";


interface Props {
    size? : "small" | "medium" | "large";
    variant? : "primary" | "gray";
    className?: string;
}

export const Spinner = ({ size = "medium", variant = "primary", className } : Props) => {
    let variantStyles : string = "", sizeStyles : string = "";

    switch (size) {

        case "small":
            sizeStyles = "w-5 h-5";
            
            break;

            case "medium": // Default
                sizeStyles = "w-9 h-9";
            
            break;

            case "large":
                sizeStyles = "w-12 h-12";
            
            break;    
    }

    switch (variant) {

        case "primary": // primary
            variantStyles = "text-primary";
            
            break;

            case "gray":
                variantStyles = "text-gray-600";
            
            break;
    }

    return (

        <svg 

        role = "spinner"
        className = {clsx (
            sizeStyles,
            variantStyles,
            "animate-spin",
            className
        )}
        xmlns="http://www.w3.org/2000/svg" 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24">
            <path 
        fill="currentColor" 
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
            <animateTransform 
            attributeName="transform"
            dur="0.75s" 
            repeatCount="indefinite" 
            type="rotate" 
            values="0 12 12;360 12 12"/>
            </path>
    </svg>

    );
};