// import { type } from "./index.js"
import os from "os"


function versionOS() {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
console.log(versionOS())

export { versionOS };
