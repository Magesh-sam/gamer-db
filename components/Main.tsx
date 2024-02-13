import { cn } from "@/lib/utils"
import { FC } from "react"

interface IMain extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode
}

const Main:FC<IMain> = ({children,className,...props}) => {
  return (
      <main className={cn("container min-h-screen my-20 flex flex-col ",className)} {...props} >
          {children}
  
    </main>
  )
}

export default Main