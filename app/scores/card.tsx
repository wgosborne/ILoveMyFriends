import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Url } from "next/dist/shared/lib/router/router"
// import { Switch } from "@/components/ui/switch"
 
interface Props {
    name: string
    score: number
}
 
//type CardProps = React.ComponentProps<typeof Card>
 
export function CardName({ name, score }: Props) {

  const router = useRouter();

  const handleOnClick = (href: Url) => {
    router.push(href);
  }

  return (
    <Card onClick={() => handleOnClick("/player")} className={cn("p-4 border border-gray-200 rounded-md shadow-md")}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent >
        {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          {/* <Switch /> */}
        {/* </div>
        <div> */}
          {/* {notifications.map((notification, index) => ( */}
            {/* <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))} */}
        {/* </div> */}
        <h1>SCORE: {score}</h1>
      </CardContent>
      <CardFooter>
        {/* <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        </Button> */}
      </CardFooter>
    </Card>
  )
}