const controlador = {};

controlador.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM personas', (err, personas) =>{
			if(err){
				res.json(err);
			}
			//console.log(personas);
			res.render('personas', {
				data: personas
			});
		});
	});
};

controlador.save = (req, res) =>{
	const data = req.body;
	
	req.getConnection((err, conn) =>{
		conn.query('INSERT INTO Personas SET ?',[data], (err, persona) =>{
			//console.log(persona);
			//res.send('Works');
			res.redirect('/');
		});
	});
};

controlador.edit = (req, res) =>{
	const id = req.params.CodPersona;

	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM Personas WHERE CodPersona = ?', [id], (err, persona) =>{
			res.render('_persona_edit', {
				data: persona[0]
			});
		});
	});
};

controlador.update = (req, res) => {
	const id = req.params.CodPersona;
	const nuevaPersona = req.body;

	req.getConnection((err, conn) =>{
		conn.query('UPDATE Personas SET ? WHERE CodPersona = ?', [nuevaPersona, id], (err, persona) =>{
			res.redirect('/');
		});
	});
};

controlador.delete = (req, res) =>{
	//console.log(req.params.CodPersona);
	//res.send('works');
	const id = req.params.CodPersona;

	req.getConnection((err, conn) => {
		conn.query('DELETE FROM Personas WHERE CodPersona = ?', [id], (err, persona) =>{
			res.redirect('/');
		});
	});	
};

module.exports = controlador;