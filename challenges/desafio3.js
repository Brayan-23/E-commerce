db.produtos.find({
    nome: 'Big Mac'
}, {
    _id: false,
    nome: true,
    vendidos: true
});