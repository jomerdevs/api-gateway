
export enum RabbitMQ{
    UserQueue = 'users',
}

export enum UserMSG{
    CREATE = 'CREATE_USER',
    GET_ALL = 'GET_ALL_USERS',
    GET_BY_ID = 'GET_USER_BY_ID',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER',
}