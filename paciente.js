class Paciente {
    constructor(nome, idade, cidade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.sexo = sexo;
        this.doenca = "virose";
        this.leito = "23";
        this.tempoHospital = 5;
        this.medicamentos = [];
    }

    adicionarDoenca(doenca) {
        this.doenca = doenca;
    }

    adicionarLeito(leito) {
        this.leito = leito;
    }

    atualizarTempoHospital(tempo) {
        this.tempoHospital = tempo;
    }

    adicionarMedicamento(medicamento) {
        this.medicamentos.push(medicamento);
    }

    obterDetalhes() {
        return {
            nome: this.nome,
            idade: this.idade,
            cidade: this.cidade,
            sexo: this.sexo,
            doenca: this.doenca,
            leito: this.leito,
            tempoHospital: this.tempoHospital,
            medicamentos: this.medicamentos
        };
    }
}

let pacienteAtual = null;

function salvarPaciente() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.getElementById('sexo').value;

    pacienteAtual = new Paciente(nome, idade, cidade, sexo);

    // Armazenar paciente no localStorage
    localStorage.setItem('paciente', JSON.stringify(pacienteAtual));
    
    alert('Paciente salvo com sucesso!');
    window.location.href = 'detalhes.html';
}

function carregarDetalhes() {}
    const pacienteDados = JSON.parse(localStorage.getItem('paciente'));
    
    if (pacienteDados) {
        pacienteAtual = new Paciente(
            pacienteDados.nome,
            pacienteDados.idade,
            pacienteDados.cidade,
            pacienteDados.sexo
        );
        pacienteAtual.doenca = pacienteDados.doenca;
        pacienteAtual.leito = pacienteDados.leito;
        pacienteAtual.tempoHospital = pacienteDados.tempoHospital;
        pacienteAtual.medicamentos = pacienteDados.medicamentos;
        
        const detalhesDiv = document.getElementById('detalhes');
        detalhesDiv.innerHTML = `
            <p><strong>Nome:</strong> ${pacienteAtual.nome}</p>
            <p><strong>Idade:</strong> ${pacienteAtual.idade}</p>
            <p><strong>Cidade:</strong> ${pacienteAtual.cidade}</p>
            <p><strong>Sexo:</strong> ${pacienteAtual.sexo}</p>
            <p><strong>Doença:</strong> ${pacienteAtual.doenca}</p>
            <p><strong>Leito:</strong> ${pacienteAtual.leito}</p>
            <p><strong>Tempo no Hospital:</strong> ${pacienteAtual.tempoHospital} dias</p>
            <p><strong>Medicamentos:</strong> ${pacienteAtual.medicamentos.join(', ')}</p>
        `;
    } else {
        document.getElementById('detalhes').innerHTML = '<p>Nenhum paciente encontrado.</p>';
    }