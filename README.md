# Spotifube

> A `GUI` for the https://github.com/ritiek/spotify-downloader/ project.

## How this works
`spotify-downloader` is a CLI that uses Spotify tracks/playlists to match youtube videos and download them as mp3, including id3, album art, etc.

This project should provide initially (MVP) a simple UI to drag and drop playlist links, fetch the tracks inside of these playlists and provide a way to the user download these songs into a folder.

## Note

Currently not much is done. This project is maintained by a spotify-downloader collaborator – it aims at providing a complete wrapper of the CLI tool!

I'm kinda busy but work will continue within the next weeks. Unless you know Electron, don't try using this. It's nothing but a mess :)

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
