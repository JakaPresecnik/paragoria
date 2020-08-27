CREATE TABLE news(
    key SERIAL NOT NULL PRIMARY KEY,
    date VARCHAR(20),
    type VARCHAR(6) NOT NULL,
    content VARCHAR(150) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO news (date, type, content, description)
    VALUES('22-feb-2019', 'flyer', 'https://i.ibb.co/fXb1Cpv/flyer.jpg', 'Camel Metal Show !! Gonoba - 15. obletnica in zadnji koncert - spet! Skupaj z gosti Paragoria in Licence to Hate !!');

INSERT INTO news (date, type, content, description)
    VALUES('25-dec-2019', 'video', 'https://www.youtube.com/watch?v=PsLf10FESl4', '6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020.');

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
