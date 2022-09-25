import Link from "next/link"
import Image from "next/image"
import {BeakerIcon, LightBulbIcon, ZapIcon} from '@primer/octicons-react'
import { DiGithubBadge } from "react-icons/di";

export default function Home() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <main>
        <section>
          <h1 class="centeredx">Building an AI artist with Codespaces and Replicate</h1>
        </section>

        <section className="bg-red-500">
          <h1>Slide</h1>
        </section>

        <section className="bg-green-500">
          <div class="centered">
          <Image src="/codespaces-machine-type.png" layout="fill"></Image>
          </div>

        </section>

      </main>
      <footer class="fixed bottom-0 w-full bg-black text-slate-300 leading-10 monospace text-sm p-2 px-5 opacity-40">
        <div class="flex">
          <div class="flex-grow w-1/3 text-left">September 28, 2022</div>
          <div class="flex-grow w-1/3 text-center">Universe 2022</div>
          <div class="flex-grow w-1/3 text-right">
            <Link href="https://github.com/zeke">@zeke</Link>
            <DiGithubBadge size="3em" className="inline-block -mt-2 ml-3" />
          </div>
        </div>
      </footer>
    </div>
  )
}