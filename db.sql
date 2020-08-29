CREATE TABLE news(
    key SERIAL NOT NULL PRIMARY KEY,
    date VARCHAR(20),
    type VARCHAR(6) NOT NULL,
    header VARCHAR(50),
    content VARCHAR(150),
    description TEXT
);

INSERT INTO news (date, type, header, content, description)
    VALUES('22 FEBRUARY 2019', 'flyer', 'Camel Metal Show - 30.3.2019', 'https://i.ibb.co/fXb1Cpv/flyer.jpg', 'Camel Metal Show !! Gonoba - 15. obletnica in zadnji koncert - spet! Skupaj z gosti Paragoria in Licence to Hate !!');

INSERT INTO news (date, type, header, content, description)
    VALUES('25 DECEMBER 2019', 'video', 'Paragoria - From the Studio', 'https://www.youtube.com/watch?v=PsLf10FESl4', '6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020.');





CREATE TABLE concerts(
    key SERIAL NOT NULL PRIMARY KEY,
    datetime TIMESTAMP NOT NULL,
    location VARCHAR(50) NOT NULL,
    description VARCHAR(100)
);

INSERT INTO concerts (datetime, location, description)
    VALUES('2015-07-22 19:00:00', 'Metal Days, Tolmin', '');

INSERT INTO concerts (datetime, location, description)
    VALUES('2016-01-15 19:00:00', 'DIRTY SKUNKS FEST, Orto Bar, Ljubljana', 'Curse of Instinct, In the Crossfire, Paragoria, Panikkk, Burn Fuse, ...');

INSERT INTO concerts (datetime, location, description)
    VALUES('2018-05-05 22:00:00', 'Lokal Patriot, Novo Mesto', 'Sarcom, Omega Sun, Paragoria');

INSERT INTO concerts (datetime, location, description)
    VALUES('2018-06-06', 'Metaljot Raspaljot, Laško', 'Decapitated, Noctiferia, Interceptor, Paragoria, Kaoz, Panikk, Valuk, ...');

INSERT INTO concerts (datetime, location, description)
    VALUES('2018-11-29', 'Winter Days of Metal, Bohinjska Bistrica', 'Atrexial, Paragoria, Skálmöld, Alestorm, Igorrr');

INSERT INTO concerts (datetime, location, description)
    VALUES('2019-01-24 21:00:00', 'Klub Gromka, Metelkova', 'Blu.Sine, Paragoria');

INSERT INTO concerts (datetime, location, description)
    VALUES('2019-03-22 21:00:00', 'Rdeča Ostriga, Škofja Loka', 'Dickless Tracy, Glista, Paragoria');

INSERT INTO concerts (datetime, location, description)
    VALUES('2019-03-30 21:00:00', 'Orto Bar, Ljubljana', 'Gonoba, Licence to Hate, Paragoria');





CREATE TABLE merch(
    key SERIAL NOT NULL PRIMARY KEY,
    type VARCHAR(10) NOT NULL,
    item VARCHAR(20) NOT NULL,
    picture VARCHAR(150) NOT NULL,
    picture_back VARCHAR(150),
    cost INTEGER NOT NULL,
    instock BOOLEAN
);

CREATE TABLE shirtsize(
    item_id INTEGER NOT NULL PRIMARY KEY,
    s_stock INTEGER,
    m_stock INTEGER,
    l_stock INTEGER,
    xl_stock INTEGER
);

insert INTO merch (type, item, picture, picture_back, cost, instock)
    VALUES('shirt', 'CROSSBACK T-shirt', 'https://i.ibb.co/VQjpYsH/crossbackfront.jpg', 'https://i.ibb.co/2cZ5hHQ/crossbackback.jpg', 15, FALSE);

insert INTO merch (type, item, picture, picture_back, cost, instock)
    VALUES('shirt', 'STARLOGO T-shirt', 'https://i.ibb.co/hDtGh02/starlogofront.jpg', 'https://i.ibb.co/WVWb9T9/starlogoback.jpg', 15, FALSE);

insert INTO merch (type, item, picture, picture_back, cost, instock)
    VALUES('shirt', 'STARLOGO Girly', 'https://i.ibb.co/SypNrd0/starlogogirlyfront.jpg', 'https://i.ibb.co/L84098Q/starlogogirlyback.jpg', 15, FALSE);

insert INTO merch (type, item, picture, picture_back, cost, instock)
    VALUES('shirt', 'CROSSBACK Girly', 'https://i.ibb.co/52zxd2D/crossbackgirlyfront.jpg', 'https://i.ibb.co/dGdSbTs/crossbackgirlyback.jpg', 15, FALSE);
