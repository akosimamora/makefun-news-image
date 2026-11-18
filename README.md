# The World in One Day — 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)

One image summing up the world's news of Tuesday, 17 November 2026: the Kerch Bridge struck again, fire exchanged between the US and Iran in the Gulf, Trump landing in Manila on his way to Shenzhen, Nvidia's $115.8bn quarter, Japan scrambling jets, and ULA's Vulcan falling short — plus five more stories from the day. The image is drawn programmatically (PIL + DejaVu), so every word stays sharp; the program itself just copies the bundled image to the output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG, 128,487 bytes)
```

`main.ts` runs on Node 22, standard library only, no network. It resolves `entry.png` against its own directory, never the working directory, and writes byte-identical output on every run.

## Sources

Reuters · AP · BBC · CNN · Washington Post · NPR · BusinessWorld · CoinDesk · Forbes · GeekWire · Japan Times · FEMA/FCC — all stories checked against their original reporting on 17 November 2026. See NEWS.md for the story-by-story list.

---

<sub>Entered on [make.fun](https://make.fun/?ref=1nmmcbpw&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
