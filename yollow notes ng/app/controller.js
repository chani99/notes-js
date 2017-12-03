YellowNote.controller('inputCtrl', function($scope, noteService) {
    $scope.note = {};

    $scope.addNote = function() {
        noteService.setNote($scope.note);
        
    }
        
        function onSuccess(res) {

        }
        function onError(res) {
        }
            
     
});

YellowNote.controller('allnotes', function($scope, noteService) {

    $scope.notes = noteService.getNotes();
        
   
     
});





    
