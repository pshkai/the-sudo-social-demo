import assert from 'node:assert/strict';import {readFile,stat} from 'node:fs/promises';
const html=await readFile('index.html','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(new Set(ids).size,ids.length,'IDs must be unique');
for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=match[1];if(url==='#')continue;if(url.startsWith('#'))assert.ok(ids.includes(url.slice(1)),`Missing anchor: ${url}`);else if(!/^(https:|tel:|mailto:)/.test(url))await stat(url);}
assert.match(html,/Demo only — no reservation has been submitted/);assert.match(html,/noindex, nofollow/);assert.match(html,/AI-generated concept imagery/);
assert.ok(!/<input[^>]+type="(?:email|tel|password)"/.test(html),'Planner must not request personal information');
console.log('Checks passed: assets, anchors, unique IDs, demo disclosures, no personal-data inputs.');
