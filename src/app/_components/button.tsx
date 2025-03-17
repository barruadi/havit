import Link from "next/link";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    goto?: string;
    className?: string;
}

function Button({
    text,
    onClick,
    goto = '/',
    className = ''
}: ButtonProps) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const baseClass = "w-full px-6 drop-shadow-md"
    const buttonClass = `${baseClass} ${className}`;

    return (
        <div className="w-full py-3 px-6 text-center bg-[#21577A] rounded-[14px]">
            <Link href={goto} className={buttonClass} onClick={handleClick}>
                {text}
            </Link>
        </div>
    )
}

export default Button;