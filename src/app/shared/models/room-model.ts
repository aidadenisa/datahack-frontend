import { Entity } from '../../core/models/entity.model';
import { LocationModel } from './location-model';

export interface RoomModel extends Entity {
    name: string;
    location?: LocationModel;
    capacity?: number;
    area?: number;
    soundSystem?: boolean;
    seats?: boolean;
}
