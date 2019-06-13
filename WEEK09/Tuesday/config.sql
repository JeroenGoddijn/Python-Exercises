CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name varchar(50)
);

CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id)
);

-- seeds
INSERT INTO categories VALUES
(DEFAULT, 'Thai'),
(DEFAULT, 'BBQ'),
(DEFAULT, 'Ethiopian'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Italian'),
(DEFAULT, 'German'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'American'),
(DEFAULT, 'Mexican'),
(DEFAULT, 'Syrian'),
(DEFAULT, 'Lebanese');

INSERT INTO restaurants VALUES
(DEFAULT, 'StreetFoodThaiMarket', 1),
(DEFAULT, 'Fajita King', 9),
(DEFAULT, 'Burger Bus', 8),
(DEFAULT, 'Tzatziki Central', 4),
(DEFAULT, 'Palazzio Italiano', 5),
(DEFAULT, 'Biergarten Alfred', 6);
