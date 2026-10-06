# luis-carvalho.com

This is my personal website — live at [www.luis-carvalho.com](https://www.luis-carvalho.com).

I'm Luis Carvalho, Chief Technology Officer at FARFETCH. The site is where I keep my story in my own words: the journey from a Portuguese startup to Microsoft, to co-founding Maincheck, and on to leading Technology at FARFETCH — along with what I care about, things I've written and said in public, and the occasional side project built on weekends.

It's available in English and in Portuguese ([/pt/](https://www.luis-carvalho.com/pt/)).

Elsewhere: [LinkedIn](https://www.linkedin.com/in/luiscarvalho) · [GitHub](https://github.com/luis-mc)

## How it's built and hosted

A plain static site: everything served lives in `public/`, with no build step. [Vercel](https://vercel.com) hosts it (configuration and response headers are in `vercel.json`) and deploys on every push to `main`. DNS is on Cloudflare (DNS only, no proxy) and the domain is registered at Namecheap.
