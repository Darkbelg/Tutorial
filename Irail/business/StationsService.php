<?php
/**
 * Created by PhpStorm.
 * User: stijn
 * Date: 29-Mar-17
 * Time: 19:26
 */
require_once "data/irailAPI.php";

class StationsService{
    public function getStations()
    {
        $sAPI = new IrailApi();
        $stations = $sAPI->getStations();
        return $stations;


    }

    public function getLiveBoard($stad)
    {
        $sAPI = new IrailApi();
        $treinen = $sAPI->getStationLiveBoard($stad);
        return $treinen;
    }
}