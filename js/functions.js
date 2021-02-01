function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	    return 'kamień';
	} if(argMoveId == 2){
		return 'papier';
	} if(argMoveId == 3){
		return 'nożyce';
	  } else{
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
  }
 
  function displayResult(computerMove, playerMove){
	printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
	if(computerMove == 'kamień' && playerMove == 'papier'){
		return printMessage('Ty wygrywasz!');
	} if( computerMove == 'kamień' && playerMove == 'nożyce'){
		return printMessage('komputer wygrywa!');
	} if( computerMove == 'papier' && playerMove == 'kamień'){
		return printMessage('Komputer wygrywa!');
	} if( computerMove == 'papier' && playerMove == 'nożyce'){
		return printMessage('Ty wygrywasz!');
	} if( computerMove == 'nożyce' && playerMove == 'papier'){
		return printMessage('Komputer wygrywa!');
	} if( computerMove == 'nożyce' && playerMove == 'kamień'){
		return printMessage('Ty wygrywasz!');
	} else {
		return printMessage('REMIS!');
	}
  }

 