import LogoDark from "../../assets/images/logos/xtremelogo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className="text-4xl text-gray-800">AAASOM</a>
    </Link>
  );
};

export default Logo;
