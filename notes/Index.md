---
title: "Foo"
---


```js run
import fs from "fs-extra";
import {pageResolver} from "./main.js";

const files = await fs.readdir("notes");
const slugs = files.filter(f => f.endsWith('.md')).map(f => f.slice(0, -3))
const listBody = slugs.map(s => `- [${s}](${pageResolver(s)})`).join("\n");
export const markdown = `${listBody}`;
```

