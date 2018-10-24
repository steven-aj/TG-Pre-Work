# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

First, the browser will examine local caches for DNS information regarding the domain. If none are found locally,
the ISP will be pinged for DNS records. If the information exists, the browser will establish a TCP connection to the server via the IP address provided within the record.

## From start to finish how does that data reach you to be rendered in the browser?

A user hits https://www.techtonicgroup.com/
The server receives a HTTP request from the user's browser and handles it accordingly. Once it's finished, a response is sent to the browser. Directly from this response, data is often sanitized and interpolated as HTML.

## What code is rendered in the browser?

HTML is rendered in the browser.

## What is the server-side code’s main function?

Server-side code is used to handle requests from a user's browser and respond accordingly.

## What is the client-side code’s main function?

Client-side code handles user input, which often involves making server-side requests to manage or fetch data.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance per browser is created client-side.

## How many instances of the server-side code are available at any given time?

One, since these are static documents that hold dynamic information. The documents themselves do not change.

## What is runtime?

In a browser, runtime is the duration in which one, or a collection of scripts, is accessible by a user.

## How many instances of the databases connected to the server application are created?

One instance per browser is created.
