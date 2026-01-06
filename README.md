# Danone Tools
A wrapper for DR1 modding tools such as the [LIN compiler made by Morgana](https://github.com/morgana-x/danganronpa-lin-compiler-v2).

# Installation
You can get either get it from the Releases page or build it yourself. For building it yourself, check the Building section on the end.

# Usage
To start using the program you'll first need to have the [LIN compiler made by Morgana](https://github.com/morgana-x/danganronpa-lin-compiler-v2) on your system's PATH as the program expects to be able to find it.

After that, you can run `./danone-tools.exe --register` in order to register the Context Menu. And if some day you wish to remove the program you can do so with `./danone-tools.exe --unregister`.

You should not need to make use of the rest of the commands as those are expected to be used by danone-tools itself.

# Building
You'll need [Bun](https://bun.sh/) to be able to compile it.

```bash
bun install # Install dependencies
```
```bash
bun run build # Builds the project
```
You'll be left with a `danone-tools.exe` insdie the `out` folder.