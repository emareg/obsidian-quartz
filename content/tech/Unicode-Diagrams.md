---
type: essay
title: Unicode Diagram Drawing
author: Emanuel Regnath
lang: en
date: 2022-09-30
keywords:
  - utf8
  - emoji
  - box
  - drawing
  - ascii
share: true
category: tech
---



You all have heard about ASCII art and have seen ASCII diagrams. But now UTF8 is default in most applications, and thus enables the creation of beautiful diagrams, like this one:

```dia
  ┌─────────────────────┐
A ┤╺━━━━━━━━━━━━        │ 62.5%   
B ┤╺━━━━━━━━━━━━━━━━╸   │ 85.0%
C ┤╺━━━━━━━━━╸          │ 50.0%
  └┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴┘
   ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ¹⁰
```
  
Or to show directories and boxes:
```dia

some-dorectory/
├── Dir_A
│   └── File_C
├── File_A
└── File_B
╭────────╮ ┌────────┐
│ TestA  │ │ Test B │
╰────────╯ └────────┘
```

  
## Why character diagrams instead of images?

They are small, portable and text inlined diagrams that look decent even in a text editor. They are a good choice for Markdown-based systems and can also be pasted into many chat applications that have monospace font.

  
### Further ideas

UFT-8 diagrams do not need to be pure text. We embed them into HTML and so we can use CSS and JS to enable additional features.

* Select fonts for different character ranges
* Use JS to reduce/increase font size until it fits into screen width
* Use JS to export to ASCII. E.g. replace all box drawing chars by closest ASCII char (`┌─┐` → `+-+`)
* Use CSS to offer tooltips.
* Use links inside the diagrams.


## Unicode Box Drawing

### Box Drawing
```dia
┌───────┐ ╭───────╮  ┏━━━━━━━┓  ╔═══════╗
│ Box A │ │ Box B │  ┃ Box C ┃  ║ Box D ║
└───────┘ ╰───────╯  ┗━━━━━━━┛  ╚═══════╝
┌┬──────┐ ┌┬──────┐  ┏┳━━━━━━┓  ╔╦══════╗
├┼──────┤ ├┼──────┤  ┣╋━━━━━━┫  ╠╬══════╣
││Box A │ ││Box A │  ┃┃Box C ┃  ║║Box D ║
└┴──────┘ └┴──────┘  ┗┻━━━━━━┛  ╚╩══════╝
```

### Lines, Symbols, Shades
```
Thin:   ─ │ ╌ ╎ ┄ ┆ ┈ ┊     ╱ ╲ ╳
Thick:  ━ ┃ ╍ ╏ ┅ ┇ ┉ ┋

Arrow+Line: ─►  ◄─ 
Arrows: ← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↵ ↶ ↷ ↸ ↹ ↺ ↻ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇍ ⇎ ⇏ ⇐ ⇑ ⇒ ⇓

Boxes:     ▢▣▤▥▦▧▨▩ ◧◨◩◪◫  ⚀⚁⚂⚃⚄⚅
Circles:   ◍◎●○◐◑◒◓◔◕⬤
Triagnles: ▲△▶▷▼▽◀◁   ▴▵▸▹▾▿◂◃  ♳♴♵♶♷♸♹♺
Rombs:     ◆◇◈

Shades: ░ ▒ ▓
Blocks: █ ▌   ▁▂▃▄▅▆▇█  █ ▉ ▊ ▋ ▌ ▍ ▎ ▏   ⣀⣠⣤⣴⣶⣾⣿⣷⣦⣤⣄   ⣼⣧  ⣰⣸⣇⣆

Misc: 𒐆 𒐪


; 𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 ℎ 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧  
; 𝒶 𝒷 𝒸 𝒹 𝑒 𝒻 𝑔 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 𝑜 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏
Serif: 𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳
Serif: 𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙
Sans:  𝗔 𝗕 𝗖 𝗗 𝗘 𝗙 𝗚 𝗛 𝗜 𝗝 𝗞 𝗟 𝗠 𝗡 𝗢 𝗣 𝗤 𝗥 𝗦 𝗧 𝗨 𝗩 𝗪 𝗫 𝗬 𝗭
Sans:  𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆
Nums: ⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ ㉑ ㉒ ㉓ ㉔ ㉕ ㉖ ㉗ ㉘ ㉙ ㉚ ㉛ ㉜ ㉝ ㉞ ㉟ ㊱ ㊲ ㊳ ㊴ ㊵ ㊶ ㊷ ㊸ ㊹ ㊺ ㊻ ㊼ ㊽ ㊾ ㊿


▤ ▤ ▢ + ◔◕◱ = ◩▤▣
◪ ▤ ◔ +  ▣◕ =

```
3-Stage Progress: ○◒⬤
5-Stage Progress: ○◔◑◕◕⬤
7-Iterations

https://en.wikibooks.org/wiki/Unicode/List_of_useful_symbols
https://yaytext.com/bold-italic/

▤▤▢ + ◔◕◱ = ◩▤▣
◪▤◔ +    ▣◕ = ◔◪◔
◥◩▣ + ◪▢◱ = ▤▢◔

◕◥▢◪◔▤◱_▣◩
◩◪◥▤▢◱◒◔◕▣  ▟▙▗


 ¡puɐʇsɟdoʞ uǝu ןɐɯ ɥɔɐɯ 'ᴉɥ
 ¡puɐʇsɟdoʞ uǝu ןɐɯ ɥɔɐɯ 'ʎǝɥ
 ¿ɯnɹ ɥɔsןɐɟ sǝןןɐ ɹǝᴉɥ sᴉ ɯnɹɐʍ ןɐɯ ɓɐs
 ¿ɯnɹ ɥɔsןɐɟ ɹǝp sᴉ ɯnɹɐʍ

 z ʎ x ʍ ʌ n ʇʇʇ s ɹ b d o u ɯ ן ʞ ɾ ıᴉ ɥ ɓ ɟ ǝ p ɔ q ɐ


😀😄😊😉🧬🛡🔍🔎✒⌛
## 🙂 Useful Emoji Set
Unicode Emojis can be used to make concepts more visually appealing.

### Meta-Data
* 👤 Author
* 👥 Authors
* 📆 Date
* 🏛 Institution
* 📧 E-Mail · 📞 Phone

### Document Structure
* ⚡ Abstract
* 🎯 Goal / Direction
* 💡 Idea
* 🧩 Challenges
* ⚓🧱  State of the Art
* 📈 📊 Evaluation
* ⚖️ License, Terms & Conditions
* 🙏 Acknowledgment
* 📚 References

### Coding
* 📦 Packets (Software)
* 💌 Features / Supporters
* 📜 Instructions | 📖 Documentation
* 🛠 Tools
* ⚙ Settings
* ✏ Edit

### Status
* 🏆 Achievement
* 🎓 Academic
* 💰 Funding
* ⚠🚧 Warnung | 📣🔔 Announcements
* 🧪 Experimental | 🗑 Deprecated
* 🔥 Hot/new
* 📡 Status: ❌🆘🟧🟨🟩❇✳✅
* Ranking: 🥇🥈🥉
* Priority: 
* Likelihood: ⚀⚁⚂⚃⚄⚅


Arrow Types: Timeflow ↣  Send ⇝  Implication → Evolution⇾ Move ⇥ Dimension ⇸

Further: 🌐♻👁‍🗨🗃👉🤝 ⬜🔳✅


🥇🥈🥉
☹😐🙂😀🤩

# 📚 References

* https://www.ietf.org/rfc/rfc2360.txt
* https://en.wikipedia.org/wiki/Geometric_Shapes_(Unicode_block)


## Examples

### Class diagrams
```dia

┌─────────────────┐
│     Manager     |
├─────────────────┤
│ +name: str      │
├─────────────────┤ 
│ +run()          │
│ +leave()        │
└─────────────────┘

```

### Directory Trees
```
project/
 ├─ build/
 ├─ docs/
 │  ├─ build/
 │  └─ src/
 ├─ make/
 ├─ res/
 │  ├─ img/
 │  │  ├─ dias/
 │  │  └─ logo/
 │  └─ css/
 ├─ src/
 └─ tmp/
    ├─ logs/
    └─ objs/
```


### QR Code
```dia
█████████████████████████
██ ▄▄▄▄▄ █▀▀█▀▀█ ▄▄▄▄▄ ██      █▀▀▀▀▀█ ▄▄ ▄▄ █▀▀▀▀▀█
██ █   █ █▀▀▀▀██ █   █ ██      █ ███ █ ▄▄▄▄  █ ███ █
██ █▄▄▄█ █▀███▀█ █▄▄▄█ ██      █ ▀▀▀ █ ▄   ▄ █ ▀▀▀ █
██▄▄▄▄▄▄▄█▄▀▄▀▄█▄▄▄▄▄▄▄██      ▀▀▀▀▀▀▀ ▀▄▀▄▀ ▀▀▀▀▀▀▀
██ ▄▄ ▄█▄▄  ▀▄▄ ▀ ▀ ▀ ▀██      █▀▀█▀ ▀▀██▄▀▀█▄█▄█▄█▄
███▀▀   ▄█▀ █   ▄▄▀▀ ▄███       ▄▄███▀ ▄█ ███▀▀▄▄█▀ 
██▄█▄█▄█▄▄▀▄▀▄▄▀▄▀  ▀█ ██      ▀ ▀ ▀ ▀▀▄▀▄▀▀▄▀▄██▄ █
██ ▄▄▄▄▄ █▄▀█▄▄ █ ▀▀  ███      █▀▀▀▀▀█ ▀▄ ▀▀█ █▄▄██ 
██ █   █ █ █ ▀▄▀ ▄ ▄▀▀███      █ ███ █ █ █▄▀▄█▀█▀▄▄ 
██ █▄▄▄█ █ ▄▄   █▄▀▀ ████      █ ▀▀▀ █ █▀▀███ ▀▄▄█  
██▄▄▄▄▄▄▄█▄█▄█▄█▄▄█▄█▄███      ▀▀▀▀▀▀▀ ▀ ▀ ▀ ▀▀ ▀ ▀ 
█████████████████████████


Braile does not work:
⡏⡭⠭⡍⣟⢫⠛⡏⡭⠭⡍⡇
⡇⠧⠤⠇⡗⡊⡒⡇⠧⠤⠇⡇
⡯⢭⣭⡯⢉⡑⠡⢹⣙⡙⢙⡇
⡷⠽⠭⠬⡅⣨⡽⣪⢃⡐⢏⡇
⡇⡏⠉⡇⡏⣤⠡⢪⢃⡔⣻⡇
⠧⠭⠭⠥⠧⠼⠽⠮⠤⠵⠽⠇
```
https://superuser.com/questions/1420001/is-it-possible-to-create-a-qr-code-using-text





### Packet Diagrams

ASCII
```dia
    0                   1                   2                   3
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |Version| Prio. |                   Flow Label                  |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

  
UTF-8
```dia
₀0 1 2 3 4 5 6 7 8 9₁0 1 2 3 4 5 6 7 8 9₂0 1 2 3 4 5 6 7 8 9₃0 1  
┌─┬─┬─┬─┬─┬─┬─┬─┼─┬─┬─┬─┬─┬─┬─┬─┼─┬─┬─┬─┬─┬─┬─┬─┼─┬─┬─┬─┬─┬─┬─┬─┐
│Version┆ Prio. ┆                  Flow Label                   │
└─┴─┴─┴─┴─┴─┴─┴─┼─┴─┴─┴─┴─┴─┴─┴─┼─┴─┴─┴─┴─┴─┴─┴─┼─┴─┴─┴─┴─┴─┴─┴─┘

  0   1   2   3   4   5   6   7  
┌───┬───┬───┬───┬───┬───┬───┬───┐
│flp│ kg│ m1| m0|-s1|-s0|AK1|AK0|
└───┴───┴───┴───┴───┴───┴───┴───┘
```

  

### Plots
```
                                           ⢀⣀⠤⠤⠤⠤⢄⣀⡀            
                                        ⡠⠔⠊⠁       ⠈⠑⠢⣀         
                                     ⣀⠔⠉               ⠑⠢⡀      
                                   ⡠⠊                    ⠈⠢⣀    
                                 ⡠⠊                         ⠑⢄  
⢀                              ⡠⠊                             ⠑⢄
 ⠑⢄                          ⡠⠊                                 
   ⠑⢄                     ⢀⡠⠊                                   
     ⠉⠢⡀                ⢀⠔⠁                                     
       ⠈⠑⠤⣀          ⣀⠤⠊⠁                                       
           ⠉⠒⠢⠤⠤⠤⠤⠒⠒⠉    


 ⣤
⣀⣠⣴⣿⣿⣿⣿⣶⣾⣿⣷⣦⣤                                       
```

```
  ┌────────────────────────────────┐
  ┤              ▄▄▄               │  
  ┤             █████              │
  ┤           ▄███████▄            │ 
0 ┤______▄▄▄█████████████▄▄▄_______│ 
  └┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬─┘
  ⁻⁵ ⁻⁴ ⁻³ ⁻² ⁻¹  ⁰  ¹  ²  ³  ⁴  ⁵

  ┌────────────────────────────────┐
  ┤               ┊                │  
  ┤               ┊ ╱              │
  ┤               ┊╱               │ 
0 ┤┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈│ 
  └┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬─┘

▁▂▃▄▅▆▇█
```



```dia
  ┌
A ┤▄▄▄▄▄▄▄  ▬▬▬▬▬
B ┤▄▄▄▄▄▄▄  ▬▬▬▬▬
  └

  
A ┤━━━━━━━━━━━━ 62.5%
B ┤━━━━━━━━━━━━━━━━ 85.0%
  

  ┌
A ┤█████████████      70%
  │
B ┤█████████████████▌ 85%
  └


  ┌─────────────────────┐
A ┤╺━━━━━━━━━━━━        │ 62.5%   
B ┤╺━━━━━━━━━━━━━━━━╸   │ 85.0%
C ┤╺━━━━━━━━━╸          │ 50.0%
  └┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴┘
   ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ¹⁰

  ┌───────────────────────────────┐
A ┤  ┝━━███━━┥                    │ 62.5%   
B ┤        ┝━━██▊██━━━┥           │ 85.0%
C ┤              ├┄┄╊━━█━━╉┄┄┤    │ 50.0%
D ┤    ├───█─┤                    │ 27.3%
  └┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴┘
   ⁰  ¹⁰ ²⁰ ³⁰ ⁴⁰ ⁵⁰ ⁶⁰ ⁷⁰ ⁸⁰ ⁹⁰ ¹⁰⁰

 ├┄┄╊━━█━━╉┄┄┤
 
 ├┈┈┈┈┈╊━━━╋━╉┈┈┈┈┤

├┈┈┈┈┈╊━━━┿━╉┈┈┈┈┤
 
 ├┈┈┈┈┾━╋━┽┈┈┈┈┤


┌┬┬┬┬┬╂┬┬┬┬┬┬┬┬┬┬┬┬┬┐
0    ⁵    1    ⁵    2

       ┌────┰──┐
 A └┈┈┈┴────┸──┴┈┈┈┘


╫╧╧ ╪


├┈┺━╏━┹┈┈┤

├───╂─┤

1 ┌
½ ├ ▄  
¼ ├ █  █  
0 └─┬──┬─
    A  B
   
▁▂▃▄▅▆▇█

▄ ▖ ▀ ━ ╸


 ╱
╱

  ┌────────────┐
5 ┤            │    
3 ┤   ╻ ╻ ┃    │ 
1 ┤ ╻┃┃┃┃┃┃╻   │ 
  └────────────┘
    ABCDEFGH

    ╻╻
  ╻┃┃┃┃╻ 
─┸┸┸┸┸┸┸┸┰┰┰┰┰┰┰┰  
          ╹┃┃┃┃╹
            ╹╹
```


https://github.com/JuliaPlots/UnicodePlots.jl



### FloorPlan


```
╔════════╦═══╦═════╗
║        ║   ║     ║  
│   WZ   ║         │
│        ║   ╠═════╣
║        ║         /
╠════   ═╬         ║
║        /         ║
║        ╠_  ══════╣
│   EZ   ║         ║
│        ║  Küche  │
║        ║         ║
╚════════╩═════════╝
```


### Layer Charts

```dia
┌────────┐                    
│weblayer│                    
└┬─┬─┬───┘                    
 │ │┌▽────────────────────────┐
 │ ││chrome                   │
 │ │└┬─────┬─────────────────┬┘
 │┌▽─▽────┐│                 │
 ││content││                 │
 │└┬─┬─┬──┘│                 │
 │ │ │┌▽───▽──────────────┐  │
 │ │ ││blink              │  │
 │ │ │└┬──┬───┬─┬───┬───┬─┘  │
 │ │┌▽─▽┐┌▽──┐│┌▽─┐┌▽─┐┌▽───┐│
 │ ││net││WTF│││v8││CC││skia││
 │ │└┬──┘└┬──┘│└──┘└──┘└────┘│
┌▽─▽─▽────▽───▽──────────────▽┐
│base                         │
└─────────────────────────────┘

  

```

```
 ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮                         ╭┈┈┈┈┈┈┈┈┈┈┈╮
 ┊ mount passphrase ┊━━━━━⎛key derivation⎞━━━▶┊ mount key ┊
 ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ,───⎝   function   ⎠    ╰┈┈┈┈┈┬┈┈┈┈┈╯
 ╭──────╮            ╱                              │
 │ salt │───────────´                               │
 ╰──────╯                                           │
 ╭─────────────────────╮                            ▼         ╭┈┈┈┈┈┈┈┈┈┈┈┈╮
 │ encrypted master key│━━━━━━━━━━━━━━━━━━━━━━(decryption)━━━▶┊ master key ┊
 ╰─────────────────────╯                                      ╰┈┈┈┈┈┈┈┈┈┈┈┈╯
```


### PinOut Diagrams

```dia
                               +-----+
  +----[PWR]-------------------| USB |--+
  |                            +-----+  |
  |         GND/RST2  [ ][ ]            |
  |       MOSI2/SCK2  [ ][ ]  A5/SCL[ ] |   C5
  |          5V/MISO2 [ ][ ]  A4/SDA[ ] |   C4
  |                             AREF[ ] |
  |                              GND[ ] |
  | [ ]N/C                    SCK/13[ ] |   B5
  | [ ]IOREF                 MISO/12[ ] |   .
  | [ ]RST                   MOSI/11[ ]~|   .
  | [ ]3V3    +---+               10[ ]~|   .
  | [ ]5v    -| A |-               9[ ]~|   .
  | [ ]GND   -| R |-               8[ ] |   B0
  | [ ]GND   -| D |-                    |
  | [ ]Vin   -| U |-               7[ ] |   D7
  |          -| I |-               6[ ]~|   .
  | [ ]A0    -| N |-               5[ ]~|   .
  | [ ]A1    -| O |-               4[ ] |   .
  | [ ]A2     +---+           INT1/3[ ]~|   .
  | [ ]A3                     INT0/2[ ] |   .
  | [ ]A4/SDA  RST SCK MISO     TX>1[ ] |   .
  | [ ]A5/SCL  [ ] [ ] [ ]      RX<0[ ] |   D0
  |            [ ] [ ] [ ]              |
  |  UNO_R3    GND MOSI 5V  ____________/
  \_______________________/
```


### PCB Schematics


```dia
Resistors:  ─VVVV─    ──███──  ──▭──  ──▬──  
Diodes:     ──▷├──   ──┨◁──
Capacitor:  ──┨┠──   ──┨┠──
Gap:        ──▷ ◁──
Src/GND:

 △
 │     |     |
 │     █ R2  ║
 │     |  
━┷━
```


```dia
VDD   ─────────────┬─────────┬─────┬─────────────────┬─────┬─────────┐
                   │         │     │                 │     │         │    
                   │         │     │                 │     │         │    
               ║───┘     ║───┘     └───║         ║───┘     └───║     └───║        
    vclk o────o║────────o║             ║o──   ──o║             ║o────────║o────o   
               ║───┐     ║───┐     ┌───║   ╲ ╱   ║───┐     ┌───║     ┌───║    
                   │         │     │        ╳        │     │         │    
                   │         └─────┼──────── ────────┼─────┘         │             
                   │               │        ╳        │               │    
                   │               └───║   ╱ ╲   ║───┘               │    
                   │                   ║───   ───║                   │          
                   │               ┌───║         ║───┐               │    
                   │               │                 │               │    
                   └───────────────┤                 ├───────────────┘        
                                   │                 │    
                               ║───┘                 └───║                
                    vinp o─────║                         ║o────o vinn        
                               ║───┐                 ┌───║                
                                   └────────┬────────┘    
                                            │    
                                            │    
                                        ║───┘    
                              vclk o────║        
                                        ║───┐    
                                            │    
                                            │    
  VSS ─────────────────────────────────────────────────────────────────

  

                         ___+5V
                          |
                         _|_
                        _\_/_  LED
         ____             |
TTL ____|6k8 |__________|/
        |____|    |     |\e
                 _|_     _|_
                |4k7|   |270|
                |_ _|   |_ _|
                  |       |
                 _|_______|_GND

```

  
  

### Secuence Diagrams

```dia
┌───────┐  ┌───────┐ ┌───────┐
│Actor 1│  │Actor 2│ │Actor 3│
└───┬───┘  └───┬───┘ └───┬───┘
    │          │         │    
    │message 2 │         │    
    │─────────>│         │    
    │          │         │    
    │          │message 1│    
    │          │────────>│    
┌───┴───┐  ┌───┴───┐ ┌───┴───┐
│Actor 1│  │Actor 2│ │Actor 3│
└───────┘  └───────┘ └───────┘
```
https://plantuml.com/de/ascii-art
  
### Chemical Formulas

ASCII:

```dia
R                         R         O
 \                         \        ║
  N = C = O  +  O   ––→     N - C - O - R²
               H R²         H
```

### Oscilloscope Signals

ASCII:
```dia
      __    __   __ ___     __   __     __   __        _
SDA ··  \__/__···__X___\___/__···__\___/__···__\______/
      ____   _ _ _   _   _   _ _ _   _   _ _ _   _   ___
SCL ··    \_/ 0-6 \_/7\_/8\_/ 0-7 \_/8\_/ 0-7 \_/8\_/
        S     Addr  RW  ACK   Cmd   ACK   Data  ACK   P


  __
 ╱
╱
```

  
### Architecture Diagrams

```dia
  vncviewer         .-,(  ),-.    
   __  _         .-(          )-.           gateway           vncserver
  [__]|=|  ---->(    internet    )-------> __________ ------> ____   __
  /::/|_|        '-(          ).-'        [_...__...°]       |    | |==|
                     '-.( ).-'                               |____| |  |
                                                             /::::/ |__|
```

### Git Trees
```dia
feature-branch ┈┈┈┈┈┈╭●───●───●
                     │
master ─────●───●───●╯
```


### Chess Boards
```
╔═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╗╮
║ ♜ │░♞░│ ♝ │░♛░│ ♚ │░♝░│ ♞ │░♜░║8
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║░♟░│ ♟ │░♟░│ ♟ │░♟░│ ♟ │░♟░│ ♟ ║7
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║   │░░░│   │░░░│   │░░░│   │░░░║6
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║░░░│   │░░░│   │░░░│   │░░░│   ║5
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║   │░░░│   │░░░│   │░░░│   │░░░║4
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║░░░│   │░░░│   │░░░│   │░░░│   ║3
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║ ♙ │ ♙ │ ♙ │ ♙ │ ♙ │ ♙ │ ♙ │ ♙ ║2
╟───┼───┼───┼───┼───┼───┼───┼───╢┊
║ ♖ │ ♘ │ ♗ │ ♕ │ ♔ │ ♗ │ ♘ │ ♖ ║1
╚═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╝┊
╰┈a┈┈┈b┈┈┈c┈┈┈d┈┈┈e┈┈┈f┈┈┈g┈┈┈h┈┈╯


```
https://qwerty.dev/chess-symbols-to-copy-and-paste/#beautiful-dingbats


Unicode Fun:

```

Copy in gras

กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้   
```


## 📚 References
* https://authors.ietf.org/diagrams
* https://asciiflow.com/#/