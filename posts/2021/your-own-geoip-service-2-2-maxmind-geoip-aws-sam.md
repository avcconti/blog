---
title: "Your own GeoIP service 2/2: Lambda + API Gateway"
description: My own endpoint which will receive an IP as query parameter and it will return location info such as country and city
tags:
    - aws
    - lambda
    - location
    - maxmind
image: /img/2020/sam-init.png
imageAlt: Screenshot of the Wall of Wonder.
date: 2021-02-22
layout: layouts/base.njk
permalink: "/{{ title | slug }}/"
---

Let's face the second part of our little project which started [here](https://dev.to/producthackers/your-own-geoip-service-1-2-maxmind-geoip-aws-sam-52go).

In the first part we achieved a solution to invoke the GeoIP lambda in local environment successfully, giving us insights about our location. But this is not completed if we can not execute that function in the cloud, so I am going to give you a fair solution which it not the most optimal one, but at least it could point us into the right direction.

## Requisites

Remember that you will need a few things installed and working on your machine before starting:

- Docker installed on your machine
- An AWS active account
- [AWS SAM CLI working on your machine](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [AWS CLI](https://aws.amazon.com/cli/)

## Create our lambda function in AWS

There is so much literature out there with high details to create a lambda function in AWS, so I am going to skip a few steps:

1. Visita [Lambda Dashboard](https://eu-west-1.console.aws.amazon.com/lambda/home)
2. Create a new NodeJS lambda ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3jhqdszohasjxje8tk6q.png)

3. Create a test event to be able to test the new function. ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q2xb1ya45mm23dw5oayg.png)

4. Execute the function without any change in it. ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3gg7r3ehsjq6bnaljygf.png)

So, now we are ready to upload our code to this lambda function.

## Manual upload

Assuming we are at the root of the project we may execute a simple ZIP command to bundle the entire project `zip function.zip * -r`
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/93g5gvb6nlhulumb9n2g.png)

Now we return to the lambda function dashboard and upload this `zip` as the code:
![Screenshot 2021-02-22 at 12.06.20](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xso6tjn8ub170lwmno65.png)

After uploading the `zip` file an info banner will take your attention:
![Screenshot 2021-02-22 at 12.07.22](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lqnsxlv74lxpp5cef9go.png)

Do not worry about that right now, let's check that the functionality is correct. In order to do so, we run again the function using the *Test* button in the upper right corner of the UI:
![Screenshot 2021-02-22 at 12.20.48](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ntaj4comjric3jdyt9at.png)

That error was coming whether we liked or not since we built the test event without taking into account the function logic itself. Now we create a new test event and paste our current event.json built for the local environment:
![Screenshot 2021-02-22 at 12.23.10](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9idg0tq85gfujbmg5pvj.png)
![Screenshot 2021-02-22 at 12.23.32](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xu0pxakjfylkih0nexjr.png)

And now we execute the function again:
![Screenshot 2021-02-22 at 12.24.20](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sbbxusqposptiqo0qvc0.png)

It works, but this is not the best way to do it, it is far away from a continuous deployment pipeline. We are going to make one step further and build a command to deploy the code to the cloud without using the

## AWS CLI ready for service!

Add a new NPM script to your package.json:

```json
{
...
"deploy": "npm prune --production && zip function.zip * -r && aws lambda update-function-code --function-name geoIPNode --zip-file fileb://function.zip --profile personal  && rm function.zip && npm install",
...
}
```

We are cleaning `node_modules` folder to upload only production packages, building the `zip` file, updating the lambda function and re-installing packages deleted in the _prune_ process.

You can safely use `npm run deploy` to update your lambda whenever you want.

This is neither the best way to do this process, because we can and should improve this process much further, but it will not be in this post. I will leave you some ideas to improve memory and time usage for the function:

1. Upload GeoIP database (which is the biggest one) to S3 and load it within the code using AWS SDK for JS.

2. Upload GeoIP database to a EFS (Amazon elastic file system) which can be share through any lambda function.

Both ideas allow you to edit the code in the lambda editor, since the package uploaded will not be bigger than the limit specified.

## API Gateway

We just only need an endpoint to attack the lambda function from the Internet. Visit API Gateway [dashboard](https://eu-west-1.console.aws.amazon.com/apigateway/main/apis?region=eu-west-1) and let's start:
1. Create a new HTTP API ![Screenshot 2021-02-22 at 16.19.55](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd8pz7pphd0qic0pdykz.png)

2. Fill in the form and click "Next" ![Screenshot 2021-02-22 at 16.20.31 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4gxvgc1belualj3ppkuh.png)

3. Choose the _method_ and a name for the resource path. ![Screenshot 2021-02-22 at 16.21.07](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z1uuvs32e0679kiyuytg.png)

4. Default stage by default with auto deploy on changes.  ![Screenshot 2021-02-22 at 16.22.06](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zn8qhse2geb50k77bft8.png)

5. With your API built, you may access the operational URL served by AWS with our parameter string, such as:
![Screenshot 2021-02-22 at 16.25.39](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/edv5w23n04f4x1vqekss.png)
![Screenshot 2021-02-22 at 16.24.20](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qw9jfwh2v2twabpxiod7.png)

## The end

I wanted to give you a broader scope in terms of using a simple AWS service, such as Lambda, to build a solution around something useful. I hope you enjoy the content as much I enjoyed writing it for everyone. Here I [link the repository](https://github.com/avcconti/geoIPNode) used.
