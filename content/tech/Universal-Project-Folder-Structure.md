---
title: Universal Project Folder Structure
author: Emanuel Regnath
date: 2022-12-13
category: tech
share: true
---

I have many projects. Some are research, some are code, some are physical DIYs, and some are pure documentation. Most projects start small but quickly grow into a mess, if I do not enforce a clean structure on them. What if we could organize most projects with a similar folder structure, such that it is easy for you and for others to navigate the folders and understand where each file belongs?

Here is my proposal for a folder structure that can be applied on almost all your file-based coding projects:

```
project-name/ 
│  
├─ build/         the final generated product  
├─ docs/          description of the product  
├─ lib/           external dependencies maintained elsewhere
├─ make/          toolchain for making the product  
│  ├─ config/  
│  └─ tools/  
├─ res/           static resources like images/audio  
│  ├─ img/  
│  │  └─ dia/  
│  └─ css/  
├─ src/           blueprint of the product**,** e.g. code  
├─ test/          quality assurance of the product  
├─ tmp/           ALL temporary generated files  
│  ├─ objs/  
│  └─ logs/  
├─ xtra/          extra files not belonging elsewhere  
├─ Makefile       Trigger for setup/build/install  
└─ README.md      Information entry point
```


## Features — Why should you use this?

- most important user folders (`build`, `docs`) are sorted to the top. (you could also rename `build` to `app` or `bin`)
- least important folders (`tmp`, `extra`) are sorted to the bottom.
- clear separation of dynamic files (`src`) and static files (`res`, `lib`)
- clear separation of own code (`src`) and foreign code (`lib`)
- one folder for all temporary files with a descriptive name. Everyone will know that files in `tmp` can be deleted any time.
- names reflect categories and not specific formats (e.g. `img` not `jpg`/`png`, `make` not `cmake`/`waf`)
- names start with a different letter which makes keyboard navigation fast (except for `tmp`)
- names are short, which keeps overall path lengths short
- names are common and should be intuitive for most developers