const fs = require("node:fs");
const path = require("node:path");

const workerPath = path.join(process.cwd(), "node_modules", "next", "dist", "lib", "worker.js");

if (!fs.existsSync(workerPath)) {
  process.exit(0);
}

const source = fs.readFileSync(workerPath, "utf8");
const target = "let { enableSourceMaps, timeout, onRestart, logger = console, debuggerPortOffset, isolatedMemory, ...farmOptions } = options;";
const replacement =
  "let { enableSourceMaps, timeout, onRestart, logger = console, debuggerPortOffset, isolatedMemory, onActivity: _nextOnActivity, onActivityAbort: _nextOnActivityAbort, ...farmOptions } = options;";
const sanitizeTarget = "for (const method of farmOptions.exposedMethods){";
const oldSanitize =
  "const sanitizeForWorkerThreads=(value,seen=new WeakSet())=>{if(typeof value==='function')return undefined;if(!value||typeof value!=='object')return value;if(seen.has(value))return undefined;seen.add(value);if(Array.isArray(value))return value.map((item)=>sanitizeForWorkerThreads(item,seen));const output={};for(const key of Object.keys(value)){const next=sanitizeForWorkerThreads(value[key],seen);if(next!==undefined)output[key]=next;}return output;};";
const sanitizeFunction =
  "const sanitizeForWorkerThreads=(value,seen=new WeakMap())=>{if(typeof value==='function')return undefined;if(!value||typeof value!=='object')return value;if(seen.has(value))return seen.get(value);const output=Array.isArray(value)?[]:{};seen.set(value,output);if(Array.isArray(value)){for(const item of value)output.push(sanitizeForWorkerThreads(item,seen));return output;}for(const key of Object.keys(value)){const next=sanitizeForWorkerThreads(value[key],seen);if(next!==undefined)output[key]=next;}return output;};";
const sanitizeReplacement =
  `${sanitizeFunction}for (const method of farmOptions.exposedMethods){`;
const bindTarget = ": this._worker[method].bind(this._worker);";
const bindReplacement =
  ": farmOptions.enableWorkerThreads ? async (...args)=>this._worker[method](...sanitizeForWorkerThreads(args)) : this._worker[method].bind(this._worker);";

let nextSource = source;

if (nextSource.includes(target)) {
  nextSource = nextSource.replace(target, replacement);
}

if (nextSource.includes(oldSanitize)) {
  nextSource = nextSource.replace(oldSanitize, sanitizeFunction);
}

if (!nextSource.includes("sanitizeForWorkerThreads") && nextSource.includes(sanitizeTarget)) {
  nextSource = nextSource.replace(sanitizeTarget, sanitizeReplacement);
}

if (nextSource.includes(bindTarget)) {
  nextSource = nextSource.replace(bindTarget, bindReplacement);
}

if (nextSource !== source) {
  fs.writeFileSync(workerPath, nextSource);
}
