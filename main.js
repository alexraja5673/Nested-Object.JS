//Nested object
		
		const person={
			f_n:'monica',
			l_n:'geller',
			phone:'915-996-9739',
			email:'monica37@gmail.com',
			address:{
				street:{
					s_num:'495',
					s_name:'Grove street',
					},
					city:'New York',
					country:'USA',
				},
			};
		
		
		for (a in person){
			 if (person[a] instanceof Object==false){
				 console.log(a+">="+person[a]);
			 }
			 
			  if (person[a] instanceof Object){
				 for(b in person[a]){
					 if(person[a][b] instanceof Object==false){
						console.log(b+ ">=" +person[a][b]);
					 }
					 else{
						 for(c in person[a][b]){
						 console.log(c+">="+person[a][b][c]);
						}
					 }
					 }
				 }
			 
		}