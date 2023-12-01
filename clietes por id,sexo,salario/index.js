const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('clientes.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS CLIENTE (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(32), sexo VARCHAR(1), idade INTEGER, salario REAL, cidade CHAR, estado VARCHAR(2))');

  const insert = db.prepare('INSERT INTO CLIENTE (nome, sexo, idade, salario, cidade, estado) VALUES (?, ?, ?, ?, ?, ?)');
  /*insert.run('Ana Silva', 'F', 29, 5800.75, 'São Paulo', 'SP');
  insert.run('Carlos Oliveira', 'M', 31, 6700.20, 'Rio de Janeiro', 'RJ');
  insert.run('Mariana Santos', 'F', 26, 5200.50, 'Belo Horizonte', 'MG');
  insert.run('Lucas Pereira', 'M', 35, 7200.90, 'Curitiba', 'PR');
  insert.run('Camila Costa', 'F', 30, 6200.45, 'Porto Alegre', 'RS');
  insert.run('Rafael Lima', 'M', 28, 5500.30, 'Florianópolis', 'SC');
  insert.run('Juliana Martins', 'F', 33, 6900.15, 'Recife', 'PE');
  insert.run('Fernando Oliveira', 'M', 24, 5000.80, 'Salvador', 'BA');
  insert.run('Isabela Costa', 'F', 37, 7500.60, 'Fortaleza', 'CE');
  insert.run('Pedro Santos', 'M', 25, 6000.40, 'Porto Velho', 'RO');
  insert.run('Larissa Silva', 'F', 34, 7100.25, 'Manaus', 'AM');
  insert.run('Eduardo Oliveira', 'M', 27, 5600.70, 'Goiânia', 'GO');
  insert.run('Amanda Costa', 'F', 32, 6800.55, 'Belém', 'PA');
  insert.run('Gabriel Lima', 'M', 29, 5900.35, 'Campo Grande', 'MS');
  insert.run('Thais Pereira', 'F', 36, 7300.45, 'Cuiabá', 'MT');
  insert.run('Vinicius Santos', 'M', 23, 5100.20, 'Natal', 'RN');
  insert.run('Patricia Oliveira', 'F', 28, 5400.80, 'Teresina', 'PI');
  insert.run('Rodrigo Costa', 'M', 31, 6600.60, 'João Pessoa', 'PB');
  insert.run('Carolina Silva', 'F', 26, 5200.40, 'Aracaju', 'SE');
  insert.run('Lucas Martins', 'M', 35, 7100.30, 'Vitória', 'ES');
  insert.run('Beatriz Lima', 'F', 30, 6400.75, 'Recife', 'PE');
  insert.run('Gustavo Santos', 'M', 28, 5800.20, 'Salvador', 'BA');
  insert.run('Laura Costa', 'F', 25, 5200.50, 'Fortaleza', 'CE');
  insert.run('Ricardo Oliveira', 'M', 33, 7000.90, 'Brasília', 'DF');
  insert.run('Fernanda Silva', 'F', 29, 5500.45, 'Porto Alegre', 'RS');
  insert.run('Daniel Pereira', 'M', 26, 5000.30, 'Manaus', 'AM');
  insert.run('Julia Santos', 'F', 31, 6700.45, 'Belém', 'PA');
  insert.run('Leandro Costa', 'M', 27, 6100.80, 'Florianópolis', 'SC');
  insert.run('Leticia Lima', 'F', 34, 7200.60, 'Vitória', 'ES');
  insert.run('Bruno Martins', 'M', 32, 6900.35, 'Campo Grande', 'MS');*/
  insert.finalize();
}); 

app.get('/cliente/:id', (req, res) => {
  const clientId = req.params.id;
  db.get('SELECT * FROM CLIENTE WHERE id = ?', [clientId], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ cliente: row });
  });
});

app.get('/clientesporsexo/:sexo', (req, res) => {
  const sexo = req.params.sexo;
  db.all('SELECT * FROM CLIENTE WHERE sexo = ?', [sexo], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ clientes: rows });
  });
});

app.get('/clientesPorSalario/:salario', (req, res) => {
  const salario = req.params.salario;
  db.all('SELECT * FROM CLIENTE WHERE salario >= ?', [salario], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ clientes: rows });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
