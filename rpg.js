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

const possibleRaces = ["Elfo", "Humano", "Vampiro", "Orc", "Anão"];
const possibleClasses = ["Bardo", "Ladino", "Necromante", "Clerigo", "Curandeiro", "Monge", "Druida", "Barbaro", "Arqueiro", "Espadachim", "Ninja", "Samurai", "Mago", "Feiticeiro", "Helicoptero de Caça"];

function recursividadeNome(){
    leitor.question("Olá, por favor me diga seu nome\n" , (nomeResposta) => {
        nome = nomeResposta;
        recursividadeGenero();
    });
}
 
function recursividadeGenero(){
    leitor.question("Qual seu genere?\n" , (genereResposta) => {
        if(genereResposta != "M" && genereResposta != "F" && genereResposta != "N" && genereResposta != "") {
            console.log("Não conheço esses pronomes :c")
            recursividadeGenero();
        }
        else{
            genero = genereResposta
            recursividadeIdade();
        }
    })   
};

function recursividadeIdade(){
    leitor.question("E a sua idade?\n" , (idadeAe) => {
        if(idadeAe > 0){
            idade = idadeAe;
            recursividadeRaca();
        }
        
        else{
            console.log("Idade Incorreta.\n");
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
    console.log("Possiveis Raças:\n")
    for(let percorreRaca = 0; percorreRaca < possibleRaces.length; percorreRaca++){
        console.log(possibleRaces[percorreRaca])
    }
}

function recursividadeClasse(){
    leitor.question("Agora me diga a sua classe.", (insiraClasse) => {
        let respostaClasse = insiraClasse.trim();
        if(possibleClasses.find((classe)=>{return classe == respostaClasse;})){
            classe = respostaClasse;
            dadosUsuario();
            
        } else{
            console.log("Classe incorreta.")
            recursividadeClasse();

        }
    })
    for(let percorreClasse = 0; percorreClasse < possibleClasses.length; percorreClasse++){
        console.log(possibleClasses[percorreClasse])
    }
};

function dadosUsuario(){
    console.log(`Seus dados:
        Nome: ${nome}
        Gênero: ${genero}
        Idade: ${idade}
        Raça: ${raca}
        Classe: ${classe}
    `)
    leitor.question("Deseja alterar?",(respostaFinal) => {
        if(respostaFinal == "Sim"){
            recursividadeNome();
        }
        else{
            console.log("Bom jogo.")
        }
    });
}

recursividadeNome();