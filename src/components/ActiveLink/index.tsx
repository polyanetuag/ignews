import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement} from "react";    // usar para modificar um comportamento como uma propriedade, children, etc

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string
}

export function ActiveLink({ children, activeClassName, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter()

  //verificação se contem a classe activeClassName
  const className = asPath === rest.href
    ? activeClassName
    : '';

  return(
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}