# Dad Joke Showdown

[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/toirant/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/toirant/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

A [make.fun](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty entry: one dad joke, written to be told out loud at the dinner table.

## The joke

> I told my son the calendar's days are numbered. He said, 'Dad, that's literally how dates work.'

The setup sounds ominous — "days are numbered" — and the punchline lands on the most literal reading of "dates". A father would say it; a son would groan at it.

## How it works

`main.ts` is a self-contained Node 22 program (standard library only). It checks the joke is 1–200 characters, writes it to `/output/entry.txt`, then reads the file back to confirm it matches byte for byte. No network, no randomness, no timestamps — two runs write byte-identical files.

## Run it

```sh
node main.ts
```

It writes `/output/entry.txt` (96 characters).
