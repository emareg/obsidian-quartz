---
title: File-based Version Control
author: Emanuel Regnath
date: 2024-04-20
lang: en
share: true
category: tech
---
👨‍🔬 E. Regnath · 📆 2024-04 · 🧪 v1.0

Do you have files and folder names including terms like `final`, `final2`, `old`, or `v2`? Then file-based version control might be for you.
Version control systems have been proven to be highly effective in handling the chaos of ever changing text files and open-source development would not be possible without it. However, not everyone is a software developer, has only text files, or wants to use extra tools (like `git`). 
Luckily, we can implement a simple version control for everyone and everything just by adding a ≤4 letter version tag to a filename based on 4 simple rules.
### 4 Rules to tame them all

1. A file without a version tag is the latest working version (think “staging” in git)
2. To “commit” a version for yourself, save a copy of the working version and add a version tag **with leading zero** (e.g. `-v01`) to the file name.  Version tags start with `-v01` and strictly increase. After `-v09` continue with `-v010`. Version tags must be unique – if two file have the same tag, they must be identical. 
3. **Never ever edit a file with a version tag!** Either continue editing the latest working version, replace it with a copy of any committed version and remove the version tag (“roll-back”), or “branch” by creating a second working version with a working tag instead of a version tag, which could be `-w03` if you edit `-v03`.   
4. To “release” a version that will be shared with a larger group, add a release tag of the form `-v1.0` without leading zeros and with a dot. Any version can become a release, e.g. turning `v07` into `v1.2` is fine.

That's it. Most of these rules should be intuitive and easy to follow. The only crucial rule you need to remember and strictly enforce is rule 3, so let's repeat it: 

> [!warning] “Never ever edit a file with a version tag!”
> If you want to edit a version, close the file (if open), make a copy, remove the tag and only then open it for editing. Follow this process strictly as editing an open version file with the intent to “save as” later is error-prone – forget it once, or hit `Ctrl + S` by accident and the system breaks.

### Rationales behind the rules
* Rule 1 makes sure that you do not need to rename any files in order to start with the system. Any regular file without a version tag is by definition already in its latest working version. You can either keep it untouched or edit it – full flexibility.
* Rule 2 defines the main ideas of the scheme: We add a special tag to any version we want to identify throughout time. This is enables us to keep track of progress, inspect previous versions, roll-back to a version, or agree on versions with others (e.g. “did I sent you v03 or v04?”). Starting with a leading zero ensures that we can distinguish versions for internal tracking from releases that are shared with a larger group. 
* Rule 3 makes sure that the scheme is robust, meaning that version tags are unique. The whole point of versions is to uniquely identify a certain state so there must not be different files with the same tag. And “must not” means never – otherwise the trust in the system is broken. To ensure that you should never open a version file
* Rule 4 makes sure that the scheme is compatible with exiting conventions of software releases and thus intuitively understood by many people. At the same time release tags without leading zero and dot are clearly distinctive from internal version tags. More technically, the two tag forms have a Levenshtein distance of ≥2, which allows us to detect simple mistakes. For example, `-v010` and `-v1.0` are both valid forms but `-v10` (e.g. accidently produced by typo) would be invalid and requires clarification and correction. 

### Additional Ideas
* In a collaborative environment, you could also add the name of the editor behind the version tag. Just make sure that the version tag increases not matter what. For example, if Alice and Bob take turns in editing a file we would see `-v03-bob`, `-v04-alice`, `-v05-bob`.
* Store all files with version tags in a `versions` subfolder.
* You may jump to `-v010` to indicate versions after a release `v1.0`


## 📚 References
* [Wikipedia: Software Versioning](https://en.wikipedia.org/wiki/Software_versioning)