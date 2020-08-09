## google sheets to links page

I really wanted a page to share the fun links I come across and couldn't find anything I liked so made this.

Demo: https://links.dean.lol
![](https://i.imgur.com/OntXvt5.png)

# Fork this and make it your own

1. Fork/clone this project (`git clone`)
2. `cd` into the project and download the node modules with `npm i`
3. Rename `.envTEMPLATE` to `.env`

# Setup the Google Sheet

1. Make a copy of this [google sheet](https://docs.google.com/spreadsheets/d/1eZKV6ol9lUYO9FURO2_gTHbFATGAqhkyssG9Rs5Ves4/edit?usp=sharing)
1. In the settings select File > Publish to Web > select .CSV
   ![](https://i.imgur.com/U2rZfrw.gif)

# Connect the Google Sheet

1. Copy the google sheet published link from the last step and paste the URL in `.env` after `URL=`. (No spaces, no commas, no quotations.)
1. save and run `npm run dev` to test.

# Make your own website

1. In the `package.json` you can see the deploy script. Change `links.dean.lol` to your personal domain.

```
"deploy": "npm run build && echo links.dean.lol > docs/CNAME && git add -A && git commit -m 'update' && git push",
```

2. Check out how to point your domain DNS towards github pages, [I personally prefer using cloudflare](https://medium.com/@samdutton/github-pages-cloudflare-custom-domain-checklist-e86c786194a4).
3. Upload your repository to your own github, click settings and enable domains.


*Confused?*
[Watch me make this site from design to deployment.](https://twitter.com/dmasley/status/1292177004662530048?s=20)
