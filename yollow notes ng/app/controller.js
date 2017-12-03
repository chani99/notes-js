YellowNote.controller('inputCtrl', function($scope, noteService) {
    $scope.note = {};

    $scope.addNote = function() {
        noteService.setNote($scope.note);
    }




});



YellowNote.controller('allnotes', function($scope, noteService) {
    $scope.notes = noteService.getNotes();

    $scope.$on('note-added', function() {
        $scope.notes = noteService.getNotes();
    });

    $scope.deletenote = function() {
        let id = event.target.id;
        noteService.deleteoneNote(id);
    }


});