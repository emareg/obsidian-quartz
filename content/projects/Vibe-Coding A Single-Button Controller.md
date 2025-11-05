---
title: Vibe-Coding A Single-Button Controller
type: essay
author: Emanuel Regnath
lang: en
date: 2025-11-02
share: true
category: projects
img: res/sbc-logo.png
---

The other day I tried "vibe coding" for the first time, where you use an LLM AI to quickly generate code in iterations to build a working prototype (demos included below!). In this short article, I will share the insights I got about vibe coding including the prompts I used. Maybe it helps or motivates you to try it for yourself. It was a lot of fun for me and I felt a kind of symbiotic flow state: I learned how much new information I can give the LLM with each prompt and when the balance was right, I really got exited that it "understood" what I wanted and delivered working code almost instantly. 

### The Single Button Controller Idea
It started with a small idea for a "single button controller" that I had when pairing IoT devices, like smart light bulbs and smoke detectors, with home assistant. These devices often have a single button (or light state) and putting them into pairing mode is always a special sequence hidden somewhere in the user manual: Either a long press of 10s, or a triple short tap, or (I am looking at you, Philips Hue!) repeating five times a carefully timed switch-on for 6s followed by a switch-off for 2s. I had to try this several times until I saw the light flashing to confirm the reset and repairing. While this was cumbersome, I also thought this hidden functionality is really smart! So I was wondering: How many control commands could you squeeze out of a single binary signal like a button? The idea of the single button controller was born. I quickly jotted down 5 patterns: short tap, double tap, long press, tap-long press, and extra long press. Hm, does not seem exiting. Then I had the idea: What if each of these patterns can be repeated by a simple short tap in some kind of combo mode? This would be nice and worth trying! But before I go ahead and implement this on a microcontroller, I wanted to test the idea with a small prototype in HTML and JS because the webdev environment just allows super fast iterations and the debugging capabilities are directly integrated in each browser. At this point I decided to use an AI as the first prototype was a perfect task for vibe coding: It is not requiring a huge and complex logic, yet the logic is also not just a bunch of if conditions. So I was ready to put an AI to the test.

### How to Vibe Code
First, I thought of a simple "app" where I could use the single-button for controls and I came up with "Entering an IP address". So the first prompt to Chat GPT-4 on chat.openai.com was the following:

```
Create a single HTML file application. Offer an element where the user can enter an IP address by scrolling through the numbers 0 to 255 using the arrow keys.
```

And oh boy it worked! Here is the output the AI produced on the first attempt: [[ip-spinner-v1.html|ip-spinner-v1.html]]
I want to stress out that this is not polished. I really did not try anything else before, I started a new chat, entered exactly the prompt above, and got this working code. Ok, the AI added also a "Random IP" button I did not ask for but the core functionality was there. Thrilled by this instant success, I tried to get the basic controller logic with the next prompt:

```
Great. Now write a JS function that allows the user to click or tap anywhere in the app to control the number selection in the following way:

* short tap (<400ms): increase octet by one 
* double tap: decrease octet by one 
* long press (>600ms): switch to next octet
```

Note here that I picked up the "octet" terminology the AI has used in its first code output. I think this is important to get a common understanding. And again I got exited that the AI delivered 90% of what I wanted! The only problem was the double tap: It issued also the single tap increase so the number would not change. So some refinements where needed. I put three in one prompt but I would not put more than that:

```
Change the following: 
* Put all time-related numbers in variables, e.g. TAP_TIME_MAX_MS 
* Add an event handler for the keyboard key "b" that behaves the same as clicking * Make sure that on a double tap the number only decreases. Currently both operations (increase and decrease) are applied during a double tap.
```

After that I got the following, working app: [[ip-spinner-v3.html|ip-spinner-v3.html]]

Next, I wanted to add the combo functionality:

```
Ok nice. Now let's add combos of commands. A single command is either a tap, double tap, or long press. A command should be detected if there was a pause with no pressStart or pressEnd for 900ms. A combo should be detected if a tap occurs within 900ms after the last command. Each subsequent tap in a combo should repeat the last command. So for example if the user makes a double tap (command) and taps again within 900ms, the action of the double tap (decrease number) should be repeated.
```

I picked up the "pressStart" and "pressEnd" functions from the AI's code and the AI picked up my example in its summary before outputting the code. This is where the "symbiotic flow state" kicked in that I have mentioned in the introduction. And again it got it 90% right and I just needed to point out the problematic behaviors:

```
Almost right. 
* A new command should be detected if there was 900ms of inactivity *before* the command. The command is finalized as soon as its pattern was pressed. 
* Combo taps should extend the timeout to allow chaining.
```

Note that "finalized" is again a term the AI has put in the code, not me. I always test and actually read & understand the code the AI produces before I write the next prompt. Also I noticed that when I say "Almost right" the AI spends more time on "thinking" before producing the next output. At least after this prompt, it spent 21s talking to itself before it started producing output.  And this extra time paid off: [[ip-spinner-v5.html|ip-spinner-v5.html]]
If you try it: the combo timeout is quite long, so you have to wait some time before a new tap, double tap, or long press is detected.

It also explained what it changed in the code and how it now satisfies my rules. That was truly amazing.  

### Summary
Yeah, that was my first vibe coding experience. It took me about 30 minutes to reach this point, which I think is an insane prototyping speed. It feels like AI enables a 95-5 rule, where you get 95% of the output in 5% of the time. From here on I gave it more prompts to refactor the code and add more features. You can find the final result on GitHub and try out the demo on https://sbc.emareg.de

To summarize my insights:

1. Iterate in small steps. Give the AI short but precise feature descriptions and bug feedback. 
2. Test and read the code! Really spend some time to understand what the AI did to give better feedback.
3. Pick up the AI's terminology. When you read the code you learn how the AI calls certain things.
4. Certain phrases like "almost right" or "this did not work", *might* cause the AI to spend more time on thinking and producing better results. At least it happened to me 3/3 times when I used these phrases.

That's all for now. Happy vibe coding!