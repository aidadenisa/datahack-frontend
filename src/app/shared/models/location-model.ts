import { Entity } from '../../core/models/entity.model';
import { RoomModel } from './room-model';
import { OrganizationModel } from './organization-model';

export interface LocationModel extends Entity {
    name: string;
    rooms?: RoomModel[];
    organization?: OrganizationModel;
}
