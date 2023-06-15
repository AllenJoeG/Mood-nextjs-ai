import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@clerk/nextjs'

//check for user

//Server component, not client, so it can be async!!
export default async function Home() {

  const {userId} = await auth()

  let href = userId ? '/journal' : '/new-user'


  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      {/* square brackets tells Tailwind to use a custom value. mx-auto sets margins centered */}
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4"> mood</h1>
        {/* text size, text color opacity */}
        <p className="text=2xl text-white/70 mb-4"> Feed text entries to OpenAI for analysis.</p>
        <p className="text=2xl text-white/70 mb-4"> Query OpenAI about the content you aggregate.</p>
        <p className="text=2xl text-white/70 mb-4"> Review historical data filtered through semantic vector maps.</p>
        <p className="text=2xl text-white/70 mb-4"> Who's the computer here?</p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">mood</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
