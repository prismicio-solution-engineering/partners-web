/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Yz70pEaMTPT
 */
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center space-y-4 p-4">
              <h2 className="text-xl font-bold">Item 1</h2>
              <img
                alt="Item 1"
                className="aspect-square object-cover rounded-md"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of item 1.</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center space-y-4 p-4">
              <h2 className="text-xl font-bold">Item 2</h2>
              <img
                alt="Item 2"
                className="aspect-square object-cover rounded-md"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of item 2.</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center space-y-4 p-4">
              <h2 className="text-xl font-bold">Item 3</h2>
              <img
                alt="Item 3"
                className="aspect-square object-cover rounded-md"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of item 3.</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2">
          <ArrowLeftIcon className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2">
          <ArrowRightIcon className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
