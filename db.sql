CREATE TABLE news(
    key SERIAL NOT NULL PRIMARY KEY,
    date DATE NOT NULL,
    type VARCHAR(6) NOT NULL,
    content VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO news (date, type, content, description)
    VALUES('22-feb-2019', 'flyer', 'https://i.ibb.co/fXb1Cpv/flyer.jpg', 'Camel Metal Show !! Gonoba - 15. obletnica in zadnji koncert - spet! Skupaj z gosti Paragoria in Licence to Hate !!');

INSERT INTO news (date, type, content, description)
    VALUES('25-dec-2019', 'video', 'https://www.youtube.com/watch?v=PsLf10FESl4', '6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020.');