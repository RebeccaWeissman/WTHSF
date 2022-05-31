class Security {

    constructor(){

        this.access1 = createInput("Guess1")
        this.access1.position(300,300);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(300,330);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Guess2")
        this.access2.position(650,300);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(650,330);
        this.button2.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
    }
}