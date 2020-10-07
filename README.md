# github-trending

Installing should be as easy as `yarn`.

And then just do `yarn dev` to fire up the app in local environment.


# Code Coverage

After you ran `yarn test:cc` coverage can be found here root/coverage/lcov-report/index.html

I did not add testing for getStaticProps and connect, thats why the coverage for github-trending page is not 100%.
I think testing the connect function is pointless and testing getStaticProps is probably better done via cypress.


# Production version

You can find a production version of this here: https://mzt1.com/github-trending
(It is slightly different, for instance having PWA support).


# Performance

The performance should be exceptional, the most prominent fact being that everything needed for rendering the page is included in the intial .html file, no additional roundtrips for css or jss needed. React and everything else JS related will be loaded async, the user won't notice this except when having a very slow internet connection. But even then the bundle sizes are fairly small and http2 boosted.

Lighthouse scores for performance are around 98-100 for desktop and 83-87 for mobile. The load event fires around 350ms-500ms with hight speed internet, 2.5s with slow 3g.


# Bundles

Page                                                           Size     First Load JS
┌   /_app                                                      0 B              92 kB
├ ○ /404                                                       3.44 kB        95.5 kB
└ ● /github-trending (ISR: 10 Seconds)                         47 kB           139 kB
+ First Load JS shared by all                                  92 kB
  ├ chunks/9e9953b74aa128c97b6cfc44bde25beb254e6a41.bf0485.js  26.4 kB
  ├ chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.08f371.js  9.98 kB
  ├ chunks/framework.baa41d.js                                 40.2 kB
  ├ chunks/main.f0e1f9.js                                      7.73 kB
  ├ chunks/pages/_app.0719b7.js                                6.93 kB
  └ chunks/webpack.e06743.js                                   751 B

  This also examplyfies the code splitting feature of nextjs.


# Overall UI

- Zero layout shift / content jumping!
- Responsive, even in landscape mode.
