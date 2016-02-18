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

.controller('cardioExerciseController', function($scope, exercises) {
  $scope.cardioExerciseList = exercises;
    
    $scope.remove = function(item) {
        $scope.cardioExerciseList.$remove(item);
    }
})

.controller('addExerciseController', function($scope, exercises, bodyArea){
    $scope.exercise ={};
    $scope.items = exercises;
    $scope.bodyArea = bodyArea;
    
    $scope.resetObject = function(item){ 
        $scope.exercise = {};
        $scope.exercise.type = item;
    }
    
    $scope.saveExercise = function(){
          $scope.items.$add($scope.exercise);
    }

})

.controller('weightExerciseController', function($scope, bodyArea) {
  //$scope.weightExerciseList = exercises;
  $scope.bodyArea = bodyArea;
    //$scope.remove = function(item) {
        //$scope.weightExerciseList.$remove(item);
    //}
})

.controller('weightExerciseDetailController', function($scope, $stateParams, exercises) {
    $scope.exerciseId = $stateParams.exerciseId;
    $scope.weightExerciseList = exercises;
    $scope.remove = function(item) {
        $scope.weightExerciseList.$remove(item);
    }
});


