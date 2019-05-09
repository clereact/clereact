# Cleveland React

Website for Cleveland React, built with [Gatsby](https://www.gatsbyjs.org) and [gatsby-starter-mate](https://www.gatsbyjs.org/starters/EmaSuriano/gatsby-starter-mate).

## Adaptation

Feel free to use this code for other Meetup.com groups.

1. Fork the repository (https://github.com/clereact/clereact/fork)
2. Open the `metadata.js` file and edit the group information. You can also customize the color scheme if you'd like.
3. Add your own images in the `src/assets/` folder. `favicon.ico` is the favicon; `header-logo.png` is the logo image used in the top left of the header; and `site-image.png` is shown in the About section and used as the preview image when the site is shared on social media.
4. Deploy to a static site host -- [Netlify](https://www.netlify.com) is a great option. You won't need to change any of their default settings; just authorize your GitHub account and select the repository.
5. You will want Netlify to rebuild your site on a regular basis to pick up new events or RSVPs from Meetup. One way to accomplish this is with an [IFTTT](https://ifttt.com) trigger that calls a Netlify build webhook. First, create a build webhook for the Netlify site under Settings -> Build & deploy -> Continuous Deployment -> Build hooks. Copy the URL. Second, create a new Applet in IFTTT. For the "this", select "Date & Time", and select "Every hour at" (the minutes option doesn't matter). For the "that", select "Webhooks" and then "Make a web request". Paste in the Netlify build URL. Select "POST" for the method. Click "Finish" and ensure the new Applet is enabled.

## Development

### Setup

1. Clone the repository (`git clone https://github.com/clereact/clereact.git`)
2. Install npm packages: `yarn install`
3. Start the Gatsby server: `yarn start`
4. Visit [http://localhost:8000](http://localhost:8000) in your browser

### Contributing

1. Fork the repository (https://github.com/clereact/clereact/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request on GitHub
