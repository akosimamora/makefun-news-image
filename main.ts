// make.fun news-image-20261117 entry: copies the bundled entry.png to the
// output directory. Node 22, standard library only, no network.
//
// The image is resolved against this file's own directory (import.meta.url),
// never against the working directory, so the program runs identically in
// the grader's sealed container no matter where it is launched from.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(dir, 'entry.png');
const dst = join(outDir, 'entry.png');

// The grader's output directory may not exist yet: create it first,
// then copy and verify the copy is byte-complete before exiting.
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const { size: srcSize } = statSync(src);
const { size: dstSize } = statSync(dst);
if (dstSize !== srcSize) {
  throw new Error(`entry.png copy incomplete: ${dstSize} of ${srcSize} bytes`);
}
