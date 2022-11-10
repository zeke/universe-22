:octocat: Slides for [universe-22.vercel.app](https://universe-22.vercel.app/)

## Links

Stuff mentioned in the slides:

🙏🏼 [Request access to GPU Codespaces](https://github.surveymonkey.com/r/Y75GX9T) - GPU access in Codespaces is not yet generally available (as of November 9, 2022) so you'll need to request access using this form.

👩‍🚀 [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion): The beloved open-source text-to-image model, running on Replicate. You can run it on Replicate using the web UI, or the [API](https://replicate.com/stability-ai/stable-diffusion/api).

🀄️ [Material Stable Diffusion](https://replicate.com/tommoore515/material_stable_diffusion): A fork of SD that generates tiling images

🎨 [Inpainter]https://github.com/replicate/inpainter): An open-source Next.js app that uses Replicate's API and Stable Diffusion to inpaint images. Check out the [source code](https://github.com/replicate/inpainter) or try it out at https://inpainter.vercel.app.

🍿 [Stable Diffusion animation](https://replicate.com/andreasjansson/stable-diffusion-animation): A model on Replicate that can animate Stable Diffusion by interpolating between two prompts

🧺 [Replicate Collections](https://replicate.com/explore#collections) - Curated sets of Replicate models that serve different purposes: Text to image, Image to text, Style transfer, Image restoration, etc.

📡 [Stable Diffusion Textual Inversion](https://github.com/zeke/replicate-sd-textual-inversion): A demo repo illustrating how to run GitHub Codespaces to fine-tune Stable Diffusion with your own concept using textual inversion, and deploy it to Replicate as a cloud API.

## Interesting projects build with Replicate and GitHub

🌏 [Action Transcription](https://twitter.com/replicatehq/status/1583487370070200321) from [@simonw](https://github.com/simonw) uses OpenAI Whisper and GitHub Actions to transcribe and translate YouTube videos. Just open a GitHub issue to fire it up!

📗 [Once Upon a bot](https://twitter.com/replicatehq/status/1583487241808027649) from [@cbh123](https://github.com/cbh123) uses GPT-3 and Stable Diffusion to create an original illustrated story.

⛓ [Replicate CLI](https://twitter.com/replicatehq/status/1583487311597424640) from [@jamiesteven](https://github.com/jamiesteven) is an open-source command-line interface for running models on Replicate, and piping the output of one model as input into another.

## Folks to watch

These people are creating some really interesting models on Replicate:

- https://replicate.com/andreasjansson
- https://replicate.com/cjwbw
- https://replicate.com/afiaka87

## Run Locally

To run this app on your own machine, you'll need to download and install Node.js, then:

```
npm install
npm run dev
```