import {useEffect, useState} from "react";
import GeoLocation from "@react-native-community/geolocation";
import {LatLng} from "react-native-maps";
import useAppState from "@/hooks/useAppState.ts";

function useUserLocation() {
    const [userLocation, setUserLocation] = useState<LatLng>(
        {latitude: 37.5516, longitude: 126.9898}
    );
    const [isUserLocationError, setIsUserLocationError] = useState(false);
    const {isComback} = useAppState();

    useEffect(() => {
        GeoLocation.getCurrentPosition(info => {
                const {latitude, longitude} = info.coords;
                setIsUserLocationError(false);
                setUserLocation({latitude, longitude});
            },
            () => {
                setIsUserLocationError(true);
            },
            {enableHighAccuracy: true});
    }, [isComback]);

    return {userLocation, isUserLocationError};
}

export default useUserLocation;
