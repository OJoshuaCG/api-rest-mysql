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
			console.log(persona);
			//res.send('Works');
			res.redirect('/');
		});
	});
};

module.exports = controlador;