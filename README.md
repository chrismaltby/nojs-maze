# NoJS Maze

Twitter: [@maltby](https://www.twitter.com/maltby) 

Proof of concept 3d Maze using no Javascript. (Except to generate maze with an EJS template)

## Why

Initially this was conceived as a game that could be sent as a weekly HTML email to a list of subscribers, turns out to crash a lot of email clients.

Not very useful!

## How

I'm using checkbox hacks (actually radio buttons here) https://css-tricks.com/the-checkbox-hack/ It's a terrible idea and not very accessible but it kind of works.

## Change the maze

Update `data.json` setting the layout of your maze, use `0` to indicate walls, `1` to indicate a walkable path and `2` to indicate the maze exit tile.

```
{
    "map": [
        [1,1,1,0,0],
        [1,0,1,1,0],
        [1,1,1,1,0],
        [0,0,0,1,0],
        [1,1,1,1,0],
        [0,1,0,0,0],
        [0,1,1,1,2]
    ],
    "startX": 0,
    "startY": 0
}
```

Rebuild the `index.html` file by running the following

```
npm install
npm start
```

## Notes

I got my maths wrong and have North facing to the right so the entire map is rotated 90 degrees clockwise from the JSON data.

## While you're here

Why not check out my more useful open source project for making Game Boy games with a drag and drop interface [GB Studio](https://www.gbstudio.dev).

## Credits

Contains textures by Hyptosis https://opengameart.org/content/space-tiles-128x128-sandpng
