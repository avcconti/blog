---
title: "Thoughts on DynamoDB, 10 years later"
description: 10 years has passed since its launch and it continues to be a highly reliable NoSQL database service that fits in almost every scenario.
tags:
    - dynamoDB
    - NoSQL
    - aws
    - database
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pwnprkji6qxu91r53fcw.png
imageAlt: AWS DynamoDB schema.
date: 2022-02-23
layout: layouts/base.njk
permalink: "/{{ title | slug }}/"
---


Happy birthday DynamoDB!

This month we celebrate the birthday of one of the most important **NoSQL fully managed database** service available in the market.

## Production ready
I have been using AWS services for production loads since 2010, I can consider myself a pioneer of the services they were offering at that time, but I could never have imagined that AWS was cooking such a **disruptive database service** that will be launched two years later, on January 2012.

But DynamoDB was not a recent trend in that moment, though it was born in the edge of a few malfunctioning **situations occurred** in 2004 in the Amazon core e-commerce platform. From there, engineers **investigated** and built what we know today as DynamoDB. It was first announced [as a paper in 2007](https://www.amazon.science/publications/dynamo-amazons-highly-available-key-value-store) and it was **adopted** by several core services teams at Amazon over the following months after that.

This service was (and is) **very easy** to setup and work with, and avoided us to built MySQL databases when they were not really necessary, so it boosted our speed to build **concept proofs**, that later became a reality within the same service because its reliability and **scalability**.

## Use cases
Below I am going to mention a few use cases I have use DynamoDB for:

### Dynamic HTML widgets
I few years ago I worked for a _SaaS_ that built custom experiences for users based on their **behaviour** in the website. One of the products was based on product recommendations, and the client was able to build custom widgets (html) within their dashboard. Later, when website was loaded in the browser by the user, the widget was **filled with real products** directly within the front-end. That HTML, with custom variables, was saved in DynamoDB, along with different properties related to the widget itself.

### Tracking user actions
I have been using DynamoDB since the beginning as a database to **ingest** all kind of user **actions**. Those actions are later processed in batch to obtain useful information, and DynamoDB's **search** capability has been very useful to locate and **filter** data. this use of DynamoDB served us well when building products such as: cart abandonment emails, analytics dashboards for clients or simple data tables.
Also the ability to set up a timeout for entries, makes DynamoDB a friendly tool in terms of **data protection compliance**.

### Used as an Identity pool management
When you are starting to know DynamoDB, the very first advice you are going to receive is: _"Design your tables thinking in how you are going to search for in them later"_, so _the sky's the limit_ , as Jason Derulo said in his song. Taking this advice into account, I was able to build a _User Identity_ pool system from scratch, which also included dynamic profile attributes, without relying in a MySQL server.

I know that nowadays we are lucky to be able to use different technologies much more focused and optimised for some of these use cases, but in the past we had **fun trying to "hack"** DynamoDB to served us for almost everything. Anyways, DynamoDB will not leave us for a (long)while, so we will enjoy it until then.


[Happy 10th Birthday, DynamoDB! Official announcement](https://aws.amazon.com/blogs/aws/happy-birthday-dynamodb/)
