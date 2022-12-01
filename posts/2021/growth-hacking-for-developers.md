---
title: "Growth hacking for developers"
description: A basic explanation about what Growth Hacking is, how it is related to the development ecosystem, and our role as developers.
tags:
    - growth
    - hacking
    - gtm
    - optimize
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/334vwo0akl0dk49ld2di.jpg
imageAlt: GROWTH in uppercase.
date: 2021-05-12
layout: layouts/post.njk
permalink: "/{{ title | slug }}/"
---

It is out of scope to dive deeper in some of the concepts you will read below, so I will stay on the basics, and I will try to break the ice in this topic from a technical perspective.

## What is Growth Hacking?

It is a set of methodologies, techniques and mindset that allow you to increase your digital product revenues. "Growth" starts from the need to validate an hypothesis to improve a specific area of your product, and in order to do so, a set of experiments must be developed and deployed in your production environment. When an experiment has been very successful, we call it "hack".

## Differences between Digital Marketing and Growth

First of all lets review a classic product funnel (also called "Pirate funnel") which let you analyse how your users go from "knowing" your digital product to "pay" for it:

**Step 1 Awareness**: users know about you.

**Step 2 Acquisition**: users register in your product

**Step 3 Activation**: users use your product as you instructed them to use it.

**Step 4 Revenue**: users pay for your product.

**Step 5 Retention**: users are hooked onto your product, they have a habit of use it.

**Step 6 Referral**: users tell their friends good things about your product.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mf542grsbc4gti4cmoig.jpg)
So, Digital Marketing is intended to explore mostly step 1 and 2, while Growth goes from the beginning of the funnel until the end of it, and iterates to continuously improve the funnel efficiency.

### So, are you telling us that we should give access to our CI/CD to a group of digital marketers/experts/innovators interested in doing spam to our users through some code snippets out of our QA process?

No, they need a way to validate their hypothesis to improve the funnel, so what we do, as developers/tech experts, is to offer them a specific method to run experiments in production environment without interacting with us or our roadmap. How? Google Tag Manager, for example.

You could use Google Tag Manager to allow them to add `scripts` tags based on DOM triggers, users segments triggers, etc. They could also add tools such as Google Optimize or Optimizely to build UI tests A/B and use different variants to validate their hypothesis.

I, as a developer, used to think that a feature such as a classic test a/b do not need to be outsourced to an external tool, but man, I was wrong. Both services mentioned above do an excellent job in their free tier, so we do not need to re-invent the wheel.

## Which technical roles are needed in Growth? Why?

Growth Hackers are experts in consumer psychology, innovation, creativity and be able to apply scientific methods to validate their hypothesis, so taking this into account it is difficult for them to build a decent technical knowledge to develop their custom own experiments based on code.

There are tons of `no-code` tools out there that help them to build experiments, but they often reach a point in the hypothesis validation process in which these tools are not enough, and a custom development need to be made. That is when we enter to the play field.

Experiments vary from simple `modal windows`, `popups`, `CTA bars`, etc, to more complex backend processes, such as building a custom GeoIP location service to trigger specifics experiments to different users segments.

A few months ago I wrote a basic tutorial for the [GeoIP service](https://dev.to/producthackers/your-own-geoip-service-1-2-maxmind-geoip-aws-sam-52go), in case you are interested in it.

If your "Growth A-Team" wants to be able to manoeuvre without limitations, both front-end and back-end developers are needed. Cloud platforms knowledge such as AWS, Azure, etc are also important skills to deploy securely and fast experiments based on CDN features, redirections, specific API's endpoints, etc.

## Ok, so our Growth Hackers are testing experiments through GTM, what's next?

When a hypothesis has been validated using experiments, the normal course of action is to integrate this development into the product roadmap, in order to apply that successful knowledge to the product itself. And from there, iterate again to find more ways to increase funnel performance and efficiency.

## Advantages and disadvantages of this experimentation process

**+** Fast hypothesis validations

**+** Fast client side validation for the experiments that will occur on their site

**+** No development resources usage in case the experiment could be completed with a "No-code" approach.

**-** Expect quality assurance concerns.

**-** Experiments may not comply at first with security and data protection policies.

**-** High chance to maintain legacy code if there is not a development process behind these experiments.

I hope you enjoyed this content, a bit different what we are used to read here, but I think that our frequent isolation as developers is a barrier to obtain knowledge about other disciplines that interact directly with our world.
