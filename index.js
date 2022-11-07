import os from "os"
// console.log(os);
import { versionOS } from "./welcome.js";
const home = os.homedir();
const host = os.hostname();
// export const type = os.type();
const version = os.version();
// console.log(home)
// console.log(host)
// console.log(type)
// console.log(version)

console.log(versionOS)

