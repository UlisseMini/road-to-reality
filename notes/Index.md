---
title: "Road to Reality"
description: "Solutions and notes on Roger Penrose's \"The Road to Reality\""
---

Solutions and notes on Roger Penrose's The Road to Reality!


```js run
import fs from "fs-extra";
import {pageResolver} from "./main.js";

const files = await fs.readdir("notes");
let slugs = files.filter(f => f.endsWith('.md'))
slugs = slugs.map(f => f.slice(0, -3))
slugs = slugs.filter(f => f != 'Index')
const listBody = slugs.map(s => `- [${s}](${pageResolver(s)})`).join("\n");
export const markdown = `${listBody}`;
```

