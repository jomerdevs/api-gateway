import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FlightMSG, PassengerMSG } from 'src/common/constants';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { ClientProxyCrazyFlights } from 'src/common/proxy/client-proxy';
import { FlightDTO } from './DTO/flight.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('flights')
@Controller('api/v2/flight')
export class FlightController {

    constructor(private readonly clientProxy: ClientProxyCrazyFlights) {}

    private _clientProxyFlights = this.clientProxy.clientProxyFlights();
    private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

    @Get()
    getAll(): Observable<IFlight[]> {
        return this._clientProxyFlights.send(FlightMSG.GET_ALL, '');
    }

    @Get(':id')
    getById(@Param('id') id: string): Observable<IFlight> {
        return this._clientProxyFlights.send(FlightMSG.GET_BY_ID, id);
    }

    @Post()
    create(@Body() flightsDTO: FlightDTO): Observable<IFlight> {
        return this._clientProxyFlights.send(FlightMSG.CREATE, flightsDTO);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() flightsDTO: FlightDTO): Observable<IFlight> {
        return this._clientProxyFlights.send(FlightMSG.UPDATE, { id, flightsDTO});
    }

    @Delete(':id')
    delele(@Param('id') id: string): Observable<any> {
        return this._clientProxyFlights.send(FlightMSG.DELETE, id);
    }

    @Post(':flightId/passenger/:passengerId')
    async addPassenger(@Param('flightId') flightId: string, @Param('passengerId') passengerId: string): Promise<Observable<any>> {
        const passenger = await this._clientProxyPassenger.send(PassengerMSG.GET_BY_ID, passengerId);

        if( !passenger ) throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);

        return this._clientProxyFlights.send(FlightMSG.ADD_PASSENGER, {
            flightId,
            passengerId,
        });
    }
}
