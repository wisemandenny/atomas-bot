/* takes an image of the board, and outputs an array representing the current game state in the following format:
const output = {
  currentAtom: {
    name,
    color,
    type
  },
  atoms: [
    {name, color, type},
    {name, color, type},
    {name, color, type},
    {name, color, type},
    {name, color, type},
    {name, color, type}...
  ]
}
*/

const { Image } = require("image-js")
// const { create, all } = require("mathjs")
const { fraction, matrix, multiply } = require("mathjs")
const { ELEMENTS } = require("./elements.js")
const BOARD = {
  MAX_ATOMS: 19,
  SCREEN_SIZE: [1440, 2960],
  OUTER_BORDER_RADIUS: 670.5,
  INNER_BORDER_RADIUS: 435,
  OUTER_RADIUS_PADDING: 42.15,
  ATOM_RADIUS: 87,
  ATOM_DIAMETER: 174,
  POS_CENTER: [720, 1425],
  POS_CENTER_COLOR_OFFSET: [700, 1425]
  // POS_CENTER_COLOR_OFFSET: 35
}

const gameToSSMatrix = matrix([
  [fraction("-10993/39476"), fraction("82653/39476"), fraction("-34087/39476")], //r1
  [fraction("63044/9869"), fraction("-103592/9869"), fraction("49087/9869")], //r2
  [
    fraction("470543/39476"),
    fraction("-860891/39476"),
    fraction("414897/39476")
  ] //r3
]) // sample -> original

async function parse(url) {
  const image = await Image.load(url)
  // might make sense to only screen shot the portion of the screen with the actual board
  // grayscale / normalize the colors in the image so that there is much less variance in the distribution of colors due to jpeg artifacting,
  // make it easier to identify the atoms themselves

  const output = { currentAtom: null, atoms: [] }
  // add the atom to the array as per spec
  output.currentAtom = getCenterAtom(image)
  output.atoms = getPlayedAtoms(image)
  return output
  // somehow, find all the rest of the atoms by looking in a circle?
  // move around in a circle through the path denoted by the outer border - the padding. each time you find a new circle, find its
  // center and add that position [x, y] to that atom's entry in the array

  // when you decide where to play based on which position in the outputted array to add the current atom to,
  // you can use math to find the midpoint between those two circles and tap there.
}

function getPlayedAtoms(image) {}
function getCenterAtom(image) {
  // get center atom color
  // sample 3 points around the logo and then average their rgb values
  const position = getOffsetXY()
  const sampleColor = getCenterColor({ position, image })
  const color = adjustCenterColor(sampleColor)
  const element = findElementByAdjustedColor(color)
  return getAtom(element)
  // const centerColor = await image.getPixelXY(...BOARD.POS_CENTER_COLOR_OFFSET) // the center with x - pos_center_color_offset
  // console.log(centerColor)
}

function getOffsetXY() {
  // some calculation with screenshot coordinates which on first parse are read into global and then stored
  // will calculate the desired sampling location for the center atom
  return [...BOARD.POS_CENTER_COLOR_OFFSET]
}

function getCenterColor({ position, image }) {
  const centerColor = image.getPixelXY(...position)
  return centerColor
}

function adjustCenterColor(color) {
  color.pop()
  // const gameToSSMatrix = math.matrix([
  //   [1.046816, 0.000012, -0.000277],
  //   [-0.014371, -0.10642, 0.015842],
  //   [0.000062, 0.011631, -0.000887]
  // ]) // original -> sample

  const adjustedColor = multiply(gameToSSMatrix, color)
    .valueOf()
    .map((value) => value.n)
  return adjustedColor
}

function findElementByAdjustedColor(color) {
  return findElementByColor(color)
}

function findElementByColor(color) {
  // compare to colors in ELEMENTS
  return ELEMENTS.filter(
    // check this
    (element) => JSON.stringify(element.color) === JSON.stringify(color)
  )[0]
}

function getAtom(element) {
  console.log(element)

  return { ...element, next: null, prev: null }
}

parse(`${__dirname}\\screenshots\\-.jpg`).then((res) => console.log(res))
