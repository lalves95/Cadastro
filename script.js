const cadastroForm = document.getElementById('cadastroForm');
const listaClientes = document.getElementById('listaClientes');

cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome && email) {
        const clienteItem = document.createElement('li');
        clienteItem.innerHTML = `
            <span>${nome}</span>
            <span>${email}</span>
            <button class="excluir">Excluir</button>
        `;
        
        listaClientes.appendChild(clienteItem);
        clearForm();
        setupExcluirButton(clienteItem);
    }
});

function clearForm() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}

function setupExcluirButton(item) {
    const excluirButton = item.querySelector('.excluir');
    excluirButton.addEventListener('click', function() {
        listaClientes.removeChild(item);
    });
}
