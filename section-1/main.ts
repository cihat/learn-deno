import { sayHello } from "./util.ts";
sayHello("World");
import * as util from "./util.ts";
util.sayHello("World");
import * as uuidV5 from "https://deno.land/std@0.154.0/uuid/v5.ts";
console.log(await uuidV5.validate('886313e1-3b8a-5372-9b90-0c9aee199e5d'));


export function add(a: number, b: number): number {
	return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
	console.log('Add 2 + 3 =', add(2, 3));
} 

