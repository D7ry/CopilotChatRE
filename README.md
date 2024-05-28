## OpenPilot
Github copilot chat has the best prompt engineering and integration with VSC. It however only works with github's proprietary models. I don't trust microsoft but i miss its interface.

Now it works with any model; host a llama yourself or use the an in-house model provided by your company, while enjoying copilot chat's interface.

## Usage
Download the whole thing and replace your copilot chat installation.
Configure the API endpoints and models in vscode's settings under github copilot chat.

## Known Bugs
- `/doc` and `/fix` doesn't work well with some models. Copilot chat needs to fix its parsing logic to avoid an infinite loop.
- You still need to authorize into github copilot (lol); I'll look for a way to get around this very soon
