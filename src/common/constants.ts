
export enum RabbitMQ{
    UserQueue = 'users',
    PassengerQueue = 'passengers',
    FlightsQueue = 'flights',
}

export enum UserMSG{
    CREATE = 'CREATE_USER',
    GET_ALL = 'GET_ALL_USERS',
    GET_BY_ID = 'GET_USER_BY_ID',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER',
}

export enum PassengerMSG{
    CREATE = 'CREATE_PASSENGER',
    GET_ALL = 'GET_ALL_PASSENGER',
    GET_BY_ID = 'GET_PASSENGER_BY_ID',
    UPDATE = 'UPDATE_PASSENGER',
    DELETE = 'DELETE_PASSENGER',  
}

export enum FlightMSG{
    CREATE = 'CREATE_FLIGHT',
    GET_ALL = 'GET_ALL_FLIGHT',
    GET_BY_ID = 'GET_FLIGHT_BY_ID',
    UPDATE = 'UPDATE_FLIGHT',
    DELETE = 'DELETE_FLIGHT',
    ADD_PASSENGER = 'ADD_PASSENGER',
}