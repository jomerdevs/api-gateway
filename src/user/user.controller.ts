import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientProxyCrazyFlights } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from 'src/common/constants';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('api/v2/user')
export class UserController {

    constructor(private readonly clientProxy: ClientProxyCrazyFlights) {}

    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    @Post()
    create(@Body() userDTO: UserDTO): Observable<IUser>{
        return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
    }

    @Get()
    getAll(): Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.GET_ALL, '');
    }

    @Get(':id')
    getById(@Param('id') id: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.GET_BY_ID, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDTO: UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDTO});
    }

    @Delete(':id')
    delele(@Param('id') id: string): Observable<any> {
        return this._clientProxyUser.send(UserMSG.DELETE, id);
    }

}
