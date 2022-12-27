---
title: "Do not reinvent the wheel"
description: As a dev we are responsible in delivering value over number of lines of code, that is our focus. Do not develop a tool from zero when there are tons of them out there that cover your needs.
tags:
    - nocode
    - tools
    - gtm
    - aws
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9n1ihqefdv236pubhrmc.jpg
imageAlt: A light over a few schemas.
date: 2022-08-22
layout: layouts/post.njk
permalink: "/{{ title | slug }}/"
---

There are times when you feel like a **god** because you think you can build anything, technically speaking, and sometimes you feel **useless** because the product owner needs you to find a solution for a specific problem and, instead of using an already mature and developed third-party product, you find yourself in your own development roadmap for a similar tool, built from zero. So your **frustration grows** because you think you have the skills to build that solution, but delivery timing would be out of question since the value needs to be delivered the following week.

As a developer your lines of code value is _null_, **the real value is in the mental process** where you imagine and chain those lines of code to approach and solve that problem.

> does the approach need new lines of code in your project? Good, have you estimated the hours needed and the cost of them? also good? Do it or not.

> is it possible to integrate a third-party tool to solve? Good, is it too expensive and it's better to develop it in-house? also good? Do it or not.

I just want you to be able to view out of the box and try to avoid thinking in the lines of code you are going to type while the Product Owner is talking about the issue itself.

## Need examples? Let's go.

### Controlling the DOM
![Control your DOM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/05rydyhr7zwt0zp486um.jpg)
Your product team needs a way to manage (adding/removing) third-party scripts on the site to avoid adding issues to JIRA and going through the whole CI/CD process. Give them [**Google Tag Manager**](https://tagmanager.google.com/), train the people who are going to manage it, setup a solid permission scheme, and not also you gave them power and a solution, but you positioned yourself as a reliable problem solver that is able to look above the keyboard.

Growth teams use experimentation as a tool to validate hypothesis to a problem they need to solve, and most of the the experiments needs to be deployed within the apps/site. You would lose almost you whole productivity if every experiment had to go through the whole CI/CD process. You can show them [**Google Optimize**](https://optimize.google.com/) or [Optimizely](https://www.optimizely.com/) to allow them to experiment without interrupting the development workflow.

### Delivering
![CI/CD Deliver](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a4c6zmuz02x2veowsgbd.jpg)
I can build you a CI/CD Pipeline using AWS Code Deploy and Pipeline, linked to a cluster of machines behind an ELB, with auto rotation for them, highly monitored in Cloudwatch, bla bla bla... I really can do that, but is it necessary to overkill every approach with that?

We already have teams of developers around the world that belong to product teams such as [Vercel](https://vercel.com/), which is very curated and mature. Give those colleagues some slack, investigate those kind of products before onboarding into an endeavour you do not know you would come back safe and sound.

### Building
![Building](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pv6jxicqqjy3hsfx5vrp.jpg)
Do you have the resources to build a Magento or Prestashop from the ground? Think it twice please, perhaps you should try services such [Shopify](https://www.shopify.com/) in the first attempt. I am not saying that _M&P_ are bad solutions, I am saying that you need people behind those platforms to maintain and develop them properly.

Need a landing page for your product that is going to last one month? Try tools such as [Webflow](https://webflow.com/). Time and resources to build a very good HTML and CSS are not free,
your front-end expert would be the one reviewing the job done by other person with that tool instead of being the person building the landing page from zero.

Do you want to validate an idea using a mobile app? Right now there are several services to build them without coding, such as [Glide](https://www.glideapps.com/). I know, I know, a native app is going to be perfect every time from here to Mars, but I am testing with that _MVP_ if I need to hire, or not, a true expert.

### Automations
![Automations](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6a5c2zrzirmvcq47xy6a.jpg)
Tired of build lambdas, api gateway endpoints, webhooks, listeners... to allow users enjoy your automations? Show them and let them play with automations in [Zapier](https://zapier.com/), [Make](https://www.make.com/en) and [Twilio](https://www.twilio.com/). Your job here is to apply a reliable security policy when using credentials/oauth to avoid misuse within the automations.

This has been a small batch of posible third parties that could lead to you reach your goal or validate ideas faster, without using nor interrupting your main work force.

Images attributions:
<a href="https://www.freepik.com/photos/business-graph">Business graph photo created by jannoon028 - www.freepik.com</a>
<a href='https://www.freepik.com/vectors/volume-button'>Volume button vector created by upklyak - www.freepik.com</a>
<a href='https://www.freepik.com/photos/covid-delivery'>Covid delivery photo created by freepik - www.freepik.com</a>
<a href='https://www.freepik.com/photos/joiner'>Joiner photo created by jcomp - www.freepik.com</a>
<a href='https://www.freepik.com/photos/ai-brain'>Ai brain photo created by rawpixel.com - www.freepik.com</a>
