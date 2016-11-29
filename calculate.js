function calculateDisc() {
	board = document.getElementById('elementi'),
    ////////////////////////////////////////////////////////////////////
    // createDocumentFragment sluzi za dodavanje DOM elemenata odjednom
    // bez potrebe svakog zasebnog upisa u DOM, 
    // vec se novi elementi ubrizgavaju DocumentFragment, pa se ceo
    // DocumentFragment ubaci u DOM
    ///////////////////////////////////////////////////////////////////
    fragment = document.createDocumentFragment();
        
    for (var i = 0; i < 3; ++i) {
        div = document.createElement('div');
        div.className = 'black';
        fragment.appendChild(div);
    
        div = document.createElement('div');
        div.className = 'white';
        fragment.appendChild(div);
        }
        
    board.appendChild(fragment); // ubrizgavanje DocumentFragmenta u postojeci elemenat
}

