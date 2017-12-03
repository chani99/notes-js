YellowNote.service('noteService', function($http) {
    const storageNotesKey = 'notes';
    
    this.setNote = function(note, onSuccess) {
        var getStorage  = localStorage.getItem(storageNotesKey);
        let notes = JSON.parse(getStorage) || [];
        notes.push(note);
        var newstorage = JSON.stringify(notes);
        localStorage.setItem(storageNotesKey, newstorage);
        onSuccess(note);
    }

    this.getNotes = functoin(){
        var getStorage  = localStorage.getItem(storageNotesKey);
        let notes = JSON.parse(getStorage) || [];
        return notes;

    }
});
