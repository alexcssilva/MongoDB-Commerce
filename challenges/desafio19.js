// 19 - Remova o item cebola de todos os sanduíches

db.produtos.updateMany({},
  {
    $pull: { ingredientes: { $in: ["cebola"] } },
  });

  db.produtos.find({},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  });