/* Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente. ○ Listar
reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis. ○ As
reservas devem ser identificadas por um ID único e associadas a um único
hotel.
4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
 */

const prompt = require('prompt-sync')();

//creating objects
let hotels = [];
let reservations = [];
let reservationCounter = 1; 

//function to create a hotel
function createHotel(id, name, city, totalRooms) {
    return {
        id: id,
        name: name,
        city: city,
        totalRooms: totalRooms,
        availableRooms: totalRooms
    };
}

//function to create a reservation
function createReservation(idHotel, clientName) {
    return {
        idReservation: reservationCounter++, 
        idHotel: idHotel,
        clientName: clientName
    };
}

//function to add a hotel
function addHotel(id, name, city, totalRooms) {
    const hotel = createHotel(id, name, city, totalRooms);
    hotels.push(hotel);
    console.log("Hotel added successfully.");
}

//filter hotels by city
function searchHotelsByCity(city) {
    return hotels.filter(hotel => hotel.city === city);
}

//list all hotels
function listAllHotels() {
    if (hotels.length === 0) {
        console.log("No hotels found.");
        return;
    }
    hotels.forEach(hotel => {
        console.log(`ID: ${hotel.id}, Name: ${hotel.name}, City: ${hotel.city}, Available Rooms: ${hotel.availableRooms}`);
    });
}

//do a reservation
function doReservation(idHotel, clientName) {
    const hotel = hotels.find(h => h.id === idHotel);
    if (hotel && hotel.availableRooms > 0) {
        const reservation = createReservation(idHotel, clientName);
        reservations.push(reservation);
        hotel.availableRooms -= 1;
        console.log("Reservation made successfully.");
    } else {
        console.log("There are no available rooms in this hotel.");
    }
}

//cancel reservation
function cancelReservation(idReservation) {
    const reservation = reservations.find(r => r.idReservation === idReservation);
    if (reservation) {
        const hotel = hotels.find(h => h.id === reservation.idHotel);
        hotel.availableRooms += 1;
        reservations = reservations.filter(r => r.idReservation !== idReservation);
        console.log("Reservation cancelled successfully.");
    } else {
        console.log("Reservation not found.");
    }
}

//list reservations
function listReservations() {
    if (reservations.length === 0) {
        console.log("No reservations found.");
        return;
    }
    reservations.forEach(reservation => {
        const hotel = hotels.find(h => h.id === reservation.idHotel);
        console.log(`Reservation ID: ${reservation.idReservation}, Hotel: ${hotel.name}, Client: ${reservation.clientName}`);
    });
}

//interaction with user
function menu() {
    let option;
    do {
        console.log(
            "\nSelect an option:\n" +
            "1. Add Hotel\n" +
            "2. Search Hotels by City\n" +
            "3. Make Reservation\n" +
            "4. Cancel Reservation\n" +
            "5. List Reservations\n" +
            "6. List All Hotels\n" +
            "0. Exit\n"
        );
        
        option = prompt("Enter your option: ");
        
        switch (option) {
            case '1':
                let idHotel = prompt("Hotel ID: ");
                let hotelName = prompt("Hotel name: ");
                let cityHotel = prompt("Hotel city: ");
                let totalRooms = prompt("Number of total rooms: ");
                addHotel(idHotel, hotelName, cityHotel, parseInt(totalRooms));
                break;
            case '2':
                let citySearch = prompt("City to search for hotels: ");
                let hotelsCity = searchHotelsByCity(citySearch);
                if (hotelsCity.length === 0) {
                    console.log("No hotels found in this city.");
                } else {
                    hotelsCity.forEach(hotel => console.log(`ID: ${hotel.id}, Name: ${hotel.name}, Available Rooms: ${hotel.availableRooms}`));
                }
                break;
            case '3':
                let reservationIdHotel = prompt("Hotel ID: ");
                let clientName = prompt("Client Name: ");
                doReservation(reservationIdHotel, clientName);
                break;
            case '4':
                let idCancelReservation = prompt("Reservation ID to cancel: ");
                cancelReservation(parseInt(idCancelReservation));
                break;
            case '5':
                listReservations();
                break;
            case '6':
                listAllHotels();
                break;
            case '0':
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid option. Try again.");
        }
    } while (option !== '0');
}

//starts menu
menu();
