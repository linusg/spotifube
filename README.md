# Spotifube

A `GUI` for [@ritiek](https://github.com/ritiek)'s [`spotify-downloader`](https://github.com/ritiek/spotify-downloader/) project.

## Purpose

Spotifube will initially provide (MVP) a simple GUI for [`spotify-downloader`](https://github.com/ritiek/spotify-downloader/) that allows users to drag and drop playlist links, to fetch the tracks inside of these playlists and to download these songs into a folder.

### What is spotify-downloader

[`spotify-downloader`](https://github.com/ritiek/spotify-downloader/) is a command-line tool that matches Spotify tracks/playlists to youtube videos and downloads them as mp3/m4a, with id3, album art, etc.

## Contributing

Simply clone/download this reposity, install dependencies, and get started.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# download app using git clone
git clone https://github.com/djalmaaraujo/spotifube.git
cd spotifube
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
