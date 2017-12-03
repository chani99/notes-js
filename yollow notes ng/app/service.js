YellowNote.service('noteService', function($rootScope) {
    const storageNotesKey = 'notes';

    this.setNote = function(note) {
        var notes = this.getNotes();
        notes.push(note);
        this.setstorage(notes);
        localStorage.setItem(storageNotesKey, JSON.stringify(notes));
        $rootScope.$broadcast('note-added');

    }

    this.getNotes = function() {
        var notes = JSON.parse(localStorage.getItem(storageNotesKey)) || [];
        return notes;
    }

    this.setstorage = function(notes) {
        localStorage.setItem(storageNotesKey, JSON.stringify(notes));
    }

    this.deleteoneNote = function(idnum) {
        var notes = this.getNotes();
        notes.splice(idnum, 1);
        this.setstorage(notes);
        $rootScope.$broadcast('note-added');

    }

});