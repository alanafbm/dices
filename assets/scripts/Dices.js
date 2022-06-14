export default class Dices {

    constructor(el){
        this._el = el;
        this._elImgs = this._el.querySelectorAll('[data-js-btn]');
        this._elBtns = this._el.querySelectorAll('img');
        this._elTotal = this._el.querySelectorAll('[data-js-total]');

        this._nbDices = this._elImgs.length;

        this._index = [];

        this._interval = 50;
        this._timer = 1000;

        this.init();
    }

/**
 * Initialization des comportements
 */

init(){
    for (let i = 0; i < this._elBtns.length; i++) {
       this._elBtns[i].addEventListener('click', function(e){
           if(e.target.dataset.jsBtn == 'throw') this.throw();
           else this.reset();
       }.bind(this));
        
    }
}



/**
 * Comportement au lance des dés
 */

throw(){

    this.toggleBtns(true);

    setInterval(function(){
        for (let i = 0; i < this._elImgs.length; i++) {
            this._index[i] = this.random();
            this._elImgs[i].setAttribute('src', `./assets/img/dice-${this._index[i]}.png`)
            
        }
    }.bind(this), this._interval);

    setTimeout(function(){
        clearInterval(animeDice);
        let total = 0;
        for (let i = 0; i < this._index.length; i++) {
            total += this._index[i];  
        }

        this._elTotal.textContent = total;

        for (let i = 0; i < this._elBtns.length; i++) {
            this._elBtns[i].disabled = false;
            
        }

    }.bind(this), this._timer);
}

/*Changer algumas coisa

/**
 * Reset les dés et le total
 */

reset(){

    this.dicesFace(false);
    this._elTotal.textContent = '';
    /* for (let i = 0; i < this._nbDices.length; i++) {
        this._elImgs[i].setAttribute('src', `./assets/img/dice-1.png`)

    }
 */
    this._elTotal.textContent = '';
}


random(){
    return Math.ceil(Math.random() * 6);
}

}