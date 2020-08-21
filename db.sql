CREATE TABLE news(
    key SERIAL NOT NULL PRIMARY KEY,
    date DATE NOT NULL,
    type VARCHAR(6) NOT NULL,
    content VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO news (date, type, content, description)
    VALUES('25-dec-2019', 'video', 'https://www.youtube.com/watch?v=PsLf10FESl4', '6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020.');