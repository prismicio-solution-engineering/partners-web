/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ICRWVNsKPY4
 */
export default function Component() {
  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-scroll scroll-snap-y-mandatory">
      <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-500 scroll-snap-start">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-white">Section 1</h1>
          <ul className="mt-4 text-lg text-white list-disc list-inside">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            alt="Placeholder image"
            className="w-full h-auto"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
      </section>
      <section className="h-screen flex flex-col md:flex-row-reverse items-center justify-center bg-gray-400 scroll-snap-start">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-black">Section 2</h1>
          <ul className="mt-4 text-lg text-black list-disc list-inside">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <span className="w-full h-auto rounded-md bg-muted" />
        </div>
      </section>
      <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-300 scroll-snap-start">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-black">Section 3</h1>
          <ul className="mt-4 text-lg text-black list-disc list-inside">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            alt="Placeholder image"
            className="w-full h-auto"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
      </section>
      <section className="h-screen flex flex-col md:flex-row-reverse items-center justify-center bg-gray-200 scroll-snap-start">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-black">Section 4</h1>
          <ul className="mt-4 text-lg text-black list-disc list-inside">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            alt="Placeholder image"
            className="w-full h-auto"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
      </section>
    </div>
  )
}

