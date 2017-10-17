# Spotifube

> A `GUI` for the https://github.com/ritiek/spotify-downloader/ project.

## How this works
`spotify-downloader` is a CLI that uses Spotify tracks/playlists to match youtube videos and download them as mp3, including id3, album art, etc.

This project should provide initially (MVP) a simple UI to drag and drop playlist links, fetch the tracks inside of these playlists and provide a way to the user download these songs into a folder.

## Getting Started
Simply clone down this reposity, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# copy template using curl
curl -fsSL https://github.com/electron-userland/electron-webpack-quick-start/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/electron-userland/electron-webpack-quick-start.git
cd electron-webpack-quick-start
rm -rf .git

# install dependencies
yarn
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
