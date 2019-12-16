export interface Venue {

    venueName: string;
    rating: string;
    address: string;
    location: string;
    type: string;

    imageId: number;
    numberOfAttendees: number;

    openingHours: Array<string>;
    guestList: Array<string>;
    usersNationalitiesMap: Map<string, string>;
}