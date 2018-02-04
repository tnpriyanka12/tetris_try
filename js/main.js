$(document).ready(function(){
console.log('DOM loaded');

//Grid gridSize
const TotalGridSize = 30;


//Single Block
// block color: '#404040',



//squareShape
shapes = {

square : [
[0,0,0,0],
[0,1,1,0],
[0,1,1,0],
[0,0,0,0]
]

}
const createGrid = function ( gridSize ) {
//Blank Block
var $divBlank;

//Making shape from above single Block
for( let i = 0; i < gridSize; i++ ){
  $divBlank = $('<div class="col">').attr('class', 'col'+i);
  $('.container').append($divBlank);

  $('.col'+i).css({
    display: 'inline-block',
    top: '-'+'9px',
    height: 9*gridSize + 'px',
  });

  for( let j = 0; j < gridSize ; j++ ){
    let colname = 'row'+i
      $divBlank = $('<div>').attr('class', 'row'+j)
      $divBlank.css({
        position: 'relative',
        top: '0px',
        height: '9px',
        width: '9px',
        border: '0.01px solid #e0e0e0',
        // display: 'inline-block'
      })
      // $divBlank = addClass('col'+i)
      $('.col'+i).append($divBlank);

  }
}
}//createGrid



const createSquare = function () {
//Making shape from above single Block
for( let i = 0; i < shapes.square.length; i++ ){
  $divBlank = $('<div class="sqcol">').attr('class', 'sqcol'+i);

  $('.square').append($divBlank);

    $('.sqcol'+i).css({
      display: 'inline-block',
      height: 9*1 + 'px',
      width: 9*5 + 'px',
      // border: '1px solid green'

    });
  for( let j = 0; j < shapes.square.length; j++ ){
      if(shapes.square[i][j] == 1){
        console.log(`shape is appended here ${i} ${j}`);
        let $block = $('<div>').css({
          display: 'inline-block',
          position: 'absolute',
          top: 9*i +'px',
          left: 9*j + 'px',
          height: '9px',
          width: '9px',
          backgroundColor: '#404040',
          border: '0.01px solid red'
        })
        $block.addClass('sq'+i+j)
        $('.sqcol'+i).append($block);
      }
      else{
        console.log(`shape NOT appended here ${i} ${j}`);

        let $eblock = $('<div>').css({
          display: 'inline-block',

          position: 'absolute',
          top: 9*i +'px',
          left: 9*j + 'px',

          height: '9px',
          width: '9px',
          backgroundColor: 'none',
          border: '0.01px solid red'
        })
       $eblock.addClass('sq'+i+j)
       $('.sqcol'+i).append($eblock);
      }
  }
}

}//createSquare




createGrid(TotalGridSize);
createSquare();



});
