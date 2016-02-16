angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicScrollDelegate) {
    
    $scope.exerciseComplete = false;
    $scope.exerciseStatus = 'show-completed';
        
    $scope.exerciseList = [
        {
            id:1,
            name:'Bicycle',
            type:'cardio',
            complete:true
        },
        {
            id:2,
            name:'Swimming',
            type:'cardio',
            complete:false
        },
        {
            id:3,
            name:'Pullover',
            type:'weight',
            muscle:'back',
            complete:false
        },
        {
            id:4,
            name:'Rope Jump',
            type:'cardio',
            complete:true
        },
        {
            id:5,
            name:'Bicycles',
            type:'cardio',
            complete:true
        },
        {
            id:6,
            name:'Swimmings',
            type:'cardio',
            complete:false
        },
        {
            id:7,
            name:'Pullovers',
            type:'weight',
            muscle:'back',
            complete:false
        },
        {
            id:8,
            name:'Rope Jumps',
            type:'cardio',
            complete:true
        },
        {
            id:9,
            name:'Bicycled',
            type:'cardio',
            complete:true
        },
        {
            id:10,
            name:'Swimmingd',
            type:'cardio',
            complete:false
        },
        {
            id:11,
            name:'Pulloverd',
            type:'weight',
            muscle:'back',
            complete:false
        },
        {
            id:12,
            name:'Rope Jumpd',
            type:'cardio',
            complete:true
        }
    ];
     $scope.moveItem = function(item, fromIndex, toIndex) {
        //Move the item in the array
        $scope.exerciseList.splice(fromIndex, 1);
        $scope.exerciseList.splice(toIndex, 0, item);
      };
    
    $scope.resetScroll = function(){
       $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        
        if($scope.exerciseStatus == 'hide-completed'){
            $scope.exerciseStatus = 'show-completed';
        }else{
            $scope.exerciseStatus = 'hide-completed';
        }
    }
    
    $scope.itemStatus = function(complete, showFinishedExercises) {
        if (complete&&!showFinishedExercises) {
            return 'hide-completed';
        }
        if (complete) {
            return 'completed';
        }
    }
})

.controller('ChatsCtrl', function($scope, exercises) {
  $scope.weightExerciseList = exercises;
})

.controller('addExerciseController', function($scope, exercises){
    $scope.exercise ={};
    $scope.items = exercises;
    
    $scope.resetObject = function(item){ 
        $scope.exercise = {};
        $scope.exercise.type = item;
        console.log($scope.exercise)
    }
    
    $scope.saveExercise = function(){
          $scope.items.$add($scope.exercise);
    }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, exercises) {
  $scope.weightExerciseList = exercises;
});
