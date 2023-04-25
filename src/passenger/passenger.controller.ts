import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { ClientProxyCrazyFlights } from 'src/common/proxy/client-proxy';
import { PassengerDTO } from './DTO/passenger.dto';
import { PassengerMSG } from 'src/common/constants';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('passengers')
@Controller('api/v2/passenger')
export class PassengerController {

    constructor(private readonly clientProxy: ClientProxyCrazyFlights) {}

    private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

    @Get()
    getAll(): Observable<IPassenger[]> {
        return this._clientProxyPassenger.send(PassengerMSG.GET_ALL, '');
    }

    @Get(':id')
    getById(@Param('id') id: string): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.GET_BY_ID, id);
    }

    @Post()
    create(@Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.CREATE, passengerDTO);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.UPDATE, { id, passengerDTO});
    }

    @Delete(':id')
    delele(@Param('id') id: string): Observable<any> {
        return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
    }

}
