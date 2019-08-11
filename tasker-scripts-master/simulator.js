const { ELEMENTS } = require("./elements.js")
const DoublyCircular = require("doublycircular")
let atomId = 0

function getRandomAtom(index) {
  return { ...ELEMENTS[index], id: atomId++ }
}

function generateRandomStartingAtom() {
  return getRandomAtom(getRandomIndex())
}

function getRandomIndex() {
  return parseInt(Math.random() * 3 + 4) // 4-7
}

// generates an array of 6 atoms between h-li
function generateInitialBoard() {
  return [
    generateRandomStartingAtom(),
    generateRandomStartingAtom(),
    generateRandomStartingAtom(),
    generateRandomStartingAtom(),
    generateRandomStartingAtom(),
    generateRandomStartingAtom()
  ]
}

// generates a board with 6 of the given element
function generateTestBoard(element) {
  const res = new Array(6)
  res.fill(element)
  return res
}
// game flow as follows:
// generate random atom based on current score: (figure this out)
// play the atom at the ideal location
// combine atoms/combos as needed
// calculate the score
// return the object representing the current game state
function simulate() {
  // start the game
  let { board, atom, score, turns } = initialize()
  console.log("initialized")

  const nextMove = getNextMove(atom, board)

  // while (board.length < 20) {
  //   const nextMove = getNextMove(atom, board)
  //   const { turnPoints, newBoard } = playMove(nextMove, atom, board)
  //   board = newBoard
  //   score += turnPoints
  //   turns++
  //   atom = generateNextAtom()
  // }
  // console.log(
  //   "Game ended. \nFinal score:",
  //   score,
  //   "\nTurns played:",
  //   turns,
  //   "\nFinal board:",
  //   board.toArray()
  // )
}

function initialize() {
  return {
    board: makeLL(generateInitialBoard()),
    // board: makeLL(generateTestBoard(ELEMENTS[4])),
    atom: generateRandomStartingAtom(),
    score: 0,
    turns: 0
  }
}

// function generateNextAtom(score) {
// Given the highest element or the current score (not sure which right now)
// returns a random atom
function generateNextAtom(highestElement) {}

//currentAtom:
//  { symbol: '-',
//    name: '_MINUS',
//    number: 1001,
//    color: [ 66, 120, 196 ],
//    type: 'sp' },

// Given an atom and the current board.
// returns a number between 0 and atoms.length + 1 representing the ideal move
function getNextMove(currentAtom, atoms) {
  switch (currentAtom.type) {
    case "el": {
      // are there any pairs of atoms in the array?
      const combos = getCombos(atoms)
      //   no: place atom in order
      //   yes: clone the array, remove the paired atoms.
      //     are there any pairs of atoms in the array?
      //     yes: loop...
      //     no: in the previous array, is the currently held atom on either side of the pair?
      //       no: place in order // check
      //       yes: place on the other side of the pair
      break
    }
    case "sp": {
      switch (currentAtom.name) {
        case "_PLUS": {
          // how many remaining spots on the board are there (max atoms - array.length) = (rs) ?
          // we will determine a critical value (=cv)
          // if (spots <= cv) { // running out of space
          //   if (combos on the board) {
          //     put the plus in between the middle pair (start the combo)
          //   } else {
          //     place plus to the right of lowest atom, and then continue to place plusses to the right
          //     want all atoms to have plusses to the left and right of them, so start at the lowest atom and place a plus at the left, or the right if there's already one on the left... etc
          //   }
          // } else { // plenty of space
          //   want all atoms to have plusses to the left and right of them, so start at the lowest atom and place a plus at the left, or the right if there's already one on the left... etc
          // }
          break
        }

        case "_MINUS": {
          // if (combos on board) {
          //   if (lowest atom isn't in combo) {
          //     take lowest atom, convert to plus, start combo
          //   } else {
          //     take lowest atom not in combo, convert to plus, start combo
          //   }
          // } else {
          //   take lowest atom, convert to plus, place according to plus rules above
          // }
          break
        }

        case "_CLONE": {
          // clone the highest atom and place it in a combo
          break
        }

        case "_MERGE":
          {
            // if (highest atom is in a combo) {
            //   start the combo
            // } else {
            //   merge the second highest atom with the highest atom
            // }
          }
          break

        default:
          throw new Error()
      }
    }
  }
}

function getCombos(atomsLL) {
  // all combos need pairs in the middle, so first look through the array for pairs.
  // note that there can be pairs that are the first/last elements of the array.
  const pairIndices = getPairs(atomsLL)
  console.log("got pairs")
  const length = atomsLL.length
  const combos = pairIndices.map((pair) => ({ start: pair, size: 2 }))
  pairIndices.forEach((leftPairIndex, index) => {
    // for each index, first advance the CDLL to that index
    let comboSize = 2
    if (leftPairIndex - 1 === -1) {
      decrementCDLL(atomsLL, 1)
    } else {
      incrementCDLL(atomsLL, leftPairIndex - 1) // if, LPI = 0, then this will be -1
    }
    let left = { curr: atomsLL.current, idx: leftPairIndex - 1 }
    incrementCDLL(atomsLL, comboSize + 1)
    let right = { curr: atomsLL.current, idx: leftPairIndex + comboSize }
    while (left.curr.number === right.curr.number && comboSize < length) {
      comboSize += 2
      //left first
      decrementCDLL(atomsLL, comboSize)
      left = { curr: atomsLL.current, idx: this.idx - 1 }
      incrementCDLL(atomsLL, comboSize + 1)
      right = { curr: atomsLL.current, idx: this.idx + 1 }
    }
    combos[index].size = comboSize
    atomsLL.reset()
  })
  console.log("atoms:", atomsLL.toArray())
  console.log("pairIndices:", pairIndices)
  console.log("combos:", combos)
  return combos
}
function decrementCDLL(cdll, idx) {
  for (let i = 0; i < idx; i++) {
    cdll.prev()
  }
}

function incrementCDLL(cdll, idx) {
  for (let i = 0; i < idx; i++) {
    cdll.next()
  }
}

// given a circular doubly linked list, returns indices of pairs
function getPairs(atomsLL) {
  const pairIndices = []
  atomsLL.reset()

  for (let idx = 0; idx < atomsLL.length; idx++) {
    const atom = atomsLL.current
    incrementCDLL(atomsLL, 1)
    const next = atomsLL.current
    if (atom.number === next.number) {
      pairIndices.push(idx)
    }
  }
  atomsLL.reset()
  return pairIndices
}

// Given an atom and the current board,
// returns an array representing indices in the atoms array for inserting the currentAtom that will generate a combo, or -1 if there aren't any
function getPossibleCombos({ currentAtom, atoms }) {}

// Given the currentAtom, current board state, and an integer representing the next move,
// returns the new board state
function playMove({ currentAtom, atoms, nextMove }) {}

// given an array of atoms, returns a circular doubly linked list
function makeLL(atoms) {
  const LL = new DoublyCircular()
  atoms.forEach((atom) => LL.push(atom))
  return LL
}

simulate()
