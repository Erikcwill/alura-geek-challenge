const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();

// Middleware para suportar solicitações JSON
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Conecte-se ao banco de dados SQLite
const db = new sqlite3.Database("./mydb.db");

// Crie uma tabela 'products' se ela não existir
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, category TEXT, image TEXT, description TEXT, isHighlighted INTEGER DEFAULT 0)"
  );
});

// Rota para buscar todos os produtos
app.get("/api/products", (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao buscar produtos" });
    } else {
      res.json(rows);
    }
  });
});

// Rota para adicionar um produto
app.post("/api/products", (req, res) => {
  const { name, price, category, image, description } = req.body;
  const stmt = db.prepare(
    "INSERT INTO products (name, price, category, image, description) VALUES (?, ?, ?, ?, ?)"
  );

  stmt.run(name, price, category, image, description, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao adicionar o produto" });
    } else {
      res.json({ message: "Produto adicionado com sucesso" });
    }
  });
  stmt.finalize();
});

// Rota para marcar/desmarcar um produto como destacado
app.patch("/api/products/:id/highlight", (req, res) => {
  const productId = req.params.id;
  const isHighlighted = req.body.isHighlighted;

  // Atualize o status de destaque do produto
  db.run(
    "UPDATE products SET isHighlighted = ? WHERE id = ?",
    [isHighlighted, productId],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Erro ao atualizar o destaque do produto" });
      } else {
        res.json({ message: "Status de destaque atualizado com sucesso" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
