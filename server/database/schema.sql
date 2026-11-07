CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

    title TEXT NOT NULL,
    city TEXT NOT NULL,

    start_date DATE NOT NULL,
    end_date DATE NOT NULL,

    budget INTEGER DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE days (
    id SERIAL PRIMARY KEY,
    trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,

    day_number INTEGER NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE places (
    id SERIAL PRIMARY KEY,

    trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE,

    name TEXT NOT NULL,
    category TEXT,

    rating NUMERIC(2,1),

    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,

    duration TEXT
);

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,

    day_id INTEGER REFERENCES days(id) ON DELETE CASCADE,

    place_id INTEGER REFERENCES places(id),

    start_time TIME,
    end_time TIME,

    notes TEXT
);

CREATE TABLE checklists (
    id SERIAL PRIMARY KEY,

    trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE,

    title TEXT NOT NULL,

    completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,

    trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE,

    title TEXT NOT NULL,

    amount NUMERIC(10,2) NOT NULL,

    category TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);