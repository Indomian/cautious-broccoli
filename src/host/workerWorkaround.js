export function createWorker() {
    new Worker(new URL('../worker/main.ts', import.meta.url), {type: 'module'});
}