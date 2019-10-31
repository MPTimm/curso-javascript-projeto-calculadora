class CalcController{

    //Método construtor: ocorre automaticamente quando houver a instanciação da classe
    constructor(){
        
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    //All need to happen when intiate the calculator
    initialize(){

        this.setDisplayDateTime();

       setInterval(()=>{

            this.setDisplayDateTime();

       }, 1000);
    }

    

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll('#buttons > g', '#parts > g');

        buttons.forEach((btn, index)=>{
            
            btn.addEventListener("click", e=>{

                console.log(btn.className.baseVal.replace("btn-",""));
            });
        })

    }   

    //getters e setters

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        
        return new Date();
    }

    set currentDate(value){
        
        this._currentDate = value;
    }
}