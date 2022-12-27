---
title: "10 Tools to measure Core Web Vitals"
description: We are going to mention  the most important tools out there to measure Core Wb Vitals.
tags:
    - webVitals
    - pageSpeedInsights
    - lighthouse
    - webpagetest
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ib07b7pm1qugbenypy27.png
imageAlt: A dashboard with metrics.
date: 2021-10-14
layout: layouts/post.njk
permalink: "/{{ title | slug }}/"
---

In May 2020 Google announced **Core Web Vitals** as the center of how a web has to behave in front of a user, a lot has been written since then, a lot. The _3 vitals_ has been explained deeply all over the Internet, so I will not talk about them. Nowadays, the most important part of these metrics is how to measure and evaluate them in the most effective way, so which tools do we have at our hand to do that?

Before that I want to make sure that you really understand the difference between two concepts, **Field data** vs **Lab data**.

I am going to paste a very good explanation took from [Page Speed Insights doc page](https://developers.google.com/speed/docs/insights/v5/about):

_The field data is a historical report about how a particular URL has performed, and represents anonymized performance data from users in the real-world on a variety of devices and network conditions. The lab data is based on a simulated load of a page on a single device and fixed set of network conditions. As a result, the values may differ._

So, **Field data** is data tracked whenever a user visits our page, could it be from a super fast PC/Mac or a slow 2G/3G connection, which will offer very different metrics. It is very good to analyze real-world user experience issues

And **Lab data** is basically about having some computers at google datacenter executing Lighthouse on every page. It is good for debugging performance issues and capturing tips which need deeper study.

## Tools
1. [In browser Lighthouse](#in-browser-lighthouse)
2. [Lighthouse cli](#lighthouse-cli)
3. [LHCI](#lhci)
4. [Core Web Vitals Chrome built it extension](#core-web-vitals-chrome-built-it-extension)
5. [Web Vitals Chrome extension](#web-vitals-chrome-extension)
6. [Chrome dev tools performance](#chrome-dev-tools-performance)
7. [Page Speed Insights](#page-speed-insights)
8. [Google Search console](#google-search-console)
9. [CrUX Dashboard](#crux-dashboard)
10. [Webpagetest](#webpagetest)

### In browser Lighthouse
![In browser Lighthouse](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ir2zujxqueos2cfe6h7l.png)

**Local Lab data** on demand, but it is not really recommended since browser extensions have great negative impact on the report results.

### Lighthouse cli
![Lighthouse cli](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/enu51cop8bk6o50fc995.png)

**Local Lab data** on demand, and the only way I would recommend to execute **Lighthouse**, since it uses a clean Chromium window to execute the test. Check it out [here](https://github.com/GoogleChrome/lighthouse)

### LHCI
![LHCI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/betvgo2b2x25jwodrf0x.png)

**Lab data** on demand and unattended. This version of **Lighthouse** is oriented to be integrated in a **continuous integration** workflow to check your metrics before deploying to production. However, you could also use it as command executed in a **cron** to check an environment performance over the time. I use the latter to check production performance each 12 hours, since there are third parties adding and removing dynamic content that could affect UX. Check its repo [here](https://github.com/GoogleChrome/lighthouse-ci)

### Core Web Vitals Chrome built it extension
![Core Web Vitals Chrome built it extension](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fv6qd6gfc2f8703p085t.gif)

**Local Field data** on demand, as a native extension of Chrome browser. Very useful to detect issues in real-time. Doing a Lighthouse report after viewing this, could give you insights to solve those issues. In order to show the overlay we have two options:
a) `Open Dev tools -> use Run Command option -> type "Core web vitals"`.

b) Keyboard shortcuts: `CMD + Option + I -> CMD + SHIFT + P -> type "Core web vitals" `

### Web Vitals Chrome extension
![Web Vitals Chrome extension](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1qrcr97q6rpor188mkvo.png)

**Local Field data** vs **Field data** comparison in realtime. Very useful extension since it is showing data from that moment and retrieve **Field data** from [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report). You may download it from [Chrome web store](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en)

### Chrome dev tools performance
![Chrome dev tools performance](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zlanm53tx3c2hdzc412y.png)
![Chrome dev tools performance](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ias9mvnac2yzcngc74bi.png)

Very useful to **debug** possible issues related to Web Vitals, since you can check at the very right moment an issue appeared.

### Page Speed Insights
![Page Speed Insights](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g64ujmvnju02fwp58uzo.png)

This is [THE tool](https://developers.google.com/speed/pagespeed/insights/) from google to compare **Field data** and **Lab data** regarding performance scoring. It is like an empowered Lighthouse. PSI’s data is updated daily with the trailing 28-day period.

### Google Search console
![Screenshot 2021-10-13 at 17.46.22](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8dlabg2tlhjzhzy6owjx.png)
![Screenshot 2021-10-13 at 17.46.29](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3uxkwsap3y69a238rilo.png)

Google Search Console page experience data is fed with PSI's data, so you can easily monitor every day the trailing period and receive alerts related to Web Vitals issues.

### CrUX Dashboard
![Screenshot 2021-10-13 at 17.54.28](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/73fp7olc9ikg5pls1bth.png)

Building a [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report) should be one of your priorities to study Web Vitals deeply, since is going to give insights form the last month and detect trends.

### Webpagetest
![Screenshot 2021-10-13 at 18.05.47](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hb5mf81ns1wrbgslkrys.png)

[Webpagetest](https://www.webpagetest.org/) is a long live citizen of the Internet and has been always very resourceful. It offers Web Vitals with very detailed reports with **Field data** and **Lab data** comparison, so give it a try.

I hope you enjoyed this content ;)
