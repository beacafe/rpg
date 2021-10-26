const biblioteca = require("readline");
const leitor = biblioteca.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = "";
let genero = "";
let idade = "";
let raca = "";
let classe = ""; 

const labelResposta = "Sua resposta: ";

const possibleRaces = ["Elfo", "Humano", "Vampiro", "Orc", "Anão"];
const possibleClasses = ["Bardo", "Ladino", "Necromante", "Clerigo", "Curandeiro", "Monge", "Druida", "Barbaro", "Arqueiro", "Espadachim", "Ninja", "Samurai", "Mago", "Feiticeiro", "Helicoptero de Caça"];

function recursividadeNome(){
    leitor.question("Olá, por favor me diga seu nome\n" + labelResposta , (nomeResposta) => {
        nome = nomeResposta;
    
        recursividadeGenero();
    });
}
 
function recursividadeGenero(){
    leitor.question("Qual seu genere?\n" + labelResposta , (genereResposta) => {
        if(genereResposta != "M" && genereResposta != "F" && genereResposta != "N" && genereResposta != "") {
            console.log("\nNão conheço esses pronomes :c")
            recursividadeGenero();
        }
        else{
            genero = genereResposta
            recursividadeIdade();
        }
    })   

};

function recursividadeIdade(){
    leitor.question("E a sua idade?\n" + labelResposta , (idadeAe) => {
        if(idadeAe > 0){
            idade = idadeAe;
            recursividadeRaca();
        }
        
        else{
            console.log("\nIdade Incorreta.\n");
            recursividadeIdade();
        }
    })
};

function recursividadeRaca(){
    leitor.question("Qual sua raça?\n" , (insiraRaca) => {
        let resposta = insiraRaca.trim();
        if(!possibleRaces.find((raca)=>{return raca == resposta})){
            console.log("Não conheço essa daí.");
            recursividadeRaca();
            
            
        } else{
            raca = insiraRaca
            recursividadeClasse();
        }
    });
    console.log("Possiveis Raças:")
    let racasConcatenadas = "";
    for(let percorreRaca = 0; percorreRaca < possibleRaces.length; percorreRaca++){
        racasConcatenadas += possibleRaces[percorreRaca] + ', ';
    }
    console.log(racasConcatenadas);
    console.log(labelResposta);
}

function recursividadeClasse(){
    leitor.question("Agora me diga a sua classe.\n", (insiraClasse) => {
        let respostaClasse = insiraClasse.trim();
        if(possibleClasses.find((classe)=>{return classe == respostaClasse;})){
            classe = respostaClasse;
            dadosUsuario();
            
        } else{
            console.log("Classe incorreta.")
            recursividadeClasse();

        }
    })
    console.log("Classes possiveis:")
    let classesConcatenadas = "";
    for(let percorreClasse = 0; percorreClasse < possibleClasses.length; percorreClasse++){
        classesConcatenadas += possibleClasses[percorreClasse] + ', ';
    }
    console.log(classesConcatenadas);
    console.log(labelResposta);
};

function dadosUsuario(){
    console.log(`Seus dados:
    __________________________________
    Nome: ${nome}               
    Gênero: ${genero}           
    Idade: ${idade}             
    Raça: ${raca}               
    Classe: ${classe}           
    ------------#---JS---#------------
    `)
    leitor.question("Deseja alterar?\nResponda: ",(respostaFinal) => {
        if(respostaFinal == "Sim"){
            recursividadeNome();
        }
        else{
            console.log("Bom jogo.")
        }
    });
}

recursividadeNome();