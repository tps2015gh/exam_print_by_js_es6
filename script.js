// Set the number of columns and rows
const columns = 4;
const rows = 6;

// Set the rectangle padding
const padding = 10;

// Calculate the rectangle width and height
const rectWidth = (A4Paper.width - (columns + 1) * padding) / columns;
const rectHeight = (A4Paper.height - (rows + 1) * padding) / rows;

// Create a new A4 paper
const paper = new A4Paper();

// Set the paper's background color to white
paper.setBackgroundColor("white");

// Set the paper's line color to black
paper.setLineColor("black");

// Loop through the columns and rows
for (let c = 0; c < columns; c++) {
  for (let r = 0; r < rows; r++) {
    // Calculate the rectangle x and y coordinates
    const x = padding + (padding + rectWidth) * c;
    const y = padding + (padding + rectHeight) * r;

    // Draw the rectangle
    paper.drawRect(x, y, rectWidth, rectHeight);
  }
}

// Print the A4 paper
paper.print();
