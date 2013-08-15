GameOfLife
==========

This Project includes JavaScript visualization of the Famous Conway's Game Of Life.

author: Vigneshwar.V
email: haivicky at gmail dot com 


About the Conway's Game of Life:
==================================
  
  WikiPedia entry : http://en.wikipedia.org/wiki/Conway's_Game_of_Life
  
  The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, 
  each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours,
  which are the cells that are horizontally, vertically, or diagonally adjacent.
  
  
About the Solution:
===================

The Javascript based visualization of Game Of Life involves a matrix of 9x9 buttons to get the pattern input from the user.

After the input pattern is obtained , then the next Generation is obtained based on the following rules.

  Rules for the Next Generation:
  ===============================
  
  -  Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  -  Any live cell with two or three live neighbours lives on to the next generation.
  -  Any live cell with more than three live neighbours dies, as if by overcrowding.
  -  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  
