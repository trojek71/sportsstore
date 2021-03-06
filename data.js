var data = [{ id: 1, name: "Kajak", category: "Sporty wodne",
                description: "Kajak dla jednej osoby", price: 275 },
            { id: 2, name: "Kamizelka ratunkowa", category: "Sporty wodne",
                description: "Skuteczna i modna", price: 48.95 },
            { id: 3, name: "Piłka nożna", category: "Piłka nożna",
                description: "Zaakceptowana przez federację pod względem wagi i wymiarów", price: 19.50 },
            { id: 4, name: "Chorągiewki do rogów boiska", category: "Piłka nożna",
                description: "Odmień swoje boisko, nadając mu profesjonalny sznyt", price: 34.95 },
            { id: 5, name: "Stadion", category: "Piłka nożna",
                description: "Stadion na 35000 miejsc", price: 79500 },
            { id: 6, name: "Myśląca czapeczka", category: "Szachy",
                description: "Zwiększa wydajność mózgu o 75%", price: 16 },
            { id: 7, name: "Chwiejne krzesło", category: "Szachy",
                description: "Potajemnie doprowadź przeciwnika do irytacji", price: 29.95 },
            { id: 8, name: "Długa lina", category: "wspinaczka",
                description: "Tylko nie spadnij", price: 29.95 },
            { id: 9, name: "Szachownica", category: "Szachy",
                description: "Zabawa dla całej rodziny", price: 75 },
            { id: 10, name: "Król(u) złoty", category: "Szachy",
                description: "Pozłacana, zdobiona diamentami figura króla", price: 1200 }]

module.exports = function () {
    return {
        products: data,
        categories: [...new Set(data.map(p => p.category))].sort(),
        orders: [],
        email:[],
        prices: [...new Set(data.map(p => p.price))].sort()
    } 
}

