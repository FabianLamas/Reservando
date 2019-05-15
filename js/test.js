
window.onload = function() {
    const expect = chai.expect;

    describe('Testeo de reservar horario', function(){
        it(`Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.`, function(){
            const newResto = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            newResto.reservarHorario("13:00");
            expect(["15:30", "18:00"]).to.eql(newResto.horarios);
        });
        it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function(){ 
            const newResto = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
            newResto.reservarHorario("14:30");
            expect(["15:00", "12:30"]).to.eql(newResto.horarios);
        });
        it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function(){
            const newResto = new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
            newResto.reservarHorario("22:30");
            expect(["11:30", "12:00"]).to.eql(newResto.horarios);
        });

        it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function(){
            const newResto = new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]);
            newResto.reservarHorario("11:00");
            expect(["12:00", "15:00", "17:30"]).to.eql(newResto.horarios);
        });
        it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function(){
            const newResto = new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]);
            newResto.reservarHorario("10:00");
            expect(["12:00", "13:30", "16:00"]).to.eql(newResto.horarios);
        });
        it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function(){
            const newResto = new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]);
            newResto.reservarHorario("09:00");
            expect(["17:00", "19:00", "20:30"]).to.eql(newResto.horarios);
        });

        it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro, el arreglo se mantiene igual.', function(){
            const newResto = new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]);
            newResto.reservarHorario();
            expect(["13:00", "15:30", "18:00"]).to.eql(newResto.horarios);
        });
        it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro, el arreglo se mantiene igual.', function(){
            const newResto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
            newResto.reservarHorario();
            expect(["14:30", "15:30", "19:00"]).to.eql(newResto.horarios);
        });
        it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro, el arreglo se mantiene igual.', function(){
            const newResto = new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]);
            newResto.reservarHorario();
            expect(["16:00", "18:00", "21:30"]).to.eql(newResto.horarios);
        });
    });
    
    describe('Testeo de obtener puntuacion', function(){
        it('Dado un restaurant con determinadas calificaciones, la puntuación se calcula correctamente.', function(){
            const newResto =  new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]);
            expect(6).to.equal(newResto.obtenerPuntuacion());
        });
        it('Dado un restaurant con determinadas calificaciones, la puntuación se calcula correctamente.', function(){
            const newResto =  new Restaurant(11, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]);
            expect(6.6).to.equal(newResto.obtenerPuntuacion());
        });

        it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function(){
            const newResto =  new Restaurant(12, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", []);
            expect(0).to.equal(newResto.obtenerPuntuacion());
        });
        it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function(){
            const newResto =  new Restaurant(13, "The Counter", "Hamburguesa", "Nueva York", ["17:00", "18:00", "19:30"], "../img/hamburguesa2.jpg", []);
            expect(0).to.equal(newResto.obtenerPuntuacion());
        });
    });

    describe('Testeo de calificacion', function(){
        it('Al ingresar una calificacion nueva, se agrega correctamente al array.', function(){
            const newResto = new Restaurant(14, "TGood Seed Salads & Market", "Ensalada", "Nueva York", ["17:00", "19:00", "22:30"], "../img/ensalada4.jpg", [8, 8, 8, 8, 5, 7]);
            newResto.calificar(9);
            expect([8, 8, 8, 8, 5, 7, 9]).to.eql(newResto.calificaciones);
        });

        it('Al ingresar una calificacion negativa, al array se mantiene igual.', function(){
            const newResto = new Restaurant(15, "Carmine's", "Pasta", "Nueva York", ["14:30", "16:30", "19:00"], "../img/pasta1.jpg", [9, 8, 5, 5, 9]);
            newResto.calificar(-1);
            expect([9, 8, 5, 5, 9]).to.eql(newResto.calificaciones);
        });

        it('Al ingresar una calificacion nula, al array se mantiene igual.', function(){
            const newResto = new Restaurant(16, "Pastasciutta", "Pasta", "Roma", ["14:30", "15:30", "19:00"], "../img/pasta3.jpg", [4, 9, 10, 9, 4, 6]);
            newResto.calificar(0);
            expect([4, 9, 10, 9, 4, 6]).to.eql(newResto.calificaciones);
        });

        it('Al ingresar una calificacion que no sean numeros, al array se mantiene igual.', function(){
            const newResto = new Restaurant(17, "Vapiano", "Pasta", "Berlín", ["12:00", "15:00", "17:30"], "../img/pasta4.jpg", [8, 4, 6, 7, 4, 7]);
            newResto.calificar("aaaaaaa");
            expect([8, 4, 6, 7, 4, 7]).to.eql(newResto.calificaciones);
        });

        it('Al ingresar una calificacion mayor a 10, al array se mantiene igual.', function(){
            const newResto = new Restaurant(18, "Pizza Union Spitalfields", "Pizza", "Londres", ["12:00", "15:00", "17:30"], "../img/pizza1.jpg", [8, 8, 8, 4, 6, 7]);
            newResto.calificar(20);
            expect([8, 8, 8, 4, 6, 7]).to.eql(newResto.calificaciones);
        });
    });

    describe('Testeo de buscar restaurante', function(){
        const newList = new Listado(listadoDeRestaurantes);
        
        it('Dado un id se obtiene un objeto.', function(){          
            expect(newList.buscarRestaurante(19)).to.be.an('object');
        });

        it('Dado un id correcto se obtiene un objeto con el nombre del restaurant correspondiente.', function(){          
            expect(newList.buscarRestaurante(19).nombre).to.equal( "Les Deux Magots");
        });

        it('Dado un id negativo se obtiene un un mensaje de error como resultado.', function(){  
            expect(newList.buscarRestaurante(-768)).to.eql("No se ha encontrado ningún restaurant");
        });

        it('Dado un id inexistente se obtiene un mensaje de error como resultado.', function(){          
            expect(newList.buscarRestaurante(500)).to.eql("No se ha encontrado ningún restaurant");
        });

        it('Dado un valor que no sea un id se obtiene un mensaje de error como resultado.', function(){          
            expect(newList.buscarRestaurante("hola")).to.eql("No se ha encontrado ningún restaurant");
        });
    });

    describe('Testeo de obtener restaurantes', function(){
        const newList = new Listado(listadoDeRestaurantes);
        
        it('Insertando rubro:pizza ciudad:Nueva York se obtine 1 solo item en el array.', function(){          
          expect(newList.obtenerRestaurantes("Pizza", "Nueva York", null).length).to.be.equal(1);
        });

        it('Insertando un rubro incorrecto se obtiene un array vacio.', function(){          
          expect(newList.obtenerRestaurantes("Hola", null, null).length).to.be.equal(0);
        });

        it('Insertando un rubro correcto se obtiene un array como resultado.', function(){          
            expect(newList.obtenerRestaurantes("Pizza", null, null)).to.be.an('array');
        });

        it('Insertando una ciudad valida se obtiene un array con la longitud correcta.', function(){          
            expect(newList.obtenerRestaurantes(null, "Berlín", null).length).to.be.equal(5);
        });

        it('Insertando un rubro valido se obtiene un array con la longitud correcta.', function(){          
          expect(newList.obtenerRestaurantes("Ensalada", null, null).length).to.be.equal(4);
        });

        it('Insertando un horario valido se obtiene un array con la longitud correcta.', function(){          
            expect(newList.obtenerRestaurantes(null, null, "13:00").length).to.be.equal(3);
        });

        it('Insertando una ciudad incorrecta se obtiene un array vacio.', function(){          
            expect(newList.obtenerRestaurantes(null, "Facebook", null).length).to.be.equal(0);
        });

        it('Insetando un horario incorrecto se obtiene un array vacio.', function(){          
            expect(newList.obtenerRestaurantes(null, null, "00:59").length).to.be.equal(0);
        });

        it('Si no se especifica rubro se obtiene un array con todos los restaurantes.', function(){          
            expect(newList.obtenerRestaurantes(null, null, null).length).to.be.equal(24);
        });
    });

    describe('Testeo ', function(){
        it('Calculo del precio base correcto.', function(){          
            let nuevaReserva = new Reserva (new Date(2018, 5, 31, 10, 00), 7, 350, "DES1");
            expect(nuevaReserva.precioBase()).to.be.equal(2450);
        });
        it('Calculo del precio base correcto.', function(){          
            let nuevaReserva = new Reserva (new Date(2018, 11, 15, 13, 00), 8, 300, "DES15");
            expect(nuevaReserva.precioBase()).to.be.equal(2400);
        });
        it('Calculo del precio base correcto.', function(){          
            let nuevaReserva = new Reserva (new Date(2018, 7, 24, 20, 00), 4, 250, "DES200");
            expect(nuevaReserva.precioBase()).to.be.equal(1000);
        });

        it('Calculo del precio total correcto aplicando descuentos.', function(){          
            let nuevaReserva = new Reserva (new Date(2018, 5, 31, 10, 00), 7, 350, "DES1");
            expect(nuevaReserva.precioTotal()).to.be.equal(2345);
        });
        it('Calculo del precio total correcto aplicando descuentos.', function(){          
            let nuevaReserva = new Reserva (new Date(2018, 11, 15, 13, 00), 8, 300, "DES15");
            expect(nuevaReserva.precioTotal()).to.be.equal(2160);
        });
        it('Calculo del precio total correcto aplicando descuentos.', function(){          
            let nuevaReserva = new Reserva (new Date(2018, 7, 24, 20, 00), 4, 250, "DES200");
            expect(nuevaReserva.precioTotal()).to.be.equal(950);
        });
      });
    
    mocha.run();
};
