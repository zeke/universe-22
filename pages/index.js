import Link from "next/link"
import Head from "next/head"
// import {CopilotIcon} from '@primer/octicons-react'
import { DiGithubBadge } from "react-icons/di";

import KeyboardNav from "../components/keyboard-nav";


export default function Home() {  

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>zeke/universe-22</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <KeyboardNav />
      <main>
        <section className="bg-[url('/028.png')] bg-cover bg-center">
          <h1 className="text-white m-auto drop-shadow">
            Building an AI artist{" "}<br></br>
            <span className="opacity-100">with Codespaces and Replicate</span>
          </h1>
        </section>

        <section>
          <p class="text-center"><span className="opacity-50">Follow along at</span> <DiGithubBadge size="2em" className="inline-block -mt-1 mr-1" />
            <Link href="https://github.com/zeke/universe-22">zeke/universe-22</Link>
          </p>
        </section>


        <section>
          <h2 className="centered text-3xl">👋 Hey</h2>
        </section>

        <section style={{backgroundColor: "#22272e"}}>
          <div className="centered container">
          <img src='/zeke-bio.png' />
          </div>
        </section>

        <section style={{backgroundColor: "#22272e"}}>
          <div className="centered container">
          <img src='/adventure-cat.png' />
          </div>
        </section>

        <section style={{backgroundColor: "#22272e"}}>
          <div className="centered container">
          <img src='/rowan.jpg' />
          </div>
        </section>

        <section className="bg-gray-800">
          <div className="centered w-4/5">
            <h2 className="">Today&apos;s Topics</h2>
            <ul className="inline-block mt-5">
              <li>👩‍🚀 Stable Diffusion{""}<span className="opacity-40">, a generative text-to-image model</span></li>
              <li>🚀 Replicate{""}<span className="opacity-40">, a cloud API for running models</span></li>
              <li>📡 Codespaces{""}<span className="opacity-40">, now with GPUs!</span></li>
              <li>🤏 Fine-tuning a model<span className="opacity-40"> with textual inversion</span></li>
              <li>📦 Deploying a model<span className="opacity-40"> to Replicate</span></li>
            </ul>
          </div>
        </section>

        <section className="bg-[url('/stable-diffusion-2.png')] bg-cover bg-center">
          <h1 className="text-white m-auto">
            Stable Diffusion
          </h1>
        </section>



        <section className="bg-amber-800">
        <figure className="centered container">
          <img src='/sd-replicate-web.png' className="drop-shadow-2xl" />
          </figure>          
        </section>

        <section className="bg-amber-800">
          <p className="text-center">Stable Diffusion<span className="opacity-50"> is open source.</span></p>
        </section>


        <section className="bg-amber-700">
          <p className="text-center">Stable Diffusion<span className="opacity-50"> generates high-quality images.</span></p>
        </section>

        <section className="bg-amber-600">
          <p className="text-center">Stable Diffusion<span className="opacity-50"> can run on &ldquo;modest&rdquo; hardware.</span></p>
        </section>

        <section className="bg-amber-500">
          <p className="text-center">Stable Diffusion is fun! 🦜</p>
        </section>

        {/* <section className="bg-white">
          <div className="centered container">
          <video muted controls className="h-full mx-auto"><source src="/sd-examples-on-replicate.mp4" /></video>
          </div>
        </section> */} 

        <section className="bg-lime-900">
        <h2 className="centered"><span className="text-base opacity-40 tracking-normal font-normal">Stable Diffusion innovation:</span><br />Tiling images</h2>
        </section>

        <section className="bg-lime-900">
        <figure className="centered container">
          <img src='/material-stable-diffusion.png' className="drop-shadow-2xl" />
          </figure>          
        </section>

        <section className="bg-[url('/tile-oranges.jpg')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">oranges and pomegranates on a blue table</span></h2>
        </section>

        <section className="bg-[url('/tile-tree-bark.png')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">tree bark</span></h2>
        </section>

        <section className="bg-[url('/tile-mossy-runic-bricks.png')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">mossy runic bricks</span></h2>
        </section>

        {/* <section className="bg-[url('/tile-mars.jpg')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">the surface of mars</span></h2>
        </section> */}

        <section className="bg-[url('/tile-ocean-waves.png')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">ocean waves</span></h2>
        </section>

        <section className="bg-[url('/tile-red-hot-magma.jpg')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">red hot magma</span></h2>
        </section>

        {/* <section className="bg-[url('/tile-grass-with-scattered-flowers.jpg')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">green grass with a few scattered flowers</span></h2>
        </section> */}

        {/* <section className="bg-[url('/grass-with-flowers.jpg')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">green grass with a few scattered flowers</span></h2>
        </section> */}

        <section className="bg-[url('/tile-grass.jpg')] bg-repeat">
          <h2 className="centered"><span className="inline-bg">a field of grass with little yellow flowers</span></h2>
        </section>

        <section className="bg-[url('/dogs-and-cats.jpg')] bg-repeat bg-center bg-blend-multiply bg-yellow-300">
          <h2 className="centered"><span className="inline-bg">linocut print of cats and dogs</span></h2>
        </section>

        <section className="bg-orange-800		 centered">

        <h2 className="centered"><span className="text-base opacity-40 tracking-normal font-normal">Stable Diffusion innovation:</span><br />Inpainting</h2>
        </section>

        <section className="bg-white">
          <div className="centered container">
          <video autoPlay loop muted playsInline className="h-full mx-auto"><source src="https://inpainter.vercel.app/cherries-oranges-bananas.mp4" /></video>
          </div>
        </section>

        <section>
          <p class="text-center"><DiGithubBadge size="2em" className="inline-block -mt-1 mr-1" />
            <Link href="https://github.com/zeke/inpainter">zeke/inpainter</Link>
          </p>
        </section>


        <section className="bg-gray-700">
        <h2 className="centered"><span className="text-base opacity-40 tracking-normal font-normal">Stable Diffusion innovation:</span><br />Animation</h2>
        </section>

        <section className="bg-gray-400">
          <div className="centered container">
          <video autoPlay loop muted playsInline className="h-full mx-auto"><source src="/sd-animation.mp4" /></video>
          </div>
        </section>

        <section className="bg-gray-800">
          <div className="centered container">
          <video autoPlay loop muted playsInline className="h-full mx-auto"><source src="/animation-michelangelo.mp4" /></video>
          </div>
        </section>

        <section className="bg-lime-900">
          <div className="centered container">
          <video autoPlay loop muted playsInline className="h-full mx-auto"><source src="/animation-tree.mp4" /></video>
          </div>
        </section>

        {/* <section className="bg-grey-200">
        <figure className="centered container">
          <img src='/pokemon.jpg' />
          <figcaption>replicate.com/lambdal/text-to-pokemon</figcaption>
          </figure>          
        </section> */}


        <section className="bg-gray-800">
          <div className="centered w-2/3">
            <h2 className="">Topics</h2><br />
            <ul className="inline-block mt-5">
              <li>✅ <span className="line-through opacity-30">Stable Diffusion</span></li>
              <li>👉 Replicate{""}<span className="opacity-60">, a cloud API for running models</span></li>
              <li className="opacity-30">📡 Codespaces</li>
              <li className="opacity-30">🤏 Fine-tuning a model</li>
              <li className="opacity-30">📦 Deploying a model</li>
            </ul>
          </div>
        </section>

        <section className="bg-[url('/replicate-background.jpg')] bg-cover bg-center bg-blend-multiply bg-red-600">
          <h1 className="text-white m-auto">
            Replicate
          </h1>
        </section>

        <section style={{backgroundColor: "#22272e"}}>
          <div className="centered container">
          <img src='/replicate.com.png' />
          </div>
        </section>

        {/* <section className="bg-grey-200">
          <p>Replicate lets you run open-source machine learning models with a cloud API, without having to understand machine learning or manage your own infrastructure.
          </p>
        </section> */}

        {/* <section className="bg-brand">
        <figure className="centered container">
          <img src='/replicate-ui.png' className="drop-shadow-2xl" />
          </figure>          
        </section> */}

        <section className="bg-amber-700">
        <figure className="centered container">
          <img src='/sd-replicate-web.png' className="drop-shadow-2xl" />
          </figure>          
        </section>

        <section className="bg-amber-700">
        <figure className="centered container">
          <img src='/sd-replicate-api.png' className="drop-shadow-2xl" />
          </figure>          
        </section>

        <section className="bg-amber-700">
        <figure className="centered container">
          <img src='/replicate-text-to-image-collection.png' className="drop-shadow-2xl" />
          </figure>
        </section>

        {/* <section className="bg-white">
        <figure className="centered container">
          <img src='/collections.png' className="" />
          </figure>          
        </section> */}

        <section className="bg-gray-800">
          <div className="centered w-2/3">
            <h2 className="">Topics</h2><br />
            <ul className="inline-block mt-5">
              <li>✅ <span className="line-through opacity-30">Stable Diffusion</span></li>
              <li>✅ <span className="line-through opacity-30">Replicate</span></li>
              <li>👉 Codespaces</li>
              <li className="opacity-30">🤏 Fine-tuning a model</li>
              <li className="opacity-30">📦 Deploying a model</li>
            </ul>
          </div>
        </section>

        <section className="bg-[url('/codespaces-cosmos.png')] bg-cover bg-center bg-blend-multiply bg-red-600">
          <h1 className="text-white m-auto">
            Codespaces
          </h1>
        </section>

        <section className="bg-gray-900	">
          <div className="centered container">
            <img src='/codespaces-homepage.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-900">
          <p class="text-center"><DiGithubBadge size="2em" className="inline-block -mt-1 mr-1" />
            <Link href="https://github.com/zeke/replicate-sd-textual-inversion">zeke/replicate-sd-textual-inversion</Link>
          </p>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-01.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-02.png' className="drop-shadow-2xl" />
          </div>
        </section>


        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-03.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-04.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-05.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-06.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-07.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-08.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-09.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-11.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/cog.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/cog-yaml.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/predict-py.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-12.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-600">
          <div className="centered container">
            <img src='/create-codespace-13.png' className="drop-shadow-2xl" />
          </div>
        </section>


        <section className="bg-white">
          <div className="centered container">
          <video muted controls className="h-full mx-auto"><source src="/codespaces-settings.mp4" /></video>
          </div>
        </section>

        <section className="bg-gray-800">
          <div className="centered w-2/3">
            <h2 className="">Topics</h2><br />
            <ul className="inline-block mt-5">
              <li>✅ <span className="line-through opacity-30">Stable Diffusion</span></li>
              <li>✅ <span className="line-through opacity-30">Replicate</span></li>
              <li>✅ <span className="line-through opacity-30">Codespaces</span></li>
              <li>👉 Fine-tuning a model</li>
              <li className="opacity-30">📦 Deploying a model</li>
            </ul>
          </div>
        </section>

        <section className="bg-[url('/fine-tuning.png')] bg-cover bg-center bg-blend-multiply bg-orange-700">
          <h1 className="text-white m-auto text-center">
            Fine-tuning with textual inversion
          </h1>
        </section>
{/*         
        <section>
          <p><b>Textual Inversion</b> is a technique for capturing novel concepts from a small number of example images. It does so by learning new &ldquo;words&rdquo; in the embedding space of the pipeline&apos;s text encoder.</p>
        </section> */}

        <section className="bg-white">
          <div className="centered container">
          <img src='/textual-inversion.jpeg' />
          </div>
        </section>

        <section className="bg-sky-700">
          <div className="centered container">
          <img src='/octocat-original.png' />
          </div>
        </section>

        <section>
          <p className="font-mono text-center">art deco &lt;octocat&gt;&rdquo;</p>
        </section>

        <section className="bg-sky-700">
          <h2 className="centered"><span className="text-base opacity-40 tracking-normal font-normal">Training data:</span><br />
          octodex<span className="opacity-40">.github.com</span></h2>
        </section>

        <section className="bg-sky-700">
          <div className="centered container">
          <video autoPlay loop muted playsInline className="h-full mx-auto"><source src="/octodex.mp4" /></video>
          </div>
        </section>

        <section className="bg-sky-700">
          <div className="centered container">
            <img src='/octocat-training-data.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-700">
          <div className="centered container">
            <img src='/upload-training-data.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-700">
          <div className="centered container">
            <img src='/train-script.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-gray-700">
          <div className="centered container">
            <img src='/bash-train.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-white">
          <div className="centered container">
          <video muted controls className="h-full mx-auto"><source src="/cog-predict.mp4" /></video>
          </div>
        </section>

        <section className="bg-white">
          <div className="centered container">
            <img src='/cog-predict-output.png' className="drop-shadow-2xl" />
          </div>
        </section>


        <section className="bg-gray-800">
          <div className="centered w-2/3">
            <h2 className="">Topics</h2><br />
            <ul className="inline-block mt-5">
              <li>✅ <span className="line-through opacity-30">Stable Diffusion</span></li>
              <li>✅ <span className="line-through opacity-30">Replicate</span></li>
              <li>✅ <span className="line-through opacity-30">Codespaces</span></li>
              <li>✅ <span className="line-through opacity-30">Fine-tuning</span></li>
              <li>👉 Deploying your model</li>
            </ul>
          </div>
        </section>
        
        <section className="bg-brand">
          <div className="centered container">
            <img src='/create-model.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-brand">
          <div className="centered container">
            <img src='/cog-login-and-push.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-brand">
          <div className="centered container">
            <img src='/cog-login.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-brand">
          <div className="centered container">
            <img src='/cog-push.png' className="drop-shadow-2xl" />
          </div>
        </section>


        <section className="bg-brand">
          <div className="centered container">
            <img src='/octocats-web.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-brand">
          <div className="centered container">
            <img src='/octocats-api.png' className="drop-shadow-2xl" />
          </div>
        </section>

        <section className="bg-white">
          <div className="centered container">
          <img src='/new-octocats.png' />
          </div>
        </section>
        

        <section className="bg-gray-800">
          <div className="centered w-2/3">
            <ul className="inline-block mt-5">
              <li>✅ <span className="line-through opacity-50">Stable Diffusion</span></li>
              <li>✅ <span className="line-through opacity-50">Replicate</span></li>
              <li>✅ <span className="line-through opacity-50">Codespaces</span></li>
              <li>✅ <span className="line-through opacity-50">Fine-tuning a model</span></li>
              <li>✅ <span className="line-through opacity-50">Deploying a model</span></li>
              <li>👉 <span className="">Go forth and create!</span></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="centered text-3xl">✌️ Fin</h2>
        </section>


      </main>
      <footer className="fixed bottom-0 w-full text-slate-300 monospace text-sm rounde">
        <div className="flex">
          <div className="flex-grow text-left"></div>
          <div className="flex-grow text-center"></div>
          <div className="flex-shrink text-right bg-black rounded-l-lg pr-4 pl-3 py-3 opacity-70 mb-10">
            <DiGithubBadge size="2em" className="inline-block -mt-1 mr-1 " />
            <Link href="https://github.com/zeke/universe-22">zeke/universe-22</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}