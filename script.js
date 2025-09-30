const listaJogadores = [
    { nome: "viktor", status: "ativo" },
    { nome: "Martha", status: "inativo" },
    { nome: "Pedro", status: "ativo" },
    { nome: "Tales", status: "inativo" },
    { nome: "Lucas", status: "ativo" }
];


console.log("--- Jogadores Ativos ---");


for (const jogador of listaJogadores) {
    
  
    if (jogador.status === "ativo") {
        
       
        console.log(jogador.nome);
    }
}

