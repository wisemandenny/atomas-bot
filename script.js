/* 
screen parsing loop:
// use autoinput to capture the screen image
// find the highest number atom
// highest atom goes to array position 0
// look at atoms to the left and right of highest atom, whichever is higher goes to array[1] and then the rest of the atoms go in their CW/CCW order into the array
// delete the screenshot

atom objects: { name, color, atomicNumber, type }
examples: 
{ name: 'H', color: '#hex', atomicNumber: 1, type: 'element' }
{ name: '+', color: '#hex(red)', atomicNumber: 0, type: 'plus' }
{ name: '-', color: '#hex(blue)', atomicNumber: 0, type: 'minus' }
{ name: '/', color: '#hex(black)', atomicNumber: 0, type: 'merge' }
{ name: '*', color: '#hex(white)', atomicNumber: 0, type: 'clone' }
/
 algorithm:
switch (currently_held_atom) {
  case (currently_held_atom.hasNumber()): {
    are there any pairs of atoms in the array?
      no: place atom in order
      yes: clone the array, remove the paired atoms.
        are there any pairs of atoms in the array? 
        yes: loop...
        no: in the previous array, is the currently held atom on either side of the pair?
          no: place in order // check
          yes: place on the other side of the pair
  }
  case (plus): {
    how many remaining spots on the board are there (max atoms - array.length) = (rs) ?
    we will determine a critical value (=cv)
    if (spots <= cv) { // running out of space
      if (combos on the board) {
        put the plus in between the middle pair (start the combo)
      } else {
        place plus to the right of lowest atom, and then continue to place plusses to the right 
        want all atoms to have plusses to the left and right of them, so start at the lowest atom and place a plus at the left, or the right if there's already one on the left... etc
      }
    } else { // plenty of space
      want all atoms to have plusses to the left and right of them, so start at the lowest atom and place a plus at the left, or the right if there's already one on the left... etc
    }
  }

  case (minus): {
    if (combos on board) {
      if (lowest atom isn't in combo) {
        take lowest atom, convert to plus, start combo
      } else {
        take lowest atom not in combo, convert to plus, start combo
      }
    } else {
      take lowest atom, convert to plus, place according to plus rules above
    }
  }

  case (clone): {
    clone the highest atom and place it in a combo
  }

  case (merge): {
    if (highest atom is in a combo) {
      start the combo
    } else {
      merge the second highest atom with the highest atom
    }
  }
}

      
*/