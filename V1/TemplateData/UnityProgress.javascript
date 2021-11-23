document.addEventListener("message", handleEvent);

var messageData;
var isWeb = true;
const LOCAL_GAME_KEY = "IP"
var levelDetails = 
{"currentLevel":{"level":0,"presentationCompleted":0},"level0":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0}},"level1":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level2":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level3":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level4":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0}}



// comment below 3 line if with app else uncomment
var message = {"data":{}};
message.data = {"learningTrackid":1,"gameId":1,"gameVersion":"string","predGameId":0,"gamePath":"https://kreedo-game-upload-poc.s3.us-east-2.amazonaws.com/701_LearningTeens.zip","isActive":true,"isblocked":false,"isGameDownloadComplete":true,"gameName":"Place Value Quantities","attemptId":0,"totalRewards":0,"completedCount":0,"startDateTime":"","endDateTime":"","completed":0,"isMusic":0,"rewardsPerLevel":10,"levelDetails":{"currentLevel":{"level":0,"presentationCompleted":0},"level0":{"presentation":{"completed":0,"playCount":1,"completedCount":0,"timeSpent":0}},"level1":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level2":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level3":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0},"level4":{"presentation":{"completed":0,"playCount":0,"completedCount":0,"timeSpent":0},"completed":0,"playCount":0,"completedCount":0,"timeSpent":0,"correctAttempts":0,"incorrectAttempts":0}}};


function SendDataToUnity(data) {
        // Don't change this line.
		console.log("_________Data:\n"+data)
        gameInstance.SendMessage("GetData","ReceiveData",data);
        }

        function handleEvent(message) {
          messageData = JSON.stringify(message.data);
		  }

      
	  
	  
	  
  function UnityProgress(gameInstance, progress) {
	  if (!gameInstance.Module)
		return;
	  if (!gameInstance.logo) {
		gameInstance.logo = document.createElement("div");
		gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
		gameInstance.container.appendChild(gameInstance.logo);
	  }
	  if (!gameInstance.progress) {    
		gameInstance.progress = document.createElement("div");
		gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
		gameInstance.progress.empty = document.createElement("div");
		gameInstance.progress.empty.className = "empty";
		gameInstance.progress.appendChild(gameInstance.progress.empty);
		gameInstance.progress.full = document.createElement("div");
		gameInstance.progress.full.className = "full";
		gameInstance.progress.appendChild(gameInstance.progress.full);
		gameInstance.container.appendChild(gameInstance.progress);
	  }
	  gameInstance.progress.full.style.width = (100 * progress) + "%";
	  gameInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
	  if (progress == 1){
		gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
		
		
			
		if(isWeb){
		
			/*if(localStorage.getItem(LOCAL_GAME_KEY)!=null){
				var jsonTxt = localStorage.getItem(LOCAL_GAME_KEY);
				let data = JSON.parse(localStorage.getItem(LOCAL_GAME_KEY))	
				messageData=data;
				console.log("Web - LocalStorage", data);
			}
			else{
				messageData = message.data;
				console.log("Web - Default Data: ", JSON.stringify(messageData));
			}*/
				messageData = message.data;
				console.log("Web - Default Data: ", JSON.stringify(messageData));
				
		}
		else{
			console.log("loaded from app ", messageData);
		}
		SendDataToUnity(JSON.stringify(messageData));

		}
}