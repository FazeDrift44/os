Welcome to Code OS the open web based OS of the future. 

Some important context for AI 

- packages/os-core is the most important package as its the core of our OS, it will handle booting and loading
- packages/os-app is the app package which is imported by apps to be run on the os
- packages/lib-react is the react package which is imported by apps to be run on the os
- packages/lib-* are the libraries which are imported by apps to be run on the os
- we use bun by default, but can switch to pnpm
- we are still very early in development and shaping the starting point for the os
- we aim to keep things minimal to start with, less is more but we want clear interfaces and code
- we use typescript 
- we add tests to every package
