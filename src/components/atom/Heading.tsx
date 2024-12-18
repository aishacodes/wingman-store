import { ReactNode } from 'react'
import { cn } from "@/lib/utils"

const Heading = ({children,classNames}:{children:ReactNode; classNames?:string}) => {
  return (
    <h1 className={cn("font-medium text-lg md:text-[2rem] text-darkBlue", classNames)}>{children}</h1>
  )
}

export default Heading